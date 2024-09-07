// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import {BlogType} from "@/type";
import Image from 'next/image';
import Icon from "@/component/ui/icon";

// Creating and exporting blog component as default
export default function Blog({link, date, img, title, description}:BlogType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className={'group'}>
            <div className={'h-[247px] w-full rounded-t-[13px] relative overflow-hidden p-[12px] flex flex-col items-start justify-end'}>
                <Image className={'absolute top-0 left-0 z-0 w-full object-cover h-full'} alt={title} src={img} height={247} width={370} />
                <div className={'p-[10px] rounded-[5px] bg-black/20 backdrop-blur-2xl max-w-full'}>
                    <span className={'block truncate text-[15px] text-white font-normal'}>15 ساعت پیش</span>
                </div>
            </div>
            <div className={'px-[25px] pt-[20px] pb-[50px] rounded-b-[13px] bg-white/10 transition-all duration-500 group-hover:bg-theme backdrop-blur-2xl relative'}>
                <h3 className={'text-[21px] block truncate text-white mb-[20px]'}>{title}</h3>
                <p className={'line-clamp-3 leading-[33px] font-normal text-[15px] text-white'}>{description}</p>
                <div className={'absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] bg-theme w-[40px] rounded-[10px] h-[40px] flex items-center justify-center transition-all duration-500 text-black group-hover:bg-white group-hover:text-theme group-hover:rotate-90'}>
                    <Icon width={20} height={20} name={'arrow-left'} fillColor={'currentColor'}/>
                </div>
            </div>
        </Link>
    );
}