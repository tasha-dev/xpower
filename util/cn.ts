// Codes by mahdi tasha
// Importing part
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

// Creating and exporting a function to concat tailwindcss class names
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}