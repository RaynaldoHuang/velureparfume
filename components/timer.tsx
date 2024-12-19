"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import parfume1 from "@/public/parfume1.svg";
import parfume2 from "@/public/parfume2.svg";

interface TimeCount {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

const getNextTarget = (): string => {
    const now = new Date();
    // Atur target ke tengah malam hari berikutnya
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    return target.toISOString();
};

const getTimeLeft = (expiry: string): TimeCount => {
    let days = "0";
    let hours = "0";
    let minutes = "0";
    let seconds = "0";

    const difference = new Date(expiry).getTime() - new Date().getTime();

    if (difference <= 0) {
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString();
    hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString();
    minutes = Math.floor((difference / (1000 * 60)) % 60).toString();
    seconds = Math.floor((difference / 1000) % 60).toString();

    return {
        days,
        hours,
        minutes,
        seconds,
    };
};

const Timer = () => {
    const [launchDate, setLaunchDate] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState<TimeCount | null>(null);

    useEffect(() => {
        const nextTarget = getNextTarget();
        setLaunchDate(nextTarget);
        setTimeLeft(getTimeLeft(nextTarget));

        const timer = setInterval(() => {
            const updatedTime = getTimeLeft(nextTarget);

            if (
                updatedTime.days === "0" &&
                updatedTime.hours === "0" &&
                updatedTime.minutes === "0" &&
                updatedTime.seconds === "0"
            ) {
                const nextTarget = getNextTarget();
                setLaunchDate(nextTarget);
                setTimeLeft(getTimeLeft(nextTarget));
            } else {
                setTimeLeft(updatedTime);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-white font-serif text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="bg-[url('/subtract2.svg')] bg-no-repeat bg-cover">
            <div className="lg:flex lg:justify-between items-center">
                <div className="hidden lg:block">
                    <Image src={parfume1} alt="" className="pt-24"></Image>
                </div>
                <div className="mx-6 lg:mx-0">
                    <div className="flex-col justify-items-center pb-14 lg:pb-0">
                        <h1 className="font-serif text-white mb-6 lg:text-xl tracking-widest pt-12 lg:pt-12">LUXURIOUS AND ELEGANT</h1>
                        <h1 className="lg:text-6xl text-3xl font-sans text-white lg:mb-16 mb-8 text-center">
                            Promo Will End With<br />The Time We Specified
                        </h1>
                        <div className="flex lg:space-x-4 space-x-2 items-center lg:mb-14 mb-10">
                            <div className="flex-col justify-items-center">
                                <div className="bg-white lg:w-28 lg:h-28 w-16 h-16 rounded-xl flex-col justify-items-center content-center">
                                    <h1 className="text-[#17333A] font-serif font-bold lg:text-6xl text-3xl">{timeLeft.days}</h1>
                                    <p className="font-serif text-[#17333A] lg:text-lg text-xs font-bold lg:mt-1">Days</p>
                                </div>
                            </div>
                            <p className="text-bold text-white text-3xl">:</p>
                            <div className="flex-col justify-items-center">
                                <div className="bg-white lg:w-28 lg:h-28 w-16 h-16 rounded-xl flex-col justify-items-center content-center">
                                    <h1 className="text-[#17333A] font-serif font-bold lg:text-6xl text-3xl">{timeLeft.hours}</h1>
                                    <p className="font-serif text-[#17333A] lg:text-lg text-xs font-bold lg:mt-1">Hours</p>
                                </div>
                            </div>
                            <p className="text-bold text-white text-3xl">:</p>
                            <div className="flex-col justify-items-center">
                                <div className="bg-white lg:w-28 lg:h-28 w-16 h-16 rounded-xl flex-col justify-items-center content-center">
                                    <h1 className="text-[#17333A] font-serif font-bold lg:text-6xl text-3xl">{timeLeft.minutes}</h1>
                                    <p className="font-serif text-[#17333A] lg:text-lg text-xs font-bold lg:mt-1">Minutes</p>
                                </div>
                            </div>
                            <p className="text-bold text-white text-3xl">:</p>
                            <div className="flex-col justify-items-center">
                                <div className="bg-white lg:w-28 lg:h-28 w-16 h-16 rounded-xl flex-col justify-items-center content-center">
                                    <h1 className="text-[#17333A] font-serif font-bold lg:text-6xl text-3xl">{timeLeft.seconds}</h1>
                                    <p className="font-serif text-[#17333A] lg:text-lg text-xs font-bold lg:mt-1">Seconds</p>
                                </div>
                            </div>
                        </div>
                        <Link href={"https://linktr.ee/velureperfume"} className="bg-[#BB8E5A] lg:px-6 px-4 py-3 rounded-lg text-white font-serif lg:text-base text-sm">Order Now</Link>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Image src={parfume2} alt=""></Image>
                </div>
            </div>
        </div>
    );
};

export default Timer;
