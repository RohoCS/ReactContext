import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeNotification } from "../../store/notificationsSlice";
import "./notifications.styles.css";

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  useEffect(() => {
    notifications.forEach((notification) => {
      if (notification.duration > 0) {
        const timer = setTimeout(() => {
          dispatch(removeNotification(notification.id));
        }, notification.duration);

        return () => clearTimeout(timer);
      }
    });
  }, [notifications, dispatch]);

  const handleClose = (id) => {
    dispatch(removeNotification(id));
  };

  if (notifications.length === 0) return null;

  return (
    <div className="notifications-container">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification notification-${notification.type}`}
        >
          <div className="notification-content">
            <span className="notification-message">{notification.message}</span>
            <button
              className="notification-close"
              onClick={() => handleClose(notification.id)}
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
