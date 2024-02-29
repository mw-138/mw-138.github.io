import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  pageUrl: string;
}

const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <Image
          src={props.thumbnail}
          width={0}
          height={0}
          alt=""
          className="flex-1"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          {props.pageUrl !== "" && (
            <Link href={props.pageUrl} className="btn btn-primary">
              Visit Game
            </Link>
          )}
          <Link href={props.link} className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
