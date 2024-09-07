// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import Link from "next/link";
import MediaLink from "@/component/ui/mediaLink";

// Creating and exporting contact component as default
export default function Contact():ReactNode {
    // Returning JSX
    return (
        <Container className={'bg-white/10 xl:mt-[185px] mt-[80px] rounded-t-[18px] px-[40px] py-[24px] flex xl:flex-row flex-col xl:mx-auto mx-[20px] items-center justify-between gap-[20px]'}>
            <h6 className={'text-[22px] font-normal text-white block truncate'}>
                شماره تماس :
                <Link href={'tel:02134562245'}>021 3456 2245</Link>
            </h6>
            <div className={'flex xl:flex-row flex-col items-center justify-between gap-[20px] shrink-0'}>
                <h6 className={'text-[22px] font-normal text-white truncate'}>ما را در شبکه های اجتماعی دنبال کنید</h6>
                <div className={'flex items-center justify-between gap-[22px] shrink-0'}>
                    <MediaLink link={'#'} icon={'tg'} />
                    <MediaLink link={'#'} icon={'ig'} />
                    <MediaLink link={'#'} icon={'wh'} />
                    <MediaLink link={'#'} icon={'tw'} />
                </div>
            </div>
        </Container>
    );
}