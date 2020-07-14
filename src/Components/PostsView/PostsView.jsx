import React, { useContext } from "react";
import { Context } from "../../StateManagement/AppState";
import Post from "../../Components/Post/Post";

import "./PostsView.scss";

const PostsView = ({ listStyle }) => {
  const context = useContext(Context);

  return (
    <div className={listStyle ? "imagesList" : "imagesGrid"}>
      {context.posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostsView;
