import WebsiteNavigation from "@/components/WebsiteNavigation";
import Board from "./components/Board";
import { TicTacToeProvider } from "./context/TicTacToeContext";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <TicTacToeProvider>
        <main className="flex h-screen flex-col items-center justify-center gap-4 bg-zinc-100 font-['Roboto_Mono'] text-black">
          <Board />
        </main>
      </TicTacToeProvider>
      <WebsiteNavigation />
    </>
  );
}
