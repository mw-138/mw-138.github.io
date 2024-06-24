import WebsiteNavigation from "@/components/WebsiteNavigation";
import Board from "./components/Board";
import { TicTacToeProvider } from "./context/TicTacToeContext";

export default function Page() {
  return (
    <>
      <TicTacToeProvider>
        <main className="flex h-screen flex-col items-center justify-center gap-4">
          <Board />
        </main>
      </TicTacToeProvider>
      <WebsiteNavigation />
    </>
  );
}
