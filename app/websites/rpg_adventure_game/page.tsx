import PageTemplate from "@/components/PageTemplate";
import WebProjectNavigation from "@/components/WebProjectNavigation";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import Sidebar from "./components/Sidebar";
import { RpgClickerGameProvider } from "./context/RpgClickerGameContext";

export default function Page() {
  return (
    <PageTemplate hideNavbar>
      <RpgClickerGameProvider>
        <main className="flex h-screen flex-col">
          <Header />
          <div className="flex h-full flex-row">
            <Sidebar />
            <div className="flex-1 px-4">
              <InventoryList />
            </div>
          </div>
        </main>
      </RpgClickerGameProvider>
      <WebProjectNavigation />
    </PageTemplate>
  );
}
