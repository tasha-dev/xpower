// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Creating and exporting type of component as default
export interface RootLayoutType {children: ReactNode;}
export type IconNameType = 'award' | 'arrow-left';
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