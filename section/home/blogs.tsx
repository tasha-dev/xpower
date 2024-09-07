// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import {BlogType} from "@/type";
import highestPaidBodyBuildersImage from '@/image/home/blogs/highestPaidBodyBuilders.png';
import trainingProgramForFatBurningImage from '@/image/home/blogs/trainingProgramForFatBurning.png';
import howMuchWeightImage from '@/image/home/blogs/howMuchWeight.png';
import Blog from "@/component/blog";

// Creating and exporting blogs section of home page as default
export default function Blogs():ReactNode {
    // Defining dummy data to render
    const data:BlogType[] = [
        {
            title: 'پولدارترین بدنسازهای تاریخ',
            date: '2024-09-07T12:19:08.220Z',
            img: highestPaidBodyBuildersImage.src,
            link: '#',
            description: 'صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند...'
        },
        {
            title: 'برنامه تمرینی اینتروال چربی سوزی',
            date: '2024-09-07T12:19:08.220Z',
            img: trainingProgramForFatBurningImage.src,
            link: '#',
            description: 'تمرینات اینتروال (HIIT) موثرترین روش تمرین برای چربی سوزی و حفظ عضلات است. در ادامه سعی می‌کنم درمورد تمرینات اینتروال بیشتر...'
        },
        {
            title: 'چقدر مقدار وزنه انتخاب کنم؟',
            date: '2024-09-07T12:19:08.220Z',
            img: howMuchWeightImage.src,
            link: '#',
            description: 'صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند با ما همراه باشید.'
        }
    ];

    // Returning JSX
    return (
        <section>
            <Container>
                <h6 className={'text-white xl:text-center text-right xl:mb-[50px] mb-[20px] font-bold truncate xl:text-[34px] text-[20px]'}>
                    جدیدترین مقالات
                </h6>
                <div className={'grid xl:grid-cols-3 grid-cols-1 xl:gap-[62px] gap-[40px]'}>
                    {
                        data.map((item, index) => (
                            <Blog
                                key={index}
                                img={item.img}
                                link={item.link}
                                title={item.title}
                                description={item.description}
                                date={item.date}
                            />
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}