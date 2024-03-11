import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../components/Pagination";

interface CardProps {
  title: string;
  link: string;
  image: string;
}

const PortfoliosPage = async () => {
  const Card = (props: CardProps) => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src={props.image}
            width={0}
            height={0}
            alt=""
            className="w-full h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
          <Link href={props.link} className="btn btn-primary">
            Visit
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-evenly p-20">
        <Card
          title="Game Development"
          link="/portfolios/game-development"
          image="https://assets-global.website-files.com/5b651f8b5fc94c4e27470a81/622227fd2ce3cc0455a88166_blog-gamedev-fullsize.png"
        />
        {/* <Card
          title="Software Development"
          link="/portfolios/software-development"
          image="https://www.perforce.com/sites/default/files/styles/social_preview_image/public/image/2020-01/image-blog-future-software-development.png?itok=eO9Fa9k-"
        />
        <Card
          title="Web Development"
          link="/portfolios/web-development"
          image="https://miro.medium.com/v2/resize:fit:12000/0*tQQ7SLPOJfxaG4ZY"
        /> */}
      </div>
      <Footer />
    </>
  );
};

export default PortfoliosPage;
