import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.svg"
import shopee from "@/public/shopee.svg"
import tokped from "@/public/tokped.svg"
import instagram from "@/public/instagram.svg"
import whatsapp from "@/public/whatsapp.svg"

export default function Footer() {
    return (
        <>
            <div className="bg-[#212121]">
                <div className="lg:pt-16 pt-12 pb-6">
                    <div className="lg:mx-32 mx-6">
                        <div id="contact" className="lg:grid lg:grid-cols-2 lg:gap-2">
                            <div>
                                <div className="hidden lg:block">
                                    <Image src={logo} width={160} alt="" />
                                </div>

                                <div className="lg:hidden">
                                    <Image src={logo} width={120} alt="" />
                                </div>

                                <p className="text-white font-serif lg:text-base text-xs lg:mt-8 mt-6 lg:mb-0 mb-8 lg:w-1/2 leading-relaxed">Enjoy high quality perfume with Luxurious and Elegance Scent. Elegant and alluring, our perfume captivates with its blend of unique notes, leaving a lasting impression.</p>
                            </div>

                            <div className="flex lg:grid lg:grid-cols-2 lg:gap-12 gap-8 lg:px-10">
                                <div>
                                    <h1 className="text-white font-medium lg:text-2xl text-xl font-sans">Quick Links</h1>
                                    <div className="flex flex-col mt-8 gap-y-4 font-serif">
                                        <Link href={"/"} className="text-white lg:text-base text-sm">Home</Link>
                                        <Link href={"#features"} className="text-white lg:text-base text-sm">Features</Link>
                                        <Link href={"#products"} className="text-white lg:text-base text-sm">Products</Link>
                                        <Link href={"#testimonies"} className="text-white lg:text-base text-sm">Testimonies</Link>
                                    </div>
                                </div>

                                <div>
                                    <h1 className="text-white font-medium lg:text-2xl text-xl font-sans">Find Us</h1>
                                    <div className="flex-col mt-7 gap-y-4 items-center font-serif">
                                        <div className="flex">
                                            <Image src={shopee} alt="" className="me-3 mb-4 w-6 lg:w-7" />
                                            <Link href={"https://shopee.co.id/velureperfume"} className="text-white lg:text-base text-sm pt-1">Shopee</Link>
                                        </div>

                                        <div className="flex">
                                            <Image src={tokped} alt="" className="me-3 mb-4 w-6 lg:w-7" />
                                            <Link href={"https://www.tokopedia.com/velure-perfume"} className="text-white lg:text-base text-sm pt-1">Tokopedia</Link>
                                        </div>

                                        <div className="flex">
                                            <Image src={instagram} alt="" className="me-3 mb-4 w-6 lg:w-7" />
                                            <Link href={"https://www.instagram.com/velureperfume"} className="text-white lg:text-base text-sm">@velureperfume</Link>
                                        </div>

                                        <div className="flex">
                                            <Image src={whatsapp} alt="" className="me-3 w-6 lg:w-7" />
                                            <Link href={"https://wa.me/+6282184267456"} className="text-white lg:text-base text-sm">+62 821 8426 7456</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-1 border-white mt-16" />

                    <div>
                        <p className="text-white flex justify-center lg:text-sm text-xs mt-6 font-serif">Ⓒ2024 All rights reserved. Velure</p>
                    </div>
                </div>
            </div>
        </>
    );
}