import Image from "next/image";
import React from "react";
import NewsArticle from "../interfaces/NewsArticle";
import Link from "next/link";
import { FaReadme } from "react-icons/fa";

type NewsProps = {
  news: NewsArticle;
};

const NewsCard = ({ news }: NewsProps) => {
  return (
    <div className="border border-black p-2">
      <Image
        src={news.image}
        width={0}
        height={0}
        alt=""
        className="aspect-video h-48 w-full object-cover object-top"
      />
      <h1 className="mt-2 text-xl font-bold uppercase">{news.title}</h1>
      <p className="mb-2">{news.overview}</p>
      <Link href={`/websites/tyneside_news/${news.id}`}>
        <button className="flex w-full items-center justify-center gap-2 border border-black bg-white p-1 text-black transition-colors hover:bg-black hover:text-white">
          <span>
            <FaReadme size={20} />
          </span>
          Read More
        </button>
      </Link>
    </div>
  );
};

export default NewsCard;
