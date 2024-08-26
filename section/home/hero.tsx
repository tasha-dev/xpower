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
        <section className={'relative z-0'}>
            <Image width={1000} height={1000} src={bgImage.src} alt={'Background Image'} className={'absolute top-0 pointer-events-none left-0 w-full h-full object-cover'}/>
            <Container className={'xl:mt-[50px] mt-[150px] flex items-center justify-between xl:flex-row flex-col-reverse'}>
                <div>
                    <h1 className={'text-transparent bg-clip-text mb-[10px] bg-gradient-to-bl from-white to-themeViolet text-[58px] font-extrabold'}>هر آنچه برای رسیدن به اندام ایده آل نیاز دارید</h1>
                    <h3 className={'text-[25px] font-normal bg-gradient-to-bl from-white to-themeViolet text-transparent bg-clip-text'}>تخصصی ترین وبسایت بدنسازی درایران با مجوز رسمی</h3>
                    <div>
                        <div>
                            <Icon name={'award'} width={38} height={38} fillColor={'white'} strokeColor={'none'}/>
                        </div>
                        <p>با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم گرفتیم دانش و تجربه خود را در
                            اختیار
                            همه علاقه‌مندان به این رشته ورزشی جذاب قرار دهیم.</p>
                    </div>
                    <div>
                        <div>
                            <span>+2000</span>
                            <span>کاربر فعال</span>
                        </div>
                        <div>
                            <span>+250</span>
                            <span>مکمل بدنسازی</span>
                        </div>
                        <div>
                            <span>+1000</span>
                            <span>رژیم غذایی انلاین</span>
                        </div>
                    </div>
                </div>
                <Image width={600} height={600} src={maleImage.src} alt={'Image of a man'} className={'shrink-0 xl:block hidden object-cover'}/>
            </Container>
        </section>
    );
}