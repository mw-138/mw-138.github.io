import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Project from "../classes/Project";

interface PortfolioCardProps {
  project: Project;
}

const ProjectCard = (props: PortfolioCardProps) => {
  return (
    <div className="card image-full w-auto bg-base-100 md:w-96">
      <figure>
        <Image
          src={props.project.thumbnail}
          width={0}
          height={0}
          alt=""
          className="aspect-video"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.project.title}</h2>
        <div className="flex-1">
          {props.project.tags.map((tag, index) => (
            <div key={index} className="badge badge-primary">
              {tag}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link href={props.project.GetSiteUrl()} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
