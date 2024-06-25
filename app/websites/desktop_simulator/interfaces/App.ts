import { LucideIcon } from "lucide-react";

export default interface App {
  id: string;
  title: string;
  icon: LucideIcon;
  content: JSX.Element;
  isOpen: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
}
