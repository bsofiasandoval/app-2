import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
    return (
       <header className="w-full flex justify-between items-center p-4 text-white">
            <Link href="/" className="flex items-center gap-2">
            <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={200}
                className="rounded-full"
            />
            </Link>
            <nav className="flex gap-4">
            <Link href="/" className="text-sm sm:text-base hover:underline">
                Home
            </Link>
            <Link href="/page1" className="text-sm sm:text-base hover:underline">
                Productos
            </Link>
            <Link href="/page2" className="text-sm sm:text-base hover:underline">
                Acerca de Nosotros
            </Link>
            </nav>
        </header>
    );
}