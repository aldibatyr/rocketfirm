import React, { useContext } from "react";

import Post from "../../Components/Post/Post";

import "./PostsView.scss";

const PostsView = ({ listStyle, posts }) => {
  

  const makeGridView = () => {
    let postsArrays = [];
    let firstRow = posts.slice(0, 8);
    postsArrays.push(firstRow);
    let secondRow = posts.slice(9, 17);
    postsArrays.push(secondRow);
    let thirdRow = posts.slice(18, 25);
    postsArrays.push(thirdRow);
    return postsArrays.map((array, i) => {
      return (
        <div className="postsRow" key={i}>
          {array.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </div>
      );
    });
  };
  
  return (
    <div className={listStyle ? "imagesList" : "imagesGrid"}>
      {makeGridView()}
    </div>
  );
};

export default PostsView;
