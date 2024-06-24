import React from "react";
import { RpgClickerGameProvider } from "./context/RpgClickerGameContext";
import WebsiteNavigation from "@/components/WebsiteNavigation";
import Footer from "@/components/Footer";
import InventoryList from "./components/InventoryList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Page() {
  return (
    <>
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
      <WebsiteNavigation />
    </>
  );
}
