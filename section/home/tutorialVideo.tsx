// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode, useEffect, useState} from "react";
import Container from "@/component/ui/container";
import Icon from "@/component/ui/icon";
import SliderPagination from "@/component/sliderPagination";
import VideoPlayer from "@/component/videoPlayer";
import BicepImage from '@/image/home/tutorialVideo/bicep.png';
import {Swiper, SwiperSlide} from "swiper/react";
import * as SwiperTypes from 'swiper/types';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import {VideoTutorialItemType} from "@/type";

// Creating and exporting tutorial public section as default
export default function TutorialVideo():ReactNode {
    // Defining states of component
    const [sliderActiveIndex, setSliderActiveIndex] = useState<number>(0);
    const [textSwiper, setTextSwiper] = useState<SwiperTypes.Swiper | null>(null);
    const [videoSwiper, setVideoSwiper] = useState<SwiperTypes.Swiper | null>(null);

    // Defining dummy data to render
    const data:VideoTutorialItemType[] = [
        {
            poster: BicepImage.src,
            src: '/video/home/tutorialVideo/video.mp4',
            description: 'هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.',
            title: 'آموزش جلو بازو ایستاده'
        }, {
            poster: BicepImage.src,
            src: '/video/home/tutorialVideo/video.mp4',
            description: 'هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.',
            title: 'آموزش جلو بازو ایستاده'
        },{
            poster: BicepImage.src,
            src: '/video/home/tutorialVideo/video.mp4',
            description: 'هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.',
            title: 'آموزش جلو بازو ایستاده'
        },{
            poster: BicepImage.src,
            src: '/video/home/tutorialVideo/video.mp4',
            description: 'هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.',
            title: 'آموزش جلو بازو ایستاده'
        },{
            poster: BicepImage.src,
            src: '/video/home/tutorialVideo/video.mp4',
            description: 'هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.',
            title: 'آموزش جلو بازو ایستاده'
        }
    ];

    // Using useEffect to change slide of text swiper (slider) when 'sliderActiveIndex' state changes
    useEffect(() => {
        if (textSwiper) {
            textSwiper.slideTo(sliderActiveIndex);
        }
    }, [sliderActiveIndex])

    // Returning JSX
    return (
        <section>
            <Container className={'xl:grid flex flex-col-reverse grid-cols-2 xl:gap-[22px] gap-[40px]'}>
                <div>
                    <Swiper
                        onSlideChange={(e:SwiperTypes.Swiper) => setSliderActiveIndex(e.activeIndex)}
                        onSwiper={(e: SwiperTypes.Swiper) => setVideoSwiper(e)}
                        modules={[Navigation]}
                        effect={'cards'}
                        spaceBetween={20}
                        autoplay={true}
                        dir={'rtl'}
                        style={{height: '540px'}}
                        navigation={{
                            enabled: true,
                            prevEl: '#tutorial-slider-prev-el',
                            nextEl: '#tutorial-slider-next-el',
                        }}
                    >
                        {
                            data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <VideoPlayer
                                        src={item.src}
                                        cover={item.poster}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div>
                    <div className={'bg-theme rounded-[28px] mb-[40px] py-[83px] px-[57px]'}>
                        <div className={'flex items-center justify-center gap-[12px] mb-[71px]'}>
                            <Icon height={40} width={40} name={'video'} fillColor={'white'} className={'shrink-0'}/>
                            <h6 className={'truncate font-bold text-[35px] leading-[37px] text-white'}>ویدیو آموزشی</h6>
                        </div>
                        <Swiper
                            spaceBetween={20}
                            dir={'rtl'}
                            onSwiper={(e: SwiperTypes.Swiper) => setTextSwiper(e)}
                            onSlideChange={(e) => videoSwiper?.slideTo(e.activeIndex)}
                        >
                            {
                                data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div>
                                            <h5 className={'text-[25px] font-bold leading-[37px] text-white mb-[20px]'}>{item.title}</h5>
                                            <p className={'text-[18px] font-normal text-white leading-[37px]'}>{item.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className={'flex items-center justify-between gap-[20px] lg:px-[114px]'}>
                        <button id={'tutorial-slider-prev-el'} className={'shrink-0'}>
                            <Icon name={'chevron-right'} width={20} height={20} fillColor={'white'}/>
                        </button>
                        <SliderPagination activeIndex={sliderActiveIndex} count={data.length} className={'w-full'}/>
                        <button id={'tutorial-slider-next-el'} className={'shrink-0'}>
                            <Icon name={'chevron-left'} width={20} height={20} fillColor={'white'}/>
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}