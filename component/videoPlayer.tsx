// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode, useEffect, useRef, useState} from "react";
import {VideoPlayerType} from "@/type";
import {formatVideoTime, cn, videoTimePercentage} from "@/util";
import Icon from "@/component/ui/icon";
import {useSwiper} from "swiper/react";
import {Pause, Play, SkipBack, SkipForward, Volume2, VolumeOff} from "lucide-react";

// Creating and exporting public player as default
export default function VideoPlayer({className, src, cover}:VideoPlayerType):ReactNode {
    // Defining a reference to the public element
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoElement = videoRef.current;

    // Defining states of component
    const [isPlaying, setPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [settingsOpened, setSettingsOpened] = useState<boolean>(false);
    const [isMuted, setMuted] = useState<boolean>(false);

    // Defining swiper (slider) hook to get its detail
    const swiper = useSwiper();

    // Using useEffect to pause the video when slide changes
    useEffect(() => {
        if (swiper) {
            setPlaying(false);
            videoElement?.pause();
            setSettingsOpened(false);
        }
    }, [swiper.activeIndex])

    // Using useEffect to set 'duration' state when 'isPlaying' state is set to true
    useEffect(() => {
        const interval = setInterval(() => {
            setDuration(prevState => prevState + 1);
        }, 1000);

        if (!isPlaying) {clearInterval(interval);}
        return () => clearInterval(interval);
    }, [isPlaying]);

    // Returning JSX
    return (
        <div className={cn('relative w-full h-full overflow-hidden rounded-[38px] border border-white group', className)}>
            <video
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
                onPlaying={() => setPlaying(true)}
                muted={isMuted}
                src={src}
                preload="none"
                className={'absolute top-0 left-0 z-10 w-full h-full object-cover'}
                poster={cover}
                ref={videoRef}
            >
                <source src={src} type={'public/mp4'}/>
                Your browser does not support the video tag.
            </video>
            <div className={'absolute bottom-0 z-20 left-0 w-full p-[10px] bg-black/50 backdrop-blur-2xl transition-all duration-500 opacity-0 pointer-events-none invisible group-hover:opacity-100 group-hover:pointer-events-auto group-hover:visible'}>
                <div className={'flex items-center justify-between gap-[8px] px-[5px]'}>
                    <span className={'text-white shrink-0 font-bold text-[6px]'}>
                        {
                            (videoElement)
                                ? formatVideoTime(Math.round(videoElement.duration))
                                : '00:00'
                        }
                    </span>
                    <div className={'w-full bg-gray-500 rounded-[50rem] h-[2px] w-full'} dir={'ltr'}>
                        <div
                            className={'bg-white h-[2px] rounded-[50rem] relative transition-all duration-500'}
                            style={{width: (videoElement) ? videoTimePercentage(videoElement.duration, duration) : '0%'}}
                        >
                            <div className={'w-[5px] h-[5px] bg-white rounded-full absolute right-0 top-0 translate-x-[50%] -translate-y-[25%]'} />
                        </div>
                    </div>
                    <span className={'text-white shrink-0 font-bold text-[6px]'}>
                        {formatVideoTime(duration)}
                    </span>
                </div>
                <div className={'flex items-center justify-center gap-[6px] py-[30px] px-[8px]'}>
                    <div className={'relative'}>
                        <div
                            data-opened={settingsOpened}
                            className={'absolute transition-all duration-500 bottom-full w-[150px] left-[50%] -translate-x-[50%] -translate-y-[20%] bg-theme flex flex-col overflow-hidden rounded-[10px] data-[opened="false"]:invisible data-[opened="false"]:opacity-0 data-[opened="false"]:pointer-events-none data-[opened="true"]:visible data-[opened="true"]:opacity-100 data-[opened="true"]:pointer-events-auto'}
                        >
                            <button
                                className={'p-[10px] transition-all text-white duration-500 hover:bg-white/20 flex items-center justify-start'}
                                onClick={() => setMuted(prevState => !prevState)}
                            >
                                {
                                    (isMuted)
                                        ? <VolumeOff className={'w-3 h-3 ml-3'} />
                                        : <Volume2 className={'w-3 h-3 ml-3'} />
                                }
                                <span className={'font-normal text-left truncate text-[12px] block'}>
                                    {(isMuted) ? 'بی صدا' : 'صدا دار'}
                                </span>
                            </button>
                        </div>
                        <button
                            className={'w-[24px] h-[24px] flex items-center justify-center bg-gray-300 rounded-full'}
                            onClick={() => {
                                if (videoElement) {
                                    setPlaying(false);
                                    setSettingsOpened(prevState => !prevState);
                                    videoElement.pause();
                                }
                            }}
                        >
                            <Icon name={'settings'} height={10} width={10} fillColor={'black'}/>
                        </button>
                    </div>
                    <button
                        className={'w-[24px] h-[24px] flex items-center justify-center bg-gray-300 rounded-full'}
                        onClick={() => {
                            if (videoElement) {
                                setPlaying(false);
                                videoElement.pause()
                                swiper.slidePrev();
                            }
                        }}
                    >
                        <SkipForward className={'w-[10px] h-[10px] fill-black stroke-current'} />
                    </button>
                    <button
                        className={'w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full'}
                        onClick={() => {
                            setPlaying(prevState => !prevState);

                            (isPlaying)
                                ? videoElement?.pause()
                                : videoElement?.play();
                        }}
                    >
                        {
                            (isPlaying)
                                ? <Pause className={'w-[10px] h-[10px] fill-black stroke-current'} />
                                : <Play className={'w-[10px] h-[10px] fill-black stroke-current'} />
                        }
                    </button>
                    <button
                        className={'w-[24px] h-[24px] flex items-center justify-center bg-gray-300 rounded-full'}
                        onClick={() => {
                            if (videoElement) {
                                setPlaying(false);
                                videoElement.pause()
                                swiper.slideNext();
                            }
                        }}
                    >
                        <SkipBack className={'w-[10px] h-[10px] fill-black stroke-current'} />
                    </button>
                    <button className={'w-[24px] cursor-not-allowed h-[24px] flex items-center justify-center bg-gray-300 rounded-full'}>
                        <Icon name={'pencil'} height={10} width={10} fillColor={'black'}/>
                    </button>
                </div>
            </div>
        </div>
    );
}