import PageTemplate from "@/components/PageTemplate";
import WebProjectNavigation from "@/components/WebProjectNavigation";
import Board from "./components/Board";
import { TicTacToeProvider } from "./context/TicTacToeContext";

export default function Page() {
  return (
    <PageTemplate hideNavbar>
      <TicTacToeProvider>
        <main className="flex h-screen flex-col items-center justify-center gap-4">
          <Board />
        </main>
      </TicTacToeProvider>
      <WebProjectNavigation />
    </PageTemplate>
  );
}
