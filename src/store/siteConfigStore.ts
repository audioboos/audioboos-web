import { atom } from "recoil";
import { Settings } from "../models";

interface ISiteConfigStore {
    theme?: string;
    isOpen: [];
    fontFamily: string;
    borderRadius: number;
    opened: boolean;
    settings?: Settings;
    defaultPath: string;
}
const siteConfigStore = atom<ISiteConfigStore>({
    key: "siteConfig",
    default: {
        theme: "dark",
        isOpen: [], //for active default menu
        fontFamily: `'Roboto', sans-serif`,
        borderRadius: 12,
        opened: true,
        defaultPath: "/",
        settings: {
            siteName: "AudioBoos",
        },
    },
});

export default siteConfigStore;
