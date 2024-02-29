import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi, I&apos;m Matthew Watson</h1>
            <p className="py-6">
              I am a programmer from the United Kingdom with 7+ years of
              self-taught and College tuition using Unity and C#.
            </p>
            <Link className="btn btn-primary" href="/about">
              About Me
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
