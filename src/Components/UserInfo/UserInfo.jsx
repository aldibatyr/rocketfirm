import React from "react";

import "./UserInfo.scss";

const UserInfo = ({ user, alignment, fontSize, mobile }) => {
  return (
    <div className="userInfo" style={{ textAlign: alignment }}>
      <p
        style={{ fontSize: fontSize, color: mobile ? "black" : "white" }}
        className="authorName"
      >
        {user.name}
      </p>
      <a style={{ color: mobile ? "gray" : "white" }} href={user.links.html}>
        @{user.username}
      </a>
    </div>
  );
};

export default UserInfo;
