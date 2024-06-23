import { cn } from "@/lib/utils";

const ProjectWipBanner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap border-b border-muted bg-background text-foreground",
        className,
      )}
    >
      <div className="scrolling-text w-full px-4 py-2 text-lg font-bold">
        This project is a work-in-progress!
      </div>
    </div>
  );
};

export default ProjectWipBanner;
