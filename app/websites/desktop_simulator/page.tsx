import PageTemplate from "@/components/PageTemplate";
import WebProjectNavigation from "@/components/WebProjectNavigation";
import Container from "./components/Container";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import DesktopSimulatorProvider from "./context";

export default function page() {
  return (
    <PageTemplate hideNavbar>
      <DesktopSimulatorProvider>
        <Container>
          <Desktop />
          <Taskbar />
        </Container>
      </DesktopSimulatorProvider>
      <WebProjectNavigation />
    </PageTemplate>
  );
}
