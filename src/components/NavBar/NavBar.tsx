"use client";

import Image from "next/image";
import DisneyLogo from "@/assets/DisneyLogo.png";
import { MagnifyingGlassIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between bg-white px-4 sm:px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
                <Image src={DisneyLogo} alt="Logo" width={60} height={60} />
                <span className="font-medium text-lg text-black font-sans hidden sm:inline">
                    Characters
                </span>
            </div>


            {/* Search */}
            <div className="flex-1 mx-4 sm:mx-6 max-w-xs sm:max-w-sm">
                <div className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-200 bg-gray-100 focus-within:ring-2 focus-within:ring-gray-500">
                    <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search characters..."
                        className="bg-gray-100 text-gray-900 pl-2 text-sm sm:text-base w-full focus:outline-none"
                    />
                </div>
            </div>


            {/* Menu */}
            <div className="flex items-center gap-2 sm:gap-4 cursor-pointer">
                <h6 className="text-black text-sm hidden sm:inline">Menu</h6>
                <Squares2X2Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
        </nav>
    );
}
