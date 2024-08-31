// Codes by mahdi tasha
// Importing part
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

// Creating and exporting a function to concat tailwindcss class names
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Creating and exporting a function to split numbers with slashes
export function splitNumberWithSlashes(num:number):string {
    // Convert the number to a string
    let numStr = num.toString();

    // Use a regular expression to add slashes every three digits
    let result = numStr.replace(/(d)(?=(d{3})+(?!d))/g, '$1/');

    return result;
}