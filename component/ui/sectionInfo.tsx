// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {SectionIntoType} from "@/type";

// Creating and exporting section info component as default
export default function SectionInfo({children, title, className}:SectionIntoType):ReactNode {
    // Returning JSX
    return (
        <div className={className}>
            <h6 className={'lg:mt-[80px] mt-[20px] text-theme lg:text-center text-right lg:mb-[14px] mb-[10px] font-semibold truncate lg:text-[30px] text-[20px]'}>
                {title}
            </h6>
            <h4 className={'font-bold lg:mb-[64px] mb-[30px] lg:text-[34px] text-[24px] text-white lg:text-center text-right line-clamp-2'}>
                {children}
            </h4>
        </div>
    );
}