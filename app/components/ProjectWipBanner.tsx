import React from "react";

const ProjectWipBanner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap bg-base-100 text-base-content ${className}`}
    >
      <div className="scrolling-text w-full px-4 py-2 text-lg font-bold">
        This project is a work-in-progress!
      </div>
    </div>
  );
};

export default ProjectWipBanner;
