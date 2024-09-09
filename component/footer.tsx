// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import {FooterDataItemType} from "@/type";
import Link from "next/link";

// Creating and exporting footer component as default
export default function Footer():ReactNode {
    // Defining data to render
    const data:FooterDataItemType[] = [
        {
            title: 'راهنمای مشتریان',
            data: [
                {link: '#', text: 'پاسخ به پرسش های متداول'},
                {link: '#', text: 'روش های ارسال کالا'},
                {link: '#', text: 'روش های پرداخت'},
                {link: '#', text: 'قوانین و مقررات'},
            ]
        },
        {
            title: 'راهنمای مشتریان',
            data: [
                {link: '#', text: 'پاسخ به پرسش های متداول'},
                {link: '#', text: 'روش های ارسال کالا'},
                {link: '#', text: 'روش های پرداخت'},
                {link: '#', text: 'قوانین و مقررات'},
            ]
        }
    ];

    // Returning JSX
    return (
        <footer className={'bg-theme py-[40px]'}>
            <Container className={'xl:p-0 p-[20px]'}>
                <div className={'flex xl:flex-row flex-col items-center justify-between xl:gap-5 gap-[50px] mb-[71px]'}>
                    <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-[40px] gap-[60px] xl:w-auto w-full">
                        {
                            data.map((item, index) => (
                                <div key={index}>
                                    <span className={'block text-[25px] text-white font-semibold mb-[17px] xl:text-start text-center'}>{item.title}</span>
                                    <div className={'flex flex-col gap-[18px]'}>
                                        {
                                            item.data.map((linkItem, linkIndex) => (
                                                <Link
                                                    key={linkIndex}
                                                    href={linkItem.link}
                                                    className={'text-[18px] xl:text-start text-center font-normal text-white'}
                                                >
                                                    {linkItem.text}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex items-center justify-between gap-[40px]">
                        <div className={'bg-amber-400 rounded-[7px] w-[146px] h-[197px]'} />
                        <div className={'bg-white rounded-[7px] w-[172px] h-[197px]'} />
                    </div>
                </div>
                <div className={'bg-black/10 rounded-[4px] p-[15px]'}>
                    <h6 className={'text-white text-center text-[21px] truncate font-semibold'}>کلیه حقوق متعلق به این وبسایت می باشد.</h6>
                </div>
            </Container>
        </footer>
    );
}