import React from "react";
import "./UserAvatar.scss";

const UserAvatar = ({ user, size }) => {
  return (
    <img
      className="userAvatar"
      style={{ width: size, height: size }}
      src={user.profile_image.medium}
      alt={user.name}
    />
  );
};

export default UserAvatar;
