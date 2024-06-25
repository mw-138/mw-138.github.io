import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageTemplateProps extends PropsWithChildren {
  hideNavbar?: boolean;
  hideFooter?: boolean;
}

export default function PageTemplate({
  hideNavbar = false,
  hideFooter = false,
  children,
}: PageTemplateProps) {
  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
