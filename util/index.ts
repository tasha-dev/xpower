// Codes by mahdi tasha
// Importing part
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

// Creating and exporting a function to concat tailwindcss class names
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Creating and exporting a function to format time of videos
export function formatVideoTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Creating and exporting a function to get percentage of video as default
export function videoTimePercentage(totalTime:number, currentTime:number):string {
    let percentage = (currentTime / totalTime) * 100; // Calculate the percentage
    let roundedPercentage = Math.round(percentage); // Round to nearest whole number
    return roundedPercentage.toString() + "%"; // Return as a string with percentage symbol
}