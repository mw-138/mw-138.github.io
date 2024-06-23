import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

interface BreadcrumbsEntry {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  entries: BreadcrumbsEntry[];
  className?: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { entries, className } = props;
  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        {entries.map((entry, index) => (
          <Fragment key={index}>
            <BreadcrumbItem className="flex items-center">
              <BreadcrumbLink href={entry.href}>{entry.label}</BreadcrumbLink>
            </BreadcrumbItem>
            {index !== entries.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
