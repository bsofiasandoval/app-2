import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Page1() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black gap-4">
          <div className="min-h-screen flex flex-col items-center justify-top gap-10 p-10">
            <h1 className="text-4xl">Products</h1>
            <div className="flex flex-col gap-8">
                <div className="flex flex-row items-center gap-4">
                    <Image src="/coffee.jpeg" alt="Productos" width={200} height={500} />
                    <div>
                        <p className="text-2xl">Coffee</p>
                        <p className="text-2xl">Price: $5.00</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div>
                        <p className="text-2xl">Coffee</p>
                        <p className="text-2xl">Price: $5.00</p>
                    </div>
                    <Image src="/coffee.jpeg" alt="Productos" width={200} height={500} />
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Image src="/coffee.jpeg" alt="Productos" width={200} height={500} />
                    <div>
                        <p className="text-2xl">Coffee</p>
                        <p className="text-2xl">Price: $5.00</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
}
    
    