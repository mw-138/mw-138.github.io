import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WebsiteNavigation from "@/components/WebsiteNavigation";
import Header from "./components/Header";
import SubscriptionButtonList from "./components/SubscriptionButtonList";
import { SubscriptionTrackerProvider } from "./context/SubscriptionTrackerContext";

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
      </SubscriptionTrackerProvider>
      <WebsiteNavigation />
    </>
  );
}
