// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {SliderPaginationType} from "@/type";
import {cn} from "@/util";

// Creating and exporting slider pagination component as default
export default function SliderPagination({count, activeIndex, className}:SliderPaginationType):ReactNode {
    // Returning JSX
    return (
        <div className={cn('flex items-center justify-center gap-[6px]', className)}>
            {
                [... new Array(count)].map((item, index) => (
                    <div
                        data-active={(index === activeIndex)}
                        className={'w-[15px] h-[15px] data-[active="false"]:bg-white/10 data-[active="true"]:bg-theme rounded-full'}
                    />
                ))
            }
        </div>
    );
}