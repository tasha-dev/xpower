// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Creating and exporting logo component as default
export default function Logo():ReactNode {
    // Returning JSX
    return (
        <Link
            href={'/'}
            className={'text-white font-extrabold text-[30px]'}
        >
            X.POWER
        </Link>
    );
}