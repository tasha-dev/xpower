// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import Icon from "@/component/ui/icon";
import Image from "next/image";
import maleImage from "@/image/home/especialTrainingProgram/male.png";
import Button from "@/component/ui/button";
import SmallFeature from "@/component/smallFeature";
import stopWatchImage from '@/image/home/especialTrainingProgram/stopWatch.png';
import starMedalImage from '@/image/home/especialTrainingProgram/starMedal.png';

// Creating and exporting 'especial training program' section of home page as default
export default function EspecialTrainingProgram():ReactNode {
    // Returning JSX
    return (
        <section>
            <Container className={'flex items-center justify-between xl:flex-row flex-col-reverse gap-[100px]'}>
                <div>
                    <h1 className={'text-transparent xl:text-right text-center bg-clip-text mb-[15px] bg-gradient-to-bl from-white to-themeViolet xl:text-[56px] text-[30px] font-extrabold'}>هر برنامه تمرینی کاملا اختصاصی برای شما...</h1>
                    <p className={'text-[20px] leading-[37px] font-normal text-white/60 mb-[36px]'}>هر کسی با یه هدفی ورزش میکنه، کاهش وزن ،افزایش وزن، بدنسازی، حفظ تناسب اندامش ، آسیب جسمانی خیلیا هم نمیذاره بعضی از حرکات رو انجام بدن ، با ایکس پاور یه برنامه ورزشی کاملا مختص به شرایط خودتون دریافت خواهید کرد.</p>
                    <div className={'flex flex-wrap items-center xl:justify-start justify-center gap-3'}>
                        <Button size={'default'} variant={'primary'} link={'#'}>دریافت برنامه تمرینی</Button>
                        <Button size={'default'} variant={'transparent'} link={'#'} className={'flex items-center gap-3 justify-center'}>
                            مشاهده نظر کاربران
                            <Icon name={'arrow-left'} width={30} height={30} fillColor={'white'} />
                        </Button>
                    </div>
                </div>
                <div className={'relative shrink-0 w-[400px] h-[600px] xl:block hidden'}>
                    <Image width={600} height={600} src={maleImage.src} alt={'Image of a man'} className={'object-cover w-full h-full rounded-[32px] shadow-2xl shadow-theme/50'}/>
                    <SmallFeature img={stopWatchImage.src} className={'absolute right-0 top-[50%] -translate-y-[50%] translate-x-[50%]'} text={'برنامه تمرینی کاملا اختصاصی'} />
                    <SmallFeature imgSize={180} img={starMedalImage.src} className={'absolute left-[56px] bottom-0 translate-y-[50%]'} text={'زیر نظر بهترین مربی ها'} />
                </div>
            </Container>
        </section>
    );
}