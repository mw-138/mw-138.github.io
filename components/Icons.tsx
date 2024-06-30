import { LucideProps } from "lucide-react";
import Link from "next/link";

export const Icons = {
  siteLogo: (props: LucideProps) => (
    <Link href="/">
      <svg {...props} viewBox="0 0 800 800">
        <path
          className="cls-1"
          d="M257,579.132V729L400,533.906,543,728.113V294.472l-57.733,57.641-0.888,199.528-83.491-114.4-85.267,114.4V522.377Zm0-72.717,57.733-57.641,0.888-201.3L400,362.755l85.267-115.283v30.151L543,219.981V71L400.888,266.094,257,71V506.415Z"
        />
      </svg>
    </Link>
  ),
};
