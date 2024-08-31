// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {ServiceItemType} from "@/type";
import Link from "next/link";
import ColoredIcon from "@/component/ui/coloredIcon";
import Icon from "@/component/ui/icon";

// Creating and exporting service item component as default
export default function ServiceItem({icon, link, title, children}:ServiceItemType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className={'block w-full bg-white/10 rounded-[15px] px-[30px] py-[50px] border border-transparent transition-all duration-500 hover:bg-theme hover:border-white'}>
            <div className={'flex items-center justify-center mb-[30px]'}>
                <ColoredIcon name={icon} size={60} />
            </div>
            <span className={'mb-[40px] truncate text-[25px] font-bold text-white text-center block'}>{title}</span>
            <p className={'mb-[40px] text-center leading-[38px] line-clamp-3 text-[16px] font-normal text-white line'}>{children}</p>
            <div className={'flex items-center justify-center gap-[8px]'}>
                <span className={'text-[16px] font-normal truncate text-white'}>ادامه مطلب</span>
                <Icon name={'arrow-left'} height={18} width={15} fillColor={'white'} className={'shrink-0'} />
            </div>
        </Link>
    );
}