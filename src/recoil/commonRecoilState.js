import { atom } from "recoil";

export const loadingState = atom({
  key: "loading",
  default: false,
});
export const isRefetchState = atom({
  key: "refetch",
  default: false,
});
export const changeLang = atom({
  key: "change-lang",
  default: "en",
});
export const openModal = atom({
  key: "open-modal",
  default: { open: false, component: "" },
});
