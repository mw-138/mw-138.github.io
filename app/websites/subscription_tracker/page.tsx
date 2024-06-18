import Footer from "@/app/components/Footer";
import WebsiteNavigation from "@/app/components/WebsiteNavigation";
import Header from "./components/Header";
import ImportForm from "./components/ImportForm";
import SubscriptionForm from "./components/SubscriptionForm";
import { SubscriptionTrackerProvider } from "./context/SubscriptionTrackerContext";
import SubscriptionButtonList from "./components/SubscriptionButtonList";

export default function Page() {
  return (
    <>
      <SubscriptionTrackerProvider>
        <main className="flex select-none flex-col bg-slate-900 font-['Fira_Sans'] lg:h-screen">
          <Header />
          <div className="flex flex-1 flex-col-reverse overflow-hidden lg:flex-row">
            <SubscriptionButtonList />
            <SubscriptionForm />
          </div>
        </main>
        <ImportForm />
      </SubscriptionTrackerProvider>
      <WebsiteNavigation />
      <Footer />
    </>
  );
}
