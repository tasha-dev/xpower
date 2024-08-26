// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import {HeaderLinkType} from "@/type";
import {usePathname} from "next/navigation";

// Creating and exporting head link item as default
export default function HeaderLink({children, link}:HeaderLinkType):ReactNode {
    // Defining location of user
    const location = usePathname();

    // Returning JSX
    return (
        <li className={'shrink-0'}>
            <Link
                href={link}
                data-active={(location === link)}
                className={'text-[20px] font-normal data-[active="false"]:text-white data-[active="true"]:text-theme transition-all duration-500'}
            >
                {children}
            </Link>
        </li>
    );
}