import logo from "@/public/logo.svg"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            {/* dekstop view */}
            <div className="hidden lg:block">
                <div className="mx-32">
                    <div className="flex items-center justify-between py-6">
                        <Image src={logo} alt="" width={140} />
                        <div className="flex font-serif space-x-10 text-white mt-2">
                            <Link href={"/"}>Home</Link>
                            <Link href={"#features"}>Features</Link>
                            <Link href={"#products"}>Products</Link>
                            <Link href={"#testimonies"}>Testimonies</Link>
                        </div>
                        <Link href={"https://wa.me/+6282184267456"} className="font-serif px-4 py-2 bg-[#BB8E5A] text-white rounded-lg">Contact Us</Link>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className="lg:hidden">
                <div className="mx-6">
                    <div className="flex items-center justify-between py-4">
                        <Image src={logo} alt="" width={110} />
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? "true" : "false"}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? "absolute" : "hidden"} top-16 left-0 w-full bg-[#18343B] z-10`} id="mobile-menu">
                <div className="space-y-1 px-6 py-4">
                    <Link
                        href="/"
                        className="text-white hover:bg-[#BB8E5A] hover:text-white block px-3 py-2 rounded-md text-sm font-serif"
                    >
                        Home
                    </Link>
                    <Link
                        href="#features"
                        className="text-white hover:bg-[#BB8E5A] hover:text-white block px-3 py-2 rounded-md text-sm font-serif"
                    >
                        Features
                    </Link>
                    <Link
                        href="#products"
                        className="text-white hover:bg-[#BB8E5A] hover:text-white block px-3 py-2 rounded-md text-sm font-serif"
                    >
                        Products
                    </Link>
                    <Link
                        href="#testimonies"
                        className="text-white hover:bg-[#BB8E5A] hover:text-white block px-3 py-2 rounded-md text-sm font-serif"
                    >
                        Testimonies
                    </Link>
                    <Link
                        href="#testimonies"
                        className="text-white hover:bg-[#BB8E5A] hover:text-white block px-3 py-2 rounded-md text-sm font-serif"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    )
}