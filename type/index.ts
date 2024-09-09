// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Creating and exporting type of component as default
export interface RootLayoutType {children: ReactNode;}
export type IconNameType = 'award' | 'arrow-left' | 'plus' | 'video' | 'chevron-left' | 'chevron-right' | 'pencil' | 'settings' | 'tw' | 'wh' | 'ig' | 'tg';
export type ColoredIconNameType = 'plan' | 'pill' | 'weight' | 'gym-bar';
export interface HeaderItemsType {
    title: string;
    link: string;
}

export interface HeaderLinkType {
    children: string;
    link: string;
}

export interface ButtonType {
    children: ReactNode;
    size?: 'default' | 'icon';
    variant?: 'transparent' | 'primary';
    link?: string;
    className?: string;
    onClick?: () => void;
}

export interface ContainerType {
    size?: 'lg' | 'sm';
    children: ReactNode;
    className?: string;
}

export interface NavMenuType {
    isOpened: boolean;
    closeFn: () => void;
    items: HeaderItemsType[];
}

export interface NavMenuLinkType {
    children: string;
    link: string;
}

export interface IconType {
    name: IconNameType;
    width?: number;
    height?: number;
    fillColor?: string;
    strokeColor?: string;
    className?: string;
}

export interface ColoredIconType {
    name: ColoredIconNameType;
    size: number;
}

export interface ServiceItemType {
    icon: ColoredIconNameType;
    link: string;
    title: string;
    children: string;
}

export interface SectionIntoType {
    children: string;
    title: string;
    className?: string;
}

export interface ProductType {
    img: string;
    title: string;
    price: number;
    link: string;
}

export interface SmallFeatureType {
    img: string;
    text: string;
    className?: string;
    imgSize?: number;
}

export interface SliderPaginationType {
    count: number;
    activeIndex: number;
    className?: string;
}

export interface VideoPlayerType {
    src: string;
    className?: string;
    cover: string;
}

export interface BlogType {
    link: string;
    date: string;
    img: string;
    title: string;
    description: string;
}

export interface MediaLinkType {
    link: string;
    icon: 'tw' | 'wh' | 'ig' | 'tg';
}

export interface FooterDataItemType {
    title: string,
    data: { link: string, text: string }[];
}

export type FooterDataType = FooterDataItemType[];