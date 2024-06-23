import Footer from "@/components/Footer";
import WebsiteNavigation from "@/components/WebsiteNavigation";
import { LifeSimulatorProvider } from "./context/LifeSimulatorContext";
import Game from "./components/Game";

export default function page() {
  return (
    <>
      <LifeSimulatorProvider>
        <Game />
      </LifeSimulatorProvider>
      <WebsiteNavigation />
    </>
  );
}
