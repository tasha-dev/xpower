// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {NavMenuType} from "@/type";
import NavMenuLink from "@/component/ui/navMenuLink";
import Button from "@/component/ui/button";
import {X} from "lucide-react";

// Creating and exporting nav manu component as default
export default function NavMenu({closeFn, isOpened, items}:NavMenuType):ReactNode {
    // Returning JSX
    return (
        <div data-opened={isOpened} className={'xl:hidden block fixed top-0 left-0 w-full h-full data-[opened="true"]:pointer-events-auto data-[opened="true"]:visible data-[opened="false"]:pointer-events-none data-[opened="false"]:invisible z-30'}>
            <div onClick={closeFn} data-opened={isOpened} className={'fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-2xl transition-all duration-500 data-[opened="false"]:opacity-0 data-[opened="true"]:opacity-100'} />
            <div data-opened={isOpened} className={'bg-gradient-to-bl overflow-auto from-theme to-lightTheme rounded-r-3xl shadow-2xl fixed top-0 w-[70%] h-full transition-all duration-500 data-[opened="true"]:left-0 data-[opened="false"]:left-[-70%]'}>
                <div className={'p-4'}>
                    <Button onClick={closeFn} variant={'transparent'} size={'icon'}>
                        <X className={'w-5 h-5 mx-auto block'} />
                    </Button>
                </div>
                <ul>
                    {
                        items.map((item, index) => (
                            <NavMenuLink
                                link={item.link}
                                key={index}
                            >
                                {item.title}
                            </NavMenuLink>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}