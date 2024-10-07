import { toast } from "react-toastify";

export const handleSucess = (msgs) => {
  toast.success(msgs, { position: "bottom-right" });
};
export const handleError = (msgs) => {
  toast.error(msgs, { position: "bottom-right" });
};
