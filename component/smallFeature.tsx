// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {SmallFeatureType} from "@/type";
import {cn} from "@/util/cn";
import Image from "next/image";

// Creating and exporting small feature component as default
export default function SmallFeature({img, text, className, imgSize = 100}:SmallFeatureType):ReactNode {
    // Returning JSX
    return (
        <div className={cn('w-[143px] h-[157px] rounded-[15px] bg-white/20 flex items-center justify-end pb-[20px] flex-col backdrop-blur-2xl', className)}>
            <Image width={imgSize} height={imgSize} src={img} alt={text} className={'absolute bottom-full translate-y-[50%] block'} />
            <h6 className={'text-center line-clamp-2 text-white font-bold text-[19px]'}>{text}</h6>
        </div>
    );
}