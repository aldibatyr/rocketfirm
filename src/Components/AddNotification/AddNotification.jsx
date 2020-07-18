import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/checkmarkAnimation.json";
import "./AddNotification.scss";

const AddNotification = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAscpectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="notificationContainer">
      <Lottie
        options={defaultOptions}
        height={50}
        width={50}
        isStopped={true}
      />
      <span>Добавлено в "Избранное"</span>
    </div>
  );
};

export default AddNotification;
