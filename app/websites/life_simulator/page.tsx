import WebProjectNavigation from "@/components/WebProjectNavigation";
import Game from "./components/Game";
import { LifeSimulatorProvider } from "./context/LifeSimulatorContext";
import PageTemplate from "@/components/PageTemplate";

export default function page() {
  return (
    <PageTemplate hideNavbar>
      <LifeSimulatorProvider>
        <Game />
      </LifeSimulatorProvider>
      <WebProjectNavigation />
    </PageTemplate>
  );
}
