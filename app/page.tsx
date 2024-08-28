// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Hero from "@/section/home/hero";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <Hero />
            <div className={'bg-theme p-[20px] xl:rotate-[-5deg] my-[20px] origin-center relative xl:before:block before:hidden xl:after:block after:hidden before:content-[""] before:absolute before:right-0 before:top-0 before:h-full before:aspect-square before:bg-theme before:translate-x-[99%] after:content-[""] after:absolute after:left-0 after:top-0 after:h-full after:aspect-square after:bg-theme after:translate-x-[-100%]'}>
                <p className={'font-bold xl:text-[30px] text-[20px] text-center text-white'}>همه می خواهند بدنساز باشند اما کسی نمی خواهد وزنه های سنگین بلند کند!</p>
            </div>
        </>
    );
}