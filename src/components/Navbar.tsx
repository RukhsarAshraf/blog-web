'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FcMenu } from "react-icons/fc";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="bg-gradient-to-r from-purple-900 to-pink-900 text-white shadow-lg">
            <div className="container flex justify-between flex-wrap p-3 flex-col md:flex-row items-center">
                <div className="flex-1 text-white text-3xl font-bold font-serif">
                    Novel's Blog
                </div>

                <div className="m-3">
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button
                            className="p-2 border border-white rounded hover:bg-purple-700 transition duration-300"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FcMenu className="text-white" />
                        </button>
                        {menuOpen && (
                            <ul className="mt-2 bg-purple-800 shadow-lg rounded w-full">
                                <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                                    <Link href="/" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                                    <Link href="/about" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                                        About
                                    </Link>
                                </li>
                                <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                                    <Link href="/blog" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                                        Blog
                                    </Link>
                                </li>
                                <li className="text-[4vw] hover:bg-purple-700 transition duration-300">
                                    <Link href="/contact" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex justify-between items-center gap-4">
                        <ul className="flex gap-8 mr-14">
                            <li className="text-[1.5vw] hover:bg-purple-700 px-3 py-1 rounded transition duration-300">
                                <Link href="/" className="hover:text-pink-200">
                                    Home
                                </Link>
                            </li>
                            <li className="text-[1.5vw] hover:bg-purple-700 px-3 py-1 rounded transition duration-300">
                                <Link href="/about" className="hover:text-pink-200">
                                    About
                                </Link>
                            </li>
                            <li className="text-[1.5vw] hover:bg-purple-700 px-3 py-1 rounded transition duration-300">
                                <Link href="/blog" className="hover:text-pink-200">
                                    Blog
                                </Link>
                            </li>
                            <li className="text-[1.5vw] hover:bg-purple-700 px-3 py-1 rounded transition duration-300">
                                <Link href="/contact" className="hover:text-pink-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}