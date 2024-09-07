// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import {MediaLinkType} from "@/type";
import Icon from "@/component/ui/icon";

// Creating and exporting media link component as default
export default function MediaLink({link, icon}:MediaLinkType):ReactNode {
    // Returning JSX
    return (
        <Link
            className={'w-[52px] h-[52px] flex items-center justify-center bg-white/10 rounded-[10px] text-white'}
            href={link}
        >
            <Icon
                name={icon}
                width={26}
                height={26}
                strokeColor={'none'}
                fillColor={'white'}
            />
        </Link>
    );
}