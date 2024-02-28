import Link from "next/link";
import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Image src="./next.svg" width={100} height={100} alt="" />
    </main>
  );
}
