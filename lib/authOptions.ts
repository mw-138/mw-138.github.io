import User from "@/models/User";
import bcrypt from "bcryptjs";
import { randomBytes, randomUUID } from "crypto";
import {
  Account,
  User as AuthUser,
  NextAuthOptions,
  Profile,
  Session,
} from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import connect from "./db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password,
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
          return null;
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
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
    async signIn({
      user,
      account,
      profile,
      email,
    }: {
      user: AuthUser | AdapterUser;
      account: Account | null;
      profile?: Profile | undefined;
      email?: {
        verificationRequest?: boolean;
      };
      credentials?: Record<string, CredentialInput>;
    }): Promise<any> {
      if (account?.provider === "credentials") {
        return true;
      } else if (account?.provider === "github") {
        await connect();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({ email: user.email });
            await newUser.save();
            return true;
          }
          return true;
        } catch (error) {
          console.log("Error saving user", error);
          return false;
        }
      }
    },
    async jwt({ token, user }: { token: any; user: AuthUser }) {
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
    async session({ session, token }: { session: Session; token: any }) {
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
    signIn: "/login",
  },
};
