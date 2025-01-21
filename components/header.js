'use client';
import Link from "next/link";
import { useState } from "react";
import { Outfit, Lato } from "next/font/google";
import Image from 'next/image'
import logo from "../app/logo.png";
//import hamburger_menu from "../assets/hamburger_menu.jpg";

  const outfitBold = Outfit({
    variable: "--font-outfit-serif",
    weight: '600',
    subsets: ["latin"],
  });

  const lato = Lato({
    variable: "--font-lato-serif",
    weight: '300',
    subsets: ["latin"],
  })
  
 
export default function Header() {
    const [openMenu, setOpenMenu] = useState(0);
    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };
  
    
    return (
        <>
            <div className={`min-h-screen flex flex-row justify-between gap-4 border-solid border-r border-white ${
            openMenu ? 'w-60' : 'w-20'} transition-all duration-300 ease-in-out`} >
            {openMenu ? (
                
                     <ul id="menu" className={`flex-row justify-start pl-10 gap-4 mt-6 uppercase ${lato.className} ${
                        openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
                      } transition-opacity duration-300 ease-in-out`}>
                        <li><Link href="/films">Films</Link></li>
                        <li><Link href="/events">Events</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                    </ul>
                ) : ''}
                <div className="min-h-screen py-4 w-20 flex flex-col justify-between items-center">
                    <button 
                        onClick={toggleMenu}
                        className={`flex flex-col items-center justify-around h-6 relative group ${openMenu ? 'w-8 ' : 'w-9 '}`}
                    >
                        <span  className={`block w-full h-[3px] bg-white transform transition-transform duration-300 ease-in-out ${
                            openMenu ? 'translate-y-[8px] rotate-45' : ''
                            }`}
                        ></span>
                        <span className={`block w-full h-[3px] bg-white transition-opacity duration-300 ease-in-out ${
                            openMenu ? 'opacity-0' : ''
                            }`}
                        ></span>
                        <span className={`block w-full h-[3px] bg-white transform transition-transform duration-300 ease-in-out ${
                            openMenu ? '-translate-y-[8px] -rotate-45' : ''
                            }`}
                        ></span>
                    </button>
                    <h1 className={`${outfitBold.className} text-2xl h-30 mb-32 -rotate-90 whitespace-nowrap`}><Link href="/">Casablanca Cinema</Link></h1>
                </div>
                
            
            </div>
        </>
    );
}