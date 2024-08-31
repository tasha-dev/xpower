// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Icon from "@/component/ui/icon";
import Image from "next/image";
import maleImage from "@/image/home/hero/male.png";
import bgImage from '@/image/home/hero/bg.png';
import Container from "@/component/ui/container";

// Creating and exporting her section of home page as default
export default function Hero():ReactNode {
    // Returning JSX
    return (
        <section className={'relative'}>
            <Image width={1000} height={1000} src={bgImage.src} alt={'Background Image'} className={'absolute top-0 pointer-events-none left-0 w-full h-full object-cover'}/>
            <Container className={'xl:pt-[90px] pt-[100px] flex items-center justify-between xl:flex-row flex-col-reverse'}>
                <div>
                    <h1 className={'text-transparent xl:text-right text-center bg-clip-text mb-[10px] bg-gradient-to-bl from-white to-themeViolet xl:text-[58px] text-[30px] font-extrabold'}>هر
                        آنچه برای رسیدن به اندام ایده آل نیاز دارید</h1>
                    <h3 className={'xl:text-[25px] xl:text-right text-center xl:mb-[60px] mb-[30px] text-[18px] font-normal bg-gradient-to-bl from-white to-themeViolet text-transparent bg-clip-text'}>تخصصی
                        ترین وبسایت بدنسازی درایران با مجوز رسمی</h3>
                    <div
                        className={'relative mb-[17px] xl:p-[50px] p-[30px] xl:rounded-[15px] rounded-[10px] border border-white/20 bg-white/10 backdrop-blur'}>
                        <div
                            className={'xl:w-[76px] xl:h-[76px] w-[60px] h-[60px] xl:absolute xl:top-0 xl:left-[20px] xl:rounded-full rounded-xl flex items-center justify-center bg-theme xl:-translate-y-[50%] xl:mb-0 mb-[30px]'}>
                            <Icon name={'award'} width={38} height={38} fillColor={'white'} strokeColor={'none'}
                                  className={'xl:block hidden'}/>
                            <Icon name={'award'} width={30} height={30} fillColor={'white'} strokeColor={'none'}
                                  className={'xl:hidden block'}/>
                        </div>
                        <p className={'xl:text-[20px] text-[18px] font-normal text-white'}>با بیش از ۲۵ سال تجربه در
                            ورزش بدنسازی و تناسب اندام تصمیم گرفتیم دانش و تجربه خود را در اختیار همه علاقه‌مندان به این
                            رشته ورزشی جذاب قرار دهیم.</p>
                    </div>
                    <div className={'grid grid-cols-3 items-center align-bottom'}>
                        <div className={'relative h-[70px] flex flex-col items-center justify-end p-[10px]'}>
                            <span className={'block text-center font-bold text-white w-full truncate'}>+2000</span>
                            <span className={'block text-center font-semibold text-themeViolet w-full truncate'}>کاربر فعال</span>
                            <div
                                className={'w-[1px] h-[80px] bg-gradient-to-b from-white to-transparent absolute top-0 -left-[0%] translate-x-[50%]'}/>
                        </div>
                        <div className={'relative h-[70px] flex flex-col items-center justify-end p-[10px]'}>
                            <span className={'block text-center font-bold text-white w-full truncate'}>+250</span>
                            <span className={'block text-center font-semibold text-themeViolet w-full truncate'}>مکمل بدنسازی</span>
                            <div
                                className={'w-[1px] h-[80px] bg-gradient-to-b from-white to-transparent absolute top-0 -left-[0%] translate-x-[50%]'}/>
                        </div>
                        <div className={'h-[70px] flex flex-col items-center justify-end p-[10px]'}>
                            <span className={'block text-center font-bold text-white w-full truncate'}>+1000</span>
                            <span className={'block text-center font-semibold text-themeViolet w-full truncate'}>رژیم غذایی انلاین</span>
                        </div>
                    </div>
                </div>
                <Image width={600} height={600} src={maleImage.src} alt={'Image of a man'}
                       className={'shrink-0 xl:block hidden object-cover'}/>
            </Container>
            <div className={'bg-theme p-[20px] xl:rotate-[-5deg] my-[20px] origin-center relative xl:before:block before:hidden xl:after:block after:hidden before:content-[""] before:absolute before:right-0 before:top-0 before:h-full before:aspect-square before:bg-theme before:translate-x-[99%] after:content-[""] after:absolute after:left-0 after:top-0 after:h-full after:aspect-square after:bg-theme after:translate-x-[-100%]'}>
                <p className={'font-bold xl:text-[30px] text-[20px] text-center text-white'}>همه می خواهند بدنساز باشند اما کسی نمی خواهد وزنه های سنگین بلند کند!</p>
            </div>
        </section>
    );
}