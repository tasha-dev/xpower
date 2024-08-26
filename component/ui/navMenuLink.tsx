// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {NavMenuLinkType} from "@/type";
import Link from "next/link";
import {usePathname} from "next/navigation";

// Creating and exporting nav menu link components as default
export default function NavMenuLink({link, children}:NavMenuLinkType):ReactNode {
    // Defining location of user
    const location = usePathname();

    // Returning JSX
    return (
        <li>
            <Link
                data-active={(location === link)}
                className={'px-5 py-2 transition-all duration-500 truncate font-normal text-[16px] block data-[active="false"]:bg-transparent data-[active="false"]:text-white data-[active="true"]:bg-white data-[active="true"]:text-theme'}
                href={link}
            >
                {children}
            </Link>
        </li>
    );
}