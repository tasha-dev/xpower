// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import Image from 'next/image';
import {splitNumberWithSlashes} from "@/util/cn";
import {ProductType} from "@/type";
import Icon from "@/component/ui/icon";

// Creating and exporting product component as default
export default function Product({img, title, price, link}:ProductType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className={'px-[30px] py-[56px] relative group bg-white/10 block transition-all duration-500 hover:bg-theme rounded-[15px]'}>
            <div className={'w-full -mt-[112px] h-[270px] rounded-[15px] transition-all duration-500 backdrop-blur-2xl bg-white/10 border border-white/40 group-hover:bg-white mb-[36px]'}>
                <Image width={250} height={250} className={'w-full object-cover'} src={img} alt={`${title}'s Image`} />
            </div>
            <span className={'block text-[18px] font-semibold text-white truncate text-center mb-[36px]'}>{title}</span>
            <div className={'flex items-center justify-between gap-[10px]'}>
                <span className={'text-[18px] block truncate text-white font-semibold'}>
                    قیمت:
                </span>
                <span className={'text-[18px] block shrink-0 text-white font-semibold'}>
                    {splitNumberWithSlashes(price)}    تومان
                </span>
            </div>
            <div className={'absolute bottom-0 left-[50%] translate-y-[50%] -translate-x-[50%] transition-all duration-500 bg-theme group-hover:bg-white h-[40px] w-[40px] rounded-[7px] text-white group-hover:text-theme group-hover:w-[70%]'}>
                <span className={'whitespace-nowrap text-[18px] font-normal absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] opacity-0 group-hover:opacity-100 transition-all duration-500'}>افزودن به سبد خرید</span>
                <Icon width={20} height={20} name={'plus'} fillColor={'currentColor'} className={'-translate-y-[50%] absolute top-[50%] left-[50%] -translate-x-[35%] group-hover:opacity-0 transition-all duration-500'} />
            </div>
        </Link>
    );
}

