// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Hero from "@/section/home/hero";
import Services from "@/section/home/services";
import Products from "@/section/home/products";
import EspecialTrainingProgram from "@/section/home/especialTrainingProgram";
import TutorialVideo from "@/section/home/tutorialVideo";
import Blogs from "@/section/home/blogs";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <div className={'flex flex-col lg:gap-[75px] gap-[20px]'}>
            <Hero />
            <Services />
            <Products />
            <EspecialTrainingProgram />
            <TutorialVideo />
            <Blogs />
        </div>
    );
}