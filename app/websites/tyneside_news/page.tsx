import Footer from "@/app/components/Footer";
import WebsiteNavigation from "@/app/components/WebsiteNavigation";
import React from "react";
import NewsCard from "./components/NewsCard";
import Nav from "./components/Nav";
import { Articles } from "./articles";
import ProjectWipBanner from "@/app/components/ProjectWipBanner";

const page = () => {
  return (
    <>
      <ProjectWipBanner />
      <main className="bg-white font-['Josefin_Sans'] text-black">
        <Nav />
        <section className="p-4">
          <h1 className="pb-4 text-2xl font-bold uppercase">Recent</h1>
          <div className="flex flex-col gap-4">
            {Articles.map((item, index) => (
              <NewsCard key={index} news={item} />
            ))}
          </div>
        </section>
      </main>
      <WebsiteNavigation />
      <Footer />
    </>
  );
};

export default page;
