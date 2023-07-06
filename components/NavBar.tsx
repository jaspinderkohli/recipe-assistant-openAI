// components/NavBar.js
import Link from 'next/link';
import { HomeIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-gray-800">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <span className="text-white flex items-center space-x-2">
            <HomeIcon className="h-6 w-6" />
            <span className="font-semibold text-xl">Recipe Assistant</span>
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/search">
          <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md flex items-center space-x-2">
            <SearchIcon className="h-5 w-5" />
            <span>Search</span>
          </span>
        </Link>
        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md flex items-center space-x-2">
          <MenuIcon className="h-5 w-5" />
          <span>Menu</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
