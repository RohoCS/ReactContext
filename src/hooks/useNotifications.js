import { useDispatch } from "react-redux";
import { useContext } from "react";
import { addNotification } from "../store/notificationsSlice";
import { LangContext } from "../context/LangContext";

export const useNotifications = () => {
  const dispatch = useDispatch();
  const { t } = useContext(LangContext);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const showNotification = (message, type = "info", duration = 5000) => {
    const id = generateId();
    const translatedMessage = t(message);
    dispatch(
      addNotification({ id, message: translatedMessage, type, duration })
    );
    return id;
  };

  const showInfo = (message, duration) => {
    return showNotification(message, "info", duration);
  };

  const showSuccess = (message, duration) => {
    return showNotification(message, "success", duration);
  };

  const showWarning = (message, duration) => {
    return showNotification(message, "warning", duration);
  };

  const showError = (message, duration) => {
    return showNotification(message, "error", duration);
  };

  return {
    showNotification,
    showInfo,
    showSuccess,
    showWarning,
    showError,
  };
};
