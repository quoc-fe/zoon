import { removeCookie } from "./cookies";
import { ToastError, ToastSuccess } from "../components/common/toast";

export const handleResultApi = (response) => {
  if (response) {
    if (response.status && response.code == 401) {
      removeCookie();
    }
    return response.status && response.message
      ? ToastSuccess(response.message)
      : ToastError(response.message);
  }
};
