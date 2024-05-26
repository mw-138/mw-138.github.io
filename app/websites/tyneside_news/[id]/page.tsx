import React from "react";
import { Articles } from "../articles";
import { notFound } from "next/navigation";
import Nav from "../components/Nav";
import WebsiteNavigation from "@/app/components/WebsiteNavigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const article = Articles.find((entry) => entry.id === id);
  const title = article ? article.title : "No Project Found";
  return {
    title: title,
  };
}

export async function generateStaticParams() {
  return Articles.map((article) => ({
    id: article.id,
  }));
}

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const article = Articles.find((entry) => entry.id === id);
  if (!article) {
    notFound();
  }
  return (
    <>
      <main className="bg-white font-['Josefin_Sans'] text-black">
        <Nav />
        <section className="p-4">
          <Link href="/websites/tyneside_news">
            <button className="justify-left mb-2 flex w-full items-center border border-black bg-white p-1 text-black transition-colors hover:bg-black hover:text-white">
              <span>
                <MdChevronLeft size={20} />
              </span>
              Back
            </button>
          </Link>
          <Image
            src={article.image}
            width={0}
            height={0}
            alt=""
            className="aspect-video h-48 w-full object-cover object-top"
          />
          <h1 className="mt-2 text-xl font-bold uppercase">{article.title}</h1>
          <p className="text-sm text-gray-500">
            Published by {article.author} @{" "}
            {article.publishedAt.toLocaleString()}
          </p>
          <p className="mt-5">{article.fullText}</p>
        </section>
      </main>
      <WebsiteNavigation />
      <Footer />
    </>
  );
};

export default page;
