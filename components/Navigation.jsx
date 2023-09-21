import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';

export function Navigation(){
    return (
      <nav className="w-full flex flex-wrap items-center justify-between fixed top-0 z-20 border-zinc-50 bg-zinc-50 backdrop-filter backdrop-blur-md bg-opacity-70">
        <div className="container mx-auto flex items-center justify-between">
            <div className="w-full flex justify-between">
                <Link
                className="hover:opacity-75"
                href="/"
                >
                <Image src={logo} w="40" h="50" alt="logo image"/>
                </Link>
                <Link href="/blog" className="cursor-pointer border-2 border-purple-600 rounded text-primary hover:text-primary/75">
                Blog
                </Link>
             </div>
        </div>
      </nav>
    );
}



