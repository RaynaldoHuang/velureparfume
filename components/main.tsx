"use client"

import Image from "next/image"
import Link from "next/link"
import Navigation from "./navigation"
import EmblaCarousel from "@/components/EmblaCarousel"

import img1 from "@/public/img.svg"
import img2 from "@/public/img2.svg"
import profile from "@/public/profile.svg"
import petik from "@/public/petik.svg"
import mobile from "@/public/mobile1.svg"

import { EmblaOptionsType } from "embla-carousel"

import "@/app/css/embla.css"
import Timer from "./timer"

export default function Main() {
    const OPTIONS: EmblaOptionsType = { align: 'start' }

    return (
        <>
            {/* dekstop view */}
            <div className="hidden lg:block">
                <div className="bg-[url('/subtract.svg')] bg-no-repeat bg-cover bg-[#FAFAFA]">
                    <Navigation />
                    <div className="flex mx-32 mt-10 items-center">
                        <div className="w-1/2">
                            <p className="font-serif text-white w-2/3 mb-6 text-2xl tracking-widest">LUXURIOUS AND ELEGANT</p>
                            <h1 className="text-8xl font-sans text-white mb-12">Indulged in Luxurious and Elegant Scent</h1>
                            <p className="font-serif text-white w-2/3 mb-10">Elegant and alluring, our perfume captivates with its blend of unique notes, leaving a lasting impression.</p>
                            <div className="flex space-x-6">
                                <Link href={"https://linktr.ee/velureperfume"} className="bg-[#BB8E5A] px-6 py-3 rounded-lg text-white font-serif">Order Now</Link>
                                <Link href={"#products"} className="border border-1 px-6 py-3 rounded-lg text-white font-serif">Our Product</Link>
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <Image src={img1} alt="" width={680} />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className="lg:hidden">
                <div className="bg-[url('/subtractmobile.svg')] bg-no-repeat bg-cover bg-[#FAFAFA]">
                    <Navigation />
                    <div className="flex-col justify-items-center mx-6">
                        <p className="font-serif text-white mb-4 mt-6 text-sm tracking-widest">LUXURIOUS AND ELEGANT</p>
                        <h1 className="text-3xl font-sans text-white mb-6 text-center">Indulged in Luxurious and Elegant Scent</h1>
                        <p className="font-serif text-white text-center text-xs mb-8">Elegant and alluring, our perfume captivates with its blend of unique notes, leaving a lasting impression.</p>
                        <div className="flex space-x-6 mb-6">
                            <Link href={"https://linktr.ee/velureperfume"} className="bg-[#BB8E5A] px-6 py-3 rounded-lg text-white font-serif text-sm">Order Now</Link>
                            <Link href={"#products"} className="border border-1 px-6 py-3 rounded-lg text-white font-serif text-sm">Our Product</Link>
                        </div>
                        <Image src={mobile} alt="" width={310} className="flex justify-center" />
                    </div>
                </div>
            </div>

            <section id="features">
                <div className="lg:mx-32 lg:pt-20 mx-6 pt-16">
                    <div className="flex-col justify-items-center">
                        <h1 className="font-serif text-[#BB8E5A] lg:mb-6 mb-4 lg:text-xl text-sm tracking-widest">LUXURIOUS AND ELEGANT</h1>
                        <h1 className="lg:text-5xl text-3xl text-center font-sans text-[#1F2D3E]">
                            What Makes Our Product Different?
                        </h1>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-20 lg:mt-20 mt-10 lg:mb-20 mb-16 items-stretch space-y-8 lg:space-y-0">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex h-full">
                                <div className="text-[#BB8E5A] lg:h-4 lg:w-4 h-2 w-2 lg:px-8 lg:py-8 px-7 py-7 rounded-full border border-2 border-[#BB8E5A] flex justify-center items-center text-2xl">
                                    1
                                </div>
                                <div className="lg:ms-8 ms-6">
                                    <h1 className="font-sans lg:text-3xl text-2xl text-[#1F2D3E] mb-2">Saffron</h1>
                                    <p className="text-[#525252] text-sm lg:text-base font-serif">Rich in exotic spice and warm floral undertones, evoking an air of luxury and sophistication.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex h-full">
                                <div className="text-[#BB8E5A] lg:h-4 lg:w-4 h-2 w-2 lg:px-8 lg:py-8 px-7 py-7 rounded-full border border-2 border-[#BB8E5A] flex justify-center items-center text-2xl">
                                    2
                                </div>
                                <div className="lg:ms-8 ms-6">
                                    <h1 className="font-sans lg:text-3xl text-2xl text-[#1F2D3E] mb-2">Cardamom</h1>
                                    <p className="text-[#525252] text-sm lg:text-base font-serif">Blending aromatic warmth with a hint of citrus freshness, creating a unique and captivating fragrance experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex h-full">
                                <div className="text-[#BB8E5A] lg:h-4 lg:w-4 h-2 w-2 lg:px-8 lg:py-8 px-7 py-7 rounded-full border border-2 border-[#BB8E5A] flex justify-center items-center text-2xl">
                                    3
                                </div>
                                <div className="lg:ms-8 ms-6">
                                    <h1 className="font-sans lg:text-3xl text-2xl text-[#1F2D3E] mb-2">Ambergis</h1>
                                    <p className="text-[#525252] text-sm lg:text-base font-serif">Characterized by its warm, musky scent reminiscent of the sea, adding depth and allure to any fragrance collection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* dekstop view */}
            <div className="hidden lg:block">
                <div className="bg-[url('/subtract1.svg')] bg-no-repeat bg-cover">
                    <div className="flex items-center">
                        <Image src={img2} alt="" />
                        <div className="ms-40 w-1/2">
                            <p className="font-serif text-white w-2/3 mb-6 text-2xl tracking-widest">LUXURIOUS AND ELEGANT</p>
                            <h1 className="text-6xl font-sans text-white mb-8">Elevate Your Essence with Timeless Scents</h1>
                            <p className="font-serif text-white w-2/3">Discover premium fragrances crafted to define your unique personality and leave a lasting impression.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className="lg:hidden">
                <div className="bg-[url('/bg1.svg')] bg-no-repeat bg-cover">
                    <div className="mx-6 pb-12 pt-12">
                        <p className="font-serif text-white mb-4 text-sm text-center tracking-widest">LUXURIOUS AND ELEGANT</p>
                        <h1 className="text-3xl font-sans text-white mb-4 text-center">Elevate Your Essence with Timeless Scents</h1>
                        <p className="font-serif text-white text-xs text-center">Discover premium fragrances crafted to define your unique personality and leave a lasting impression.</p>
                    </div>
                </div>
            </div>

            <div id="products" className="lg:mx-32 mx-6 lg:pt-20 mt-16">
                <div className="flex-col justify-items-center">
                    <h1 className="font-serif text-[#BB8E5A] lg:mb-6 mb-4 lg:text-xl text-sm tracking-widest">LUXURIOUS AND ELEGANT</h1>
                    <h1 className="lg:text-5xl text-3xl font-sans text-[#1F2D3E]">
                        Best Selling Product
                    </h1>
                </div>

                <section>
                    <EmblaCarousel options={OPTIONS} />
                </section>
            </div>

            <section id="testimonies">
                <div className="bg-[#FAFAFA]">
                    <div className="lg:mx-32 mx-6 lg:py-20 py-10">
                        <div className="lg:flex lg:space-x-14 items-center">
                            <div className="lg:w-1/2 text-center lg:text-left">
                                <h1 className="font-serif text-[#BB8E5A] lg:mb-6 mb-4 lg:text-xl text-sm tracking-widest">LUXURIOUS AND ELEGANT</h1>
                                <h1 className="lg:text-7xl text-3xl font-sans text-[#1F2D3E] lg:mb-8 mb-6">What They Love In Our Products</h1>
                                <p className="font-serif text-[#525252] lg:w-4/5 lg:text-base text-sm mb-8 lg:mb-0">From premium quality and elegant designs to meticulous attention to detail in every product, we are committed to delivering the very best to meet your needs and exceed your expectations.</p>
                            </div>

                            <div className="flex-col lg:w-1/2">
                                <div className="lg:ps-20">
                                    <div className="bg-white lg:px-8 px-6 py-5 rounded-lg mb-6">
                                        <div className="lg:flex lg:space-x-6 lg:items-center">
                                            <div className="relative lg:mb-0 mb-6 lg:mb-0 flex justify-center">
                                                <Image src={profile} alt="" className="rounded-full lg:w-[250px] w-[100px]" />
                                                <Image
                                                    src={petik}
                                                    alt=""
                                                    className="rounded-full bg-[#BB8E5A] absolute bottom-0 right-20 lg:right-0 py-4 px-4"
                                                    width={50}
                                                />
                                            </div>
                                            <div className="lg:text-left text-center">
                                                <h1 className="lg:text-3xl text-xl font-sans mb-2">
                                                    Murtamad Pratama
                                                </h1>
                                                <p className="font-serif text-sm lg:text-base text-[#525252] px-2 lg:px-0">
                                                    Velure has completely changed how I view perfumes! Its luxurious and long-lasting scent keeps me feeling confident all day.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:pe-20">
                                    <div className="bg-[#BB8E5A] lg:px-8 px-6 py-5 rounded-lg mb-6">
                                        <div className="lg:flex lg:space-x-6 lg:items-center">
                                            <div className="relative lg:mb-0 mb-6 flex justify-center">
                                                <Image src={profile} alt="" className="rounded-full lg:w-[250px] w-[100px]" />
                                                <Image
                                                    src={petik}
                                                    alt=""
                                                    className="rounded-full bg-[#214A55] absolute bottom-0 right-20 lg:right-0 py-4 px-4"
                                                    width={50}
                                                />
                                            </div>
                                            <div className="lg:text-left text-center">
                                                <h1 className="lg:text-3xl text-xl font-sans mb-2 text-white">
                                                    Kuandi Chandra
                                                </h1>
                                                <p className="font-serif text-sm lg:text-base text-white">
                                                    I absolutely love Velure's unique fragrance. It's not just a scent but an elegant and classy statement. So many friends ask me what perfume I'm wearing!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:ps-20">
                                    <div className="bg-white lg:px-8 px-6 py-5 rounded-lg">
                                        <div className="lg:flex lg:space-x-6 lg:items-center">
                                            <div className="relative lg:mb-0 mb-6 flex justify-center">
                                                <Image src={profile} alt="" className="rounded-full lg:w-[250px] w-[100px]" />
                                                <Image
                                                    src={petik}
                                                    alt=""
                                                    className="rounded-full bg-[#BB8E5A] absolute bottom-0 right-20 lg:right-0 py-4 px-4"
                                                    width={50}
                                                />
                                            </div>
                                            <div className="lg:text-left text-center">
                                                <h1 className="lg:text-3xl text-xl font-sans mb-2">
                                                    Edrick Salim
                                                </h1>
                                                <p className="font-serif text-sm lg:text-base text-[#525252]">
                                                    Velure is the perfect choice for those seeking a captivating and exclusive aroma. I'm incredibly satisfied with the quality and will definitely purchase it again.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Timer />
        </>
    )
}
