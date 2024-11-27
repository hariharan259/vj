import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-[#131921] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Amazon</Link>
        <div className="relative flex-grow max-w-xl mx-4">
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full py-2 px-4 rounded-md text-black"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/account" className="flex items-center">
                <User className="mr-1" />
                Account
              </Link>
            </li>
            <li>
              <Link href="/cart" className="flex items-center">
                <ShoppingCart className="mr-1" />
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

