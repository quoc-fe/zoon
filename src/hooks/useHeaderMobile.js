import { headerMobileState } from "../recoil/headerMobile";
import { useRecoilState } from "recoil";
export const useHeaderMobile = () => {
  const [openHeader, setOpenHeader] = useRecoilState(headerMobileState);
  return { openHeader, setOpenHeader };
};
