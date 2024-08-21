// Codes by mahdi tasha
// Importing part
import localFont from "next/font/local";
import {Metadata} from "next";
import siteConfig from "@/config";
import {RootLayoutType} from "@/type";
import {ReactNode} from "react";
import {cn} from "@/util/cn";
import '@/style';

// Defining fonts
const iranYekanFont = localFont({
    src: [
        {
            style: 'normal',
            path: './IRANYekan/IRANYekanWebBlack.woff2',
            weight: '900'
        }, {
            style: 'normal',
            path: './IRANYekan/IRANYekanWebBold.woff2',
            weight: '700'
        }, {
            style: 'normal',
            path: './IRANYekan/IRANYekanWebExtraBlack.woff2',
            weight: '950'
        }, {
            style: 'normal',
            path: './IRANYekan/IRANYekanWebExtraBold.woff2',
            weight: '800'
        }, {
            style: 'normal',
            path: './IRANYekan/IRANYekanWebLight.woff2',
            weight: '300'
        }, {
            style: 'normal',
            path: './IRANYekan/IRANYekanWebMedium.woff2',
            weight: '500'
        }, {
            style: 'normal',
            path: './IRANYekan/IRANYekanWebRegular.woff2',
            weight: '400'
        }, {
            style: 'normal',
            path: './IRANYekan/IRANYekanWebThin.woff2',
            weight: '100'
        }
    ]
});

// Defining metadata
export const metadata:Metadata = {
    title: {
        template: '%s | X.POWER',
        default: siteConfig.name
    },
    description: siteConfig.description,
    keywords: ["XPower", "bodybuilding", "fitness", "nutrition", "supplements", "workout plans", "diet plans", "muscle building", "strength training", "fitness goals", "personalized fitness", "athlete nutrition", "fitness supplements", "custom workout routines", "health and fitness"],
    themeColor: '#6F4EFD',
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    }
}

// Creating and exporting root layout component as default
export default function RootLayout({children}:RootLayoutType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={'bg-darkTheme'}>
                <div className={cn('min-h-screen w-full', iranYekanFont.className)}>
                    {children}
                </div>
            </body>
        </html>
    );
}
