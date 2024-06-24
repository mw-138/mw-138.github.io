import WebsiteNavigation from "@/components/WebsiteNavigation";
import Game from "./components/Game";
import { LifeSimulatorProvider } from "./context/LifeSimulatorContext";

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
