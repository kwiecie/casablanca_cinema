import Link from "next/link";
import Image from 'next/image'
import logo from "../app/logo.png";
console.log(logo)

export default function Header() {
    return (
        <>
            <div class="flex justify-start">
            <Image 
                src={logo} 
                alt="Ticket logo" 
                width="100"
                height="100"
            />
            <h1><Link href="/">Casablanca Cinema</Link></h1>
            <ul class="flex justify-start">
                <li><Link href="/whatson">What's On</Link></li>
                <li><Link href="/about">About Us</Link></li>
            </ul>
            </div>
        </>
    );
}