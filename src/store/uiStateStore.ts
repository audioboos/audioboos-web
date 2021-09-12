import { atom } from "recoil";

interface IUIStateStore {
    sidebarOpen: boolean;
}
const uiStateStore = atom<IUIStateStore>({
    key: "uiState",
    default: {
        sidebarOpen: true,
    },
});

export default uiStateStore;
