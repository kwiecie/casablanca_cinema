import Link from "next/link";
import { Zen_Dots } from "next/font/google";
import Image from 'next/image'
import logo from "../app/logo.png";
console.log(logo)

const zenDots = Zen_Dots({
    variable: "--font-zen-dots-serif",
    weight: '400',
    subsets: ["latin"],
  }) 

export default function Header() {
    return (
        <>
            <div className="w-full h-20 p-6 flex border-solid items-center justify-between bg-black flex-grow-0 gap-10">
                <h1 className={`${zenDots.className} text-3xl`}><Link href="/">Casablanca Cinema</Link></h1>
                <ul className="flex justify-end gap-4">
                    <li><Link href="/films">Films</Link></li>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                </ul>
            </div>
        </>
    );
}