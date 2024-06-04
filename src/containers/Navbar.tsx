import Image from "next/image";
import Link from "next/link";

import styled from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styled.navbar}>
            <div className={styled.logo_container}>
                <Link href={"/"}>
                    <Image
                        className={styled.logo_image}
                        src="/vercel.svg"
                        width={100}
                        height={100}
                        alt="logo"
                    />
                </Link>
            </div>
            <ul className={styled.menu_container}>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/service"}>Services</Link>
                </li>
                <li>
                    <Link href={"/product"}>Products</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}