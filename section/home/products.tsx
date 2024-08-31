// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import SectionInfo from "@/component/ui/sectionInfo";
import Container from "@/component/ui/container";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import Product from "@/component/product";
import {ProductType} from "@/type";
import wheyImage from '@/image/products/whey.png';
import wheyUrovitalImage from '@/image/products/whey-urovital.png';
import wheyDelivousImage from '@/image/products/delicous-whey.png';
import gainerImage from '@/image/products/gainer.png';

// Creating and exporting products section of home page as default
export default function Products():ReactNode {
    // Defining dummy data to render in slider
    const data:ProductType[] = [
        {
            img: wheyImage.src,
            link: '#',
            price: 2290000,
            title: 'پروتئین وی ژن استار 2270 گرم'
        }, {
            img: wheyUrovitalImage.src,
            link: '#',
            price: 1800000,
            title: 'پروتئین وی یوروویتال 1000 گرم'
        }, {
            img: gainerImage.src,
            link: '#',
            price: 9600000,
            title: 'گینر ژن استار 3000 گرم'
        }, {
            img: wheyDelivousImage.src,
            link: '#',
            price: 3180000,
            title: 'دلیشس وی پروتئین کیو ان تی'
        }
    ];

    // Returning JSX
    return (
        <section>
            <Container>
                <SectionInfo title={'محصولات'}>جدیدترین محصولات</SectionInfo>
                <div className={'relative'}>
                    <div className={'absolute top-0 right-0 w-[300px] h-full bg-gradient-to-r from-transparent to-darkTheme pointer-events-none z-[10]'}/>
                    <Swiper
                        style={{
                            paddingTop: '56px',
                            paddingBottom: '40px',
                            zIndex: '1'
                        }}
                        spaceBetween={17}
                        slidesPerView={4}
                    >
                        {
                            data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Product
                                        title={item.title}
                                        link={item.link}
                                        price={item.price}
                                        img={item.img}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className={'absolute top-0 left-0 w-[300px] h-full bg-gradient-to-l from-transparent to-darkTheme pointer-events-none z-[10]'}/>
                </div>
            </Container>
        </section>
    );
}