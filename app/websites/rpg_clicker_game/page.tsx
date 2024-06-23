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
        <main className="flex h-screen flex-col bg-red-500">
          <Header />
          <div className="flex h-full flex-row bg-purple-500">
            <Sidebar />
            {/* <InventoryList /> */}
          </div>
        </main>
      </RpgClickerGameProvider>
      <WebsiteNavigation />
    </>
  );
}
