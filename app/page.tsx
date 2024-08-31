// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Hero from "@/section/home/hero";
import Services from "@/section/home/services";
import Products from "@/section/home/products";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <Hero />
            <Services />
            <Products />
        </>
    );
}