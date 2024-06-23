import Footer from "@/components/Footer";
import WebsiteNavigation from "@/components/WebsiteNavigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <main className="flex flex-col bg-slate-200 font-['Chivo'] text-slate-600 selection:bg-slate-300">
        <nav className="flex h-48 items-center justify-center p-12">
          <ul className="flex flex-col justify-between text-3xl font-bold uppercase sm:flex-row sm:gap-12 md:gap-28 lg:gap-52">
            {["About", "Portfolio", "Contact"].map((item, index) => (
              <li
                key={index}
                className="border-b-2 border-transparent p-2 transition-all hover:border-slate-600"
              >
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="flex flex-1 items-center justify-center px-4 py-2 pt-0 sm:pt-0 md:px-16 md:py-8 md:pt-0 lg:px-32 lg:py-16 lg:pt-0">
          <div className="flex h-full w-full flex-col-reverse gap-2 rounded-md border-2 border-slate-600 p-2 md:flex-row">
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h1 className="p-4 text-4xl font-semibold lg:text-7xl">
                  John Appleseed
                </h1>
                <p className="p-4 text-3xl">
                  Senior Front-End Developer based in San Francisco,
                  specializing in building responsive, user-friendly web
                  applications using modern JavaScript frameworks.
                </p>
              </div>
              <div>
                <p className="p-4 font-semibold">john.appleseed@contact.com</p>
                <div className="flex flex-row items-center justify-start gap-4 p-4">
                  <FaInstagram
                    size={40}
                    className="transition-colors hover:cursor-pointer hover:text-slate-700"
                  />
                  <FaFacebookF
                    size={40}
                    className="transition-colors hover:cursor-pointer hover:text-slate-700"
                  />
                  <FaXTwitter
                    size={40}
                    className="transition-colors hover:cursor-pointer hover:text-slate-700"
                  />
                  <FaLinkedin
                    size={40}
                    className="transition-colors hover:cursor-pointer hover:text-slate-700"
                  />
                </div>
              </div>
            </div>
            <Image
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={0}
              height={0}
              className="aspect-square w-full flex-1 overflow-hidden rounded-md object-cover object-center"
            />
          </div>
        </section>
      </main>
      <WebsiteNavigation />
    </>
  );
};

export default page;
