// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {ColoredIconType} from "@/type";

// Creating and exporting colored icon component as default
export default function ColoredIcon({name, size}:ColoredIconType):ReactNode {
    // Conditional rendering
    if (name === 'plan') {
        return (
            <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_10046)">
                    <mask id="mask0_1_10046" maskUnits="userSpaceOnUse" x="0" y="0"
                          width="60" height="60">
                        <path d="M60 0H0V60H60V0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1_10046)">
                        <path
                            d="M47.3438 21.6797V14.0625C47.3437 10.9545 46.1091 7.97378 43.9114 5.77609C41.7137 3.5784 38.733 2.34375 35.625 2.34375H14.0625C10.9545 2.34375 7.97378 3.5784 5.77609 5.77609C3.5784 7.97378 2.34375 10.9545 2.34375 14.0625V45.9375C2.34375 49.0455 3.5784 52.0262 5.77609 54.2239C7.97378 56.4216 10.9545 57.6562 14.0625 57.6562H25.4297"
                            stroke="white" stroke-width="4.6875" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M35.1562 11.4844C35.1562 13.0384 34.5389 14.5287 33.4401 15.6276C32.3412 16.7264 30.8509 17.3437 29.2969 17.3438H20.3906C18.8366 17.3437 17.3463 16.7264 16.2474 15.6276C15.1486 14.5287 14.5312 13.0384 14.5312 11.4844"
                            stroke="white" stroke-width="4.6875" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M57.6563 44.1797C57.6563 46.8451 56.8659 49.4507 55.385 51.6669C53.9042 53.8831 51.7995 55.6104 49.337 56.6304C46.8744 57.6504 44.1647 57.9173 41.5505 57.3973C38.9363 56.8773 36.5351 55.5938 34.6503 53.7091C32.7656 51.8243 31.4821 49.423 30.9621 46.8088C30.4421 44.1946 30.709 41.4849 31.729 39.0224C32.749 36.5599 34.4763 34.4552 36.6925 32.9743C38.9087 31.4935 41.5143 30.7031 44.1797 30.7031C47.7539 30.7031 51.1817 32.123 53.7091 34.6503C56.2364 37.1777 57.6563 40.6055 57.6563 44.1797Z"
                            stroke="white" stroke-width="4.6875" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M48.1641 44.1797H44.1797V39.375" stroke="white" strokeOpacity="0.55" stroke-width="4.6875"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.2344 27.8906H28.4766" stroke="white" strokeOpacity="0.55" stroke-width="4.6875" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M15.2344 37.2656H22.6172" stroke="white" strokeOpacity="0.55" stroke-width="4.6875" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M15.2344 46.6406H21.4453" stroke="white" strokeOpacity="0.55" stroke-width="4.6875" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_1_10046">
                        <rect width="60" height="60" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    } else if (name === 'pill') {
        return (
            <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_10042)">
                    <path
                        d="M17.6613 59.9981C12.9347 59.9981 8.49081 58.1574 5.14867 54.8151C-1.71634 48.2283 -1.7161 36.3763 5.14867 29.7896L29.7878 5.15033C36.3747 -1.71467 48.2266 -1.71432 54.8134 5.15033C58.7477 9.04187 60.6367 14.7815 59.808 20.2447C59.62 21.5256 58.4283 22.411 57.1487 22.2233C55.8679 22.0353 54.9822 20.8447 55.17 19.564C56.9381 7.18089 41.979 -0.321165 33.1025 8.46506L8.46327 33.1043C3.41671 37.9464 3.41706 46.6586 8.46316 51.5006C13.3052 56.547 22.0175 56.5468 26.8594 51.5006L33.7107 44.6187C35.9923 42.5021 39.1383 45.6372 37.0328 47.9259L30.1779 54.8116C26.8318 58.1574 22.3881 59.9981 17.6613 59.9981ZM36.5602 36.562C37.4756 35.6466 37.4756 34.1626 36.5602 33.2474L27.5366 24.2237C25.2501 22.1123 22.1112 25.2543 24.2218 27.5384L33.2455 36.562C33.7031 37.0196 34.303 37.2485 34.9029 37.2485C35.5028 37.2485 36.1026 37.0197 36.5602 36.562Z"
                        fill="white"/>
                    <path
                        d="M47.0908 59.9835C45.021 59.9957 43.9493 57.427 45.4511 55.9649L55.0748 46.5431C55.3559 46.2681 55.3173 45.9719 55.2358 45.7716C55.1546 45.5723 54.9761 45.3347 54.5874 45.3347H45.688C40.8841 45.3593 38.4733 39.3996 41.9364 36.0746L52.0229 26.3069C54.3428 24.2323 57.4309 27.4245 55.2838 29.6742L45.1991 39.4402C44.9196 39.7115 44.9576 40.0082 45.0391 40.2089C45.12 40.4089 45.2984 40.647 45.6879 40.647H54.5872C56.7874 40.647 58.7459 41.9641 59.5766 44.0023C60.4078 46.042 59.9274 48.3545 58.3526 49.8938L48.7303 59.3143C48.2928 59.7439 47.704 59.9843 47.0908 59.9835ZM10.6445 46.3894C10.6445 48.0075 11.9562 49.3192 13.5743 49.3192C17.4606 49.1648 17.4595 43.6134 13.5743 43.4597C11.9562 43.4597 10.6445 44.7714 10.6445 46.3894ZM12.754 36.897C12.754 38.5151 14.0657 39.8268 15.6837 39.8268C19.57 39.6724 19.5689 34.121 15.6837 33.9673C14.0657 33.9673 12.754 35.279 12.754 36.897ZM20.3713 44.5144C20.3713 46.1324 21.683 47.4441 23.3011 47.4441C27.1873 47.2898 27.1863 41.7384 23.3011 41.5846C21.683 41.5846 20.3713 42.8963 20.3713 44.5144Z"
                        fill="white" fill-opacity="0.55"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_10042">
                        <rect width="60" height="60" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    } else if (name === 'weight') {
        return (
            <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_10034)">
                    <mask id="mask0_1_10034" maskUnits="userSpaceOnUse" x="0" y="0"
                          width="60" height="60">
                        <path d="M60 0H0V60H60V0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1_10034)">
                        <path
                            d="M45.9375 57.6562H14.0625C10.9545 57.6562 7.97378 56.4216 5.77609 54.2239C3.5784 52.0262 2.34375 49.0455 2.34375 45.9375V14.0625C2.34375 10.9545 3.5784 7.97378 5.77609 5.77609C7.97378 3.5784 10.9545 2.34375 14.0625 2.34375H45.9375C49.0455 2.34375 52.0262 3.5784 54.2239 5.77609C56.4216 7.97378 57.6562 10.9545 57.6562 14.0625V45.9375C57.6562 49.0455 56.4216 52.0262 54.2239 54.2239C52.0262 56.4216 49.0455 57.6562 45.9375 57.6562Z"
                            stroke="white" stroke-width="5.15625" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M48.2812 21.3281H42.6012C41.9202 21.3288 41.2475 21.4776 40.6297 21.7641C40.0119 22.0506 39.4638 22.4681 39.0234 22.9875C37.5504 24.7266 34.6383 27.1875 30 27.1875C25.3617 27.1875 22.4496 24.7266 20.9766 22.9875C20.5362 22.4681 19.9881 22.0506 19.3703 21.7641C18.7525 21.4776 18.0798 21.3288 17.3988 21.3281H11.7188"
                            stroke="white" strokeOpacity="0.55" stroke-width="5.15625" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30 17.8125L34.1016 11.7188" stroke="white" strokeOpacity="0.55" stroke-width="5.15625"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_1_10034">
                        <rect width="60" height="60" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    } else if (name === 'gym-bar') {
        return (
            <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_9991)">
                    <mask id="mask0_1_9991" maskUnits="userSpaceOnUse" x="0" y="0"
                          width="60" height="60">
                        <path d="M60 0H0V60H60V0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1_9991)">
                        <path d="M57.6562 57.6562H2.34375" stroke="white" stroke-width="4.53125" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M21.2109 2.34375V5.85938" stroke="white" stroke-width="4.53125" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M38.7891 2.34375V5.85938" stroke="white" stroke-width="4.53125" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </g>
                    <path d="M21.2109 22.8516V48.2812" stroke="white" stroke-width="4.53125" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M38.7891 22.8516V48.2812" stroke="white" stroke-width="4.53125" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M48.2812 14.0625H11.8359" stroke="white" strokeOpacity="0.55" stroke-width="4.53125" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <mask id="mask1_1_9991" maskUnits="userSpaceOnUse" x="0" y="0"
                          width="60" height="60">
                        <path d="M60 0H0V60H60V0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1_1_9991)">
                        <path
                            d="M2.34375 21.0938V7.03125C2.34375 5.78805 2.83761 4.59576 3.71669 3.71669C4.59576 2.83761 5.78805 2.34375 7.03125 2.34375C8.27445 2.34375 9.46674 2.83761 10.3458 3.71669C11.2249 4.59576 11.7188 5.78805 11.7188 7.03125V21.0938C11.7187 22.337 11.2249 23.5292 10.3458 24.4083C9.46674 25.2874 8.27445 25.7812 7.03125 25.7812C5.78805 25.7812 4.59576 25.2874 3.71669 24.4083C2.83761 23.5292 2.34375 22.337 2.34375 21.0938Z"
                            stroke="white" strokeOpacity="0.55" stroke-width="4.53125" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M48.2812 21.0938V7.03125C48.2812 5.78805 48.7751 4.59576 49.6542 3.71669C50.5333 2.83761 51.7255 2.34375 52.9688 2.34375C54.212 2.34375 55.4042 2.83761 56.2833 3.71669C57.1624 4.59576 57.6562 5.78805 57.6562 7.03125V21.0938C57.6562 22.337 57.1624 23.5292 56.2833 24.4083C55.4042 25.2874 54.212 25.7812 52.9688 25.7812C51.7255 25.7812 50.5333 25.2874 49.6542 24.4083C48.7751 23.5292 48.2812 22.337 48.2812 21.0938Z"
                            stroke="white" strokeOpacity="0.55" stroke-width="4.53125" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_1_9991">
                        <rect width="60" height="60" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    }
}