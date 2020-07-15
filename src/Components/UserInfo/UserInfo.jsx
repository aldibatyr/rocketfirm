import React from "react";
import "./UserInfo.scss";

const UserInfo = ({ user, alignment, fontSize }) => {
  return (
    <div className="userInfo" style={{textAlign: alignment}}>
      <p style={{fontSize: fontSize}} className="authorName">{user.name}</p>
      <a href={user.links.html}>@{user.username}</a>
    </div>
  );
};

export default UserInfo;
