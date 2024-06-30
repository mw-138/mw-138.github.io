import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { randomBytes, randomUUID } from "crypto";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("credentials error caught: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  callbacks: {
    async jwt({ token, trigger, session, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      console.log("token", token);
      // if (trigger === "update") {
      //   token.name = session.name;
      // } else {
      //   if (token.email) {
      //     // const user = await getUserByEmail({email: token.email})
      //     const user = await User.findOne({ email: token.email });
      //     // console.log({user})
      //     token.name = user.name;
      //     token._id = user._id;
      //     // token.role = user.role;
      //     // token.provider = user.provider;
      //   }
      // }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          _id: token._id,
          role: token.role,
          provider: token.provider,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/signIn",
  },
};
