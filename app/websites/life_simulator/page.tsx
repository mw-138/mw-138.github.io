import Footer from "@/app/components/Footer";
import WebsiteNavigation from "@/app/components/WebsiteNavigation";
import React from "react";
import { LifeSimulatorProvider } from "./context/LifeSimulatorContext";
import Game from "./components/Game";

export default function page() {
  return (
    <>
      <LifeSimulatorProvider>
        <Game />
      </LifeSimulatorProvider>
      <WebsiteNavigation />
      <Footer />
    </>
  );
}
