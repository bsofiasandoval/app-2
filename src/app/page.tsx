import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
       <div className="items-left justify-top gap-4">
          <nav className="bg-gray-800 p-4">
            <ul className="flex justify-center space-x-4">
                <li>
                <Image src="/logo.png" alt="Coffee Shop Logo" width={82} height={180} />
                </li>
                <li>
                <Link href="/">Home
                </Link>
                </li>
                <li>
                <Link href="/page1">Learn More</Link>
                </li>
                <li>
                <Link href="/page2">About Us</Link>
                </li>
            </ul>
          </nav>
        </div>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl">Home</h1>
        <p className="text-2xl">Welcome to the home page</p>
        <Link href="/page1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </Link>
      </div>
    </div>
  );
}
