import WebProjectNavigation from "@/components/WebProjectNavigation";
import Game from "./components/Game";
import { LifeSimulatorProvider } from "./context/LifeSimulatorContext";
import PageTemplate from "@/components/PageTemplate";
import { redirect } from "next/navigation";

export default function page() {
  redirect("/projects");
  return (
    <PageTemplate hideNavbar>
      <LifeSimulatorProvider>
        <Game />
      </LifeSimulatorProvider>
      <WebProjectNavigation />
    </PageTemplate>
  );
}
