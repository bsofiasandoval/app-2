import Link from "next/link";
import Image from "next/image";
export default function Page1() {
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
          <div className="min-h-screen flex flex-col items-center justify-top gap-10 p-10">
            <h1 className="text-4xl">Productos</h1>
            <div className="flex flex-row  gap-4">
                <Image src="/coffee.jpeg" alt="Productos" width={200} height={500} />
                <div>
                    <p className="text-2xl">Cafe</p>
                    <p className="text-2xl">Precio: $5.00</p>
                    
                </div>
            </div>
            <div className="flex flex-row  gap-4">
                <div>
                    <p className="text-2xl">Cafe</p>
                    <p className="text-2xl">Precio: $5.00</p>
                </div>
                <Image src="/coffee.jpeg" alt="Productos" width={200} height={500} />
            </div>
            <div className="flex flex-row gap-4">
                <Image src="/coffee.jpeg" alt="Productos" width={200} height={500} />
                <div>
                    <p className="text-2xl">Cafe</p>
                    <p className="text-2xl">Precio: $5.00</p>
                </div>
            </div>
          </div>
        </div>
      );
}
    
    