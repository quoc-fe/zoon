import { atom } from "recoil";

export const loadingState = atom({
  key: "loading",
  default: false,
});
export const isRefetchState = atom({
  key: "refetch",
  default: false,
});
