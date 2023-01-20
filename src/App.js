import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import logo from "./sparky-dash-high-five.gif";
import { getFirebaseToken, onForegroundMessage } from "./firebase";

export default function App() {
  const [showNotificationBanner, setShowNotificationBanner] = useState(
    Notification.permission === "default"
  );

  useEffect(() => {
    onForegroundMessage()
      .then((payload) => {
        console.log("Received foreground message: ", payload);
        const {
          notification: { title, body, image },
        } = payload;
        toast(<ToastifyNotification title={title} body={body} image={image} />);
      })
      .catch((err) =>
        console.log(
          "An error occured while retrieving foreground message. ",
          err
        )
      );
  }, []);

  const handleGetFirebaseToken = () => {
    getFirebaseToken()
      .then((firebaseToken) => {
        console.log("Firebase token: ", firebaseToken);
        localStorage.setItem("fcm_token", firebaseToken);
        if (firebaseToken) {
          setShowNotificationBanner(false);
        }
      })
      .catch((err) =>
        console.error("An error occured while retrieving firebase token. ", err)
      );
  };

  const ToastifyNotification = ({ title, body, image }) => (
    <div className="push-notification">
      <img src={image} alt="" />
      <h2 className="push-notification-title">{title}</h2>
      <p className="push-notification-text">{body}</p>
    </div>
  );

  return (
    <div className="app">
      {showNotificationBanner && (
        <div className="notification-banner">
          <span>The app needs permission to</span>
          <a
            href="#"
            className="notification-banner-link"
            onClick={handleGetFirebaseToken}
          >
            enable push notifications.
          </a>
        </div>
      )}

      <img src={logo} className="app-logo" alt="logo" />

      <button className="btn-primary">Show toast notification</button>

      <ToastContainer hideProgressBar />
    </div>
  );
}
