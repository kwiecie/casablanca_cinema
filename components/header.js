'use client';
import Link from "next/link";
import { useState } from "react";
import { Zen_Dots } from "next/font/google";
import Image from 'next/image'
import logo from "../app/logo.png";
//import hamburger_menu from "../assets/hamburger_menu.jpg";
console.log(logo)

const zenDots = Zen_Dots({
    variable: "--font-zen-dots-serif",
    weight: '400',
    subsets: ["latin"],
  });

 
export default function Header() {
    const [openMenu, setOpenMenu] = useState(0);
    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };
  
    
    return (
        <>
            <div className={`min-h-screen flex flex-row justify-around gap-4 border-solid border-r border-white bg-black ${
            openMenu ? 'w-60' : 'w-20'} transition-all duration-300 ease-in-out`} >
            {openMenu ? (
                
                     <ul id="menu" className={`flex-row justify-start gap-4 ${
                        openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
                      } transition-opacity duration-300 ease-in-out`}>
                        <li><Link href="/films">Films</Link></li>
                        <li><Link href="/events">Events</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                    </ul>
                ) : ''}
                <div className="min-h-screen py-4 w-20 ml-0 flex flex-col justify-between">
                    <button onClick={toggleMenu}>Menu</button>
                    <h1 className={`${zenDots.className} text-xl -rotate-90 h-11`}><Link href="/">Casablanca Cinema</Link></h1>
                </div>
                
            
            </div>
        </>
    );
}