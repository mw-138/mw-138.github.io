import { Input } from "@/components/ui/input";
import { FormEvent, ReactNode, useState } from "react";

function InternetTab() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchUrl, setSearchUrl] = useState<string>("");

  function onFormSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setSearchUrl(searchInput);
    setSearchInput("");
  }

  function renderPageContent(): ReactNode {
    if (searchUrl === "www.test.com") {
      return <>Test.com</>;
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="h-10">
        <form className="absolute left-0 top-0 w-full" onSubmit={onFormSubmit}>
          <Input
            type="search"
            placeholder="Type a URL"
            className="rounded-none border-x-0"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        {/* {Array.from({ length: 100 }, (_, index) => (
          <h1>New Tab - {index}</h1>
        ))} */}
        {renderPageContent()}
      </div>
    </>
  );
}

export default InternetTab;
