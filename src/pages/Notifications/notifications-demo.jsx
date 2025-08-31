import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { useNotifications } from "../../hooks/useNotifications";
import "./notifications-demo.styles.css";

const NotificationsDemo = () => {
  const { t } = useContext(LangContext);
  const { showInfo, showSuccess, showWarning, showError } = useNotifications();

  const handleShowInfo = () => {
    showInfo(t("This is an informational notification"), 3000);
  };

  const handleShowSuccess = () => {
    showSuccess(t("Operation completed successfully!"), 4000);
  };

  const handleShowWarning = () => {
    showWarning(t("Warning! This is a warning"), 5000);
  };

  const handleShowError = () => {
    showError(t("An error occurred while performing the operation"), 6000);
  };

  return (
    <div className="notifications-demo">
      <h1>{t("Demo notification system")}</h1>

      <div className="demo-buttons">
        <button className="demo-btn demo-btn-info" onClick={handleShowInfo}>
          {t("Show Info")}
        </button>

        <button
          className="demo-btn demo-btn-success"
          onClick={handleShowSuccess}
        >
          {t("Show Success")}
        </button>

        <button
          className="demo-btn demo-btn-warning"
          onClick={handleShowWarning}
        >
          {t("Show Warning")}
        </button>

        <button className="demo-btn demo-btn-error" onClick={handleShowError}>
          {t("Show Error")}
        </button>
      </div>
    </div>
  );
};

export default NotificationsDemo;
