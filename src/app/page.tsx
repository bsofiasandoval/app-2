import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black gap-4">
        <h1 className="text-6xl">Cafe Shop</h1>
        <p className="text-2xl">Welcome to the online store</p>
        <Link href="/page1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}
