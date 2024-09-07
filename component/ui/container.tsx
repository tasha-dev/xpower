// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {ContainerType} from "@/type";
import {cn} from "@/util";

// Creating and exporting container component as default
export default function Container({children, size = 'lg', className}:ContainerType):ReactNode {
    // Returning JSX
    return (
        <div className={cn(
            (size === 'sm') ? 'max-w-[1000px]' : 'max-w-[1260px]',
            'mx-auto p-[20px]',
            className
        )}>
            {children}
        </div>
    );
}