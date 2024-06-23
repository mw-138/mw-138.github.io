import WebsiteNavigation from "@/components/WebsiteNavigation";
import Header from "./components/Header";
import ImportForm from "./components/ImportForm";
import SubscriptionButtonList from "./components/SubscriptionButtonList";
import { SubscriptionTrackerProvider } from "./context/SubscriptionTrackerContext";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <>
      <SubscriptionTrackerProvider>
        <MaxWidthWrapper>
          <main className="flex h-screen select-none flex-col font-['Fira_Sans']">
            <Header />
            <SubscriptionButtonList />
          </main>
        </MaxWidthWrapper>
        <ImportForm />
      </SubscriptionTrackerProvider>
      <WebsiteNavigation />
    </>
  );
}
