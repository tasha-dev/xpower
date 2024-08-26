// Codes by mahdi tasha
// Importing part
import {create} from 'zustand';
import {NavMenuStoreType} from "@/type/store";

// Defining stores and exporting them
export const useNavMenu = create<NavMenuStoreType>((set) => ({
    isOpened: false,
    close: () => set(() => ({isOpened: false})),
    open: () => set(() => ({isOpened: true})),
    toggle: () => set((state) => ({
        isOpened: !state.isOpened
    }))
}))
