import PageTemplate from "@/components/PageTemplate";
import WebProjectNavigation from "@/components/WebProjectNavigation";
import Link from "next/link";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

function Logo(): React.ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="128"
      width="1200"
      viewBox="-40.446 -22.19 350.532 133.14"
    >
      <path
        d="M115.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        className="fill-[#EA4335] dark:fill-white"
      />
      <path
        d="M163.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        className="fill-[#FBBC05] dark:fill-white"
      />
      <path
        d="M209.39 25.87v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
        className="fill-[#4285F4] dark:fill-white"
      />
      <path
        d="M224.64 2.53v65h-9.5v-65z"
        className="fill-[#34A853] dark:fill-white"
      />
      <path
        d="M261.66 54.01l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
        className="fill-[#EA4335] dark:fill-white"
      />
      <path
        d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z"
        className="fill-[#4285F4] dark:fill-white"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <PageTemplate hideNavbar>
      <main className="flex h-screen flex-col bg-white text-xs text-zinc-800 dark:bg-zinc-800 dark:text-white">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-row items-center gap-4 pl-4">
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Store
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4 pr-4">
            <Link className="hover:underline" href="#">
              Gmail
            </Link>
            <Link className="hover:underline" href="#">
              Images
            </Link>
            <Link href="#">
              <BsFillGrid3X3GapFill />
            </Link>
            <div className="aspect-square h-8 w-8 rounded-full bg-[url('https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=sph')] bg-cover bg-center bg-no-repeat" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-6 p-4">
            <Logo />
            <input
              type="search"
              className="w-full rounded-full bg-transparent px-4 py-2 ring-2 ring-zinc-300 hover:bg-zinc-300 dark:ring-zinc-700 dark:hover:bg-zinc-700 md:w-[600px]"
            />
            <div className="flex flex-row gap-6">
              <button className="rounded-md bg-zinc-300 px-4 py-2 outline-1 outline-zinc-500 hover:outline dark:bg-zinc-700">
                Google Search
              </button>
              <button className="rounded-md bg-zinc-300 px-4 py-2 outline-1 outline-zinc-500 hover:outline dark:bg-zinc-700">
                I&apos;m Feeling Lucky
              </button>
            </div>
          </div>
        </div>
        <div className="bg-zinc-200 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b-2 border-zinc-400 p-4 dark:border-zinc-800">
            <p>United Kingdom</p>
          </div>
          <div className="flex flex-wrap items-center justify-evenly gap-4 p-4 md:justify-between">
            <Link
              className="flex flex-wrap justify-center p-2 hover:underline max-md:w-full md:order-2 md:justify-between"
              href="#"
            >
              Our third decade of climate action: join us
            </Link>
            <div className="order-1 flex flex-wrap justify-between max-sm:min-w-[30%] md:justify-start">
              <Link className="p-2 hover:underline" href="#">
                Advertising
              </Link>
              <Link className="p-2 hover:underline" href="#">
                Business
              </Link>
              <Link className="p-2 hover:underline" href="#">
                How Search Works
              </Link>
            </div>
            <div className="order-3 flex flex-wrap justify-between max-sm:min-w-[30%] md:justify-end">
              <Link className="p-2 hover:underline" href="#">
                Privacy
              </Link>
              <Link className="p-2 hover:underline" href="#">
                Terms
              </Link>
              <Link className="p-2 hover:underline" href="#">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </main>
      <WebProjectNavigation />
    </PageTemplate>
  );
}
