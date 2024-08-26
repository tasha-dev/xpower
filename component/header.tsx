// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Logo from "@/component/ui/logo";
import HeaderLink from "@/component/ui/headerLink";
import Button from "@/component/ui/button";
import {List, User} from 'lucide-react';
import {useNavMenu} from "@/app/store";
import NavMenu from "@/component/navMenu";
import {HeaderItemsType} from "@/type";
import Container from "@/component/ui/container";

// Creating and exporting header component as default
export default function Header(): ReactNode {
    // Defining stores
    const navMenuState = useNavMenu();

    // Defining items to render
    const itemsToRender:HeaderItemsType[] = [
        {
            title: 'صفحه اصلی',
            link: '/',
        }, {
            title: 'فروشگاه',
            link: '/store',
        }, {
            title: 'خدمات',
            link: '/service',
        }, {
            title: 'بلاگ',
            link: '/blog',
        }, {
            title: 'درباره ما',
            link: '/about',
        },
    ];

    // Returning JSX
    return (
        <>
            <NavMenu items={itemsToRender} isOpened={navMenuState.isOpened} closeFn={navMenuState.close} />
            <Container className={'w-full absolute top-0 left-[50%] -translate-x-[50%]'}>
                <header className={'flex items-center gap-5 justify-between lg:mt-[50px] mt-0'}>
                    <div className={'flex items-center justify-between gap-[27px]'}>
                        <Logo/>
                        <ul className={'lg:flex hidden items-center justify-between gap-[27px]'}>
                            {
                                itemsToRender.map((item, index) => (
                                    <HeaderLink key={index} link={item.link}>{item.title}</HeaderLink>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={'flex items-center justify-between gap-3'}>
                        <Button link={'/auth'} className={'lg:block hidden'}>ورود و ثبت نام</Button>
                        <Button size={'icon'} link={'/auth'} className={'lg:hidden block'}>
                            <User className={'w-7 mx-auto h-full'}/>
                        </Button>
                        <Button size={'icon'} className={'lg:hidden block'} onClick={() => navMenuState.toggle()}>
                            <List className={'w-7 mx-auto h-full'}/>
                        </Button>
                    </div>
                </header>
            </Container>
        </>
    );
}