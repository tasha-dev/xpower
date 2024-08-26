// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {ButtonType} from "@/type";
import Link from "next/link";
import {cn} from "@/util/cn";

// Creating and exporting button component as default
export default function Button({
                                   children,
                                   link,
                                   variant = 'primary',
                                   size = 'default',
                                   className,
                                   onClick
                               }: ButtonType): ReactNode {
    // Conditional rendering
    if (link) {
        return (
            <Link
                href={link}
                className={cn(
                    (variant === 'primary') ? 'btn-primary' : 'btn-transparent',
                    (size === 'icon') ? 'btn-icon' : '',
                    className
                )}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button onClick={onClick} className={cn(
                (variant === 'primary') ? 'btn-primary' : 'btn-transparent',
                (size === 'icon') ? 'btn-icon' : '',
                className
            )}>
                {children}
            </button>
        );
    }
}