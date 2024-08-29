import Image from "next/image";
import logo from "public/kenseibyte-logo.jpg";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Kenseibyte Logo" width={50} height={50} className="rounded-full" />
          <h1 className="text-3xl font-bold text-red-500">Kenseibyte</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-100 hover:text-red-400">Home</Link></li>
            <li><Link href="/stickfighting/levelone" className="text-gray-100 hover:text-red-400">Level One</Link></li>
          </ul>
        </nav>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}