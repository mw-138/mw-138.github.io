import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageTemplate from "@/components/PageTemplate";
import WebProjectNavigation from "@/components/WebProjectNavigation";
import Header from "./components/Header";
import SubscriptionButtonList from "./components/SubscriptionButtonList";
import { SubscriptionTrackerProvider } from "./context/SubscriptionTrackerContext";
// import DataTableDemo from "./components/DataTableDemo";

export default function Page() {
  return (
    <PageTemplate hideNavbar>
      <SubscriptionTrackerProvider>
        <MaxWidthWrapper>
          <main className="flex h-screen select-none flex-col font-['Fira_Sans']">
            <Header />
            <SubscriptionButtonList />
            {/* <DataTableDemo /> */}
          </main>
        </MaxWidthWrapper>
      </SubscriptionTrackerProvider>
      <WebProjectNavigation />
    </PageTemplate>
  );
}
