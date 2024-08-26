// Codes by mahdi tasha
// Creating and exporting types of stores(zustand)
export type NavMenuStoreType = {
    isOpened: boolean;
    toggle: () => void;
    close: () => void;
    open: () => void;
}