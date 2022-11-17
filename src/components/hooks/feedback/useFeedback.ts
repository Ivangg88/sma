import { toast, ToastOptions } from "react-toastify";
import { useContext } from "react";
import { UiContext } from "../../../store/uiContext/uiContext";

export const useFeeback = () => {
  const { theme } = useContext(UiContext);

  const feedbackConfig: ToastOptions = {
    position: "top-right",
    theme: theme,
  };

  const errorFeedback = (message: string) =>
    toast.error(message, feedbackConfig);

  const successFeedback = (message: string) =>
    toast.success(message, feedbackConfig);

  const infoFeedback = (message: string) => toast.info(message, feedbackConfig);

  return { errorFeedback, successFeedback, infoFeedback };
};
