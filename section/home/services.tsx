// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import ServiceItem from "@/component/serviceItem";
import SectionInfo from "@/component/ui/sectionInfo";

// Creating and exporting services section in home page as default
export default function Services():ReactNode {
    // Returning JSX
    return (
        <section>
            <Container>
                <SectionInfo title={'خدمات ما'}>ما در ایکس پاور چه خدماتی ارائه میکنیم؟</SectionInfo>
                <div className={'grid xl:grid-cols-4 lg:grid-cols-2 lg:gap-[17px] gap-[20px]'}>
                    <ServiceItem icon={'gym-bar'} link={'#'} title={'برنامه تمرینی'}>ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی</ServiceItem>
                    <ServiceItem icon={'weight'} link={'#'} title={'رژیم غذایی'}>ارائه آنلاین رژیمهای غذایی ویژه ورزشکاران و افرادی که دوستدار سلامتی هستند</ServiceItem>
                    <ServiceItem icon={'pill'} link={'#'} title={'مکمل های بدنسازی'}>بررسی انواع مکملهای بدنسازی برای انتخاب بهترین مکمل بدنسازی</ServiceItem>
                    <ServiceItem icon={'plan'} link={'#'} title={'برنامه تمرینی'}>ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی</ServiceItem>
                </div>
            </Container>
        </section>
    );
}