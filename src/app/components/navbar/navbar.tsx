'use client'

import { MoonIcon, SunIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return null;

  return (
    <nav className="bg-transparent border-b border-gray-50 dark:border-gray-800 shadow-md flex items-center w-full h-16">
        <div className="w-1/6 hidden md:block ">
          <Image className="ml-4" src="/next.svg" alt="Logo" width={80} height={80} /> 
        </div>
        <ul className="flex items-center justify-center gap-20 md:gap-4 w-full md:w-4/6 text-black dark:text-white">
            <Link href="/blogs" className="hover:text-blue-500 dark:hover:text-purple-500 hover:underline hover:font-bold hover:text-lg transition-all duration-300 ease-in-out">Blogs</Link>
            <Link href="/nosotros" className="hover:text-blue-500 dark:hover:text-purple-500 hover:underline hover:font-bold hover:text-lg transition-all duration-300 ease-in-out">Nosotros</Link>
            <Link href="/contacto" className="hover:text-blue-500 dark:hover:text-purple-500 hover:underline hover:font-bold hover:text-lg transition-all duration-300 ease-in-out">Contacto</Link>
        </ul>
        <div className="w-1/6 flex items-center justify-center">
            {/* TODO: Agregar el boton de toggle de tema */}
            <button className="text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out" onClick={toggleTheme}>
              {theme === "light" ? <SunIcon className="w-6 h-6 text-black" /> : <MoonIcon className="w-6 h-6 text-white" />}
            </button>
        </div>
    </nav>
  );
}
