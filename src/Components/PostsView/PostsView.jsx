import React from "react";

import Post from "../../Components/Post/Post";

import "./PostsView.scss";

const PostsView = ({ listStyle, posts }) => {
  const makeGridView = () => {
    if (posts === []) {
      return (
        <h3>
          Слишком уникальный запрос. У нас нет таких фото{" "}
          <span role="img" aria-label="emoji sad face">
            😞
          </span>
        </h3>
      );
    } else {
      let postsArrays = [];
      let firstRow = posts.slice(0, Math.floor(posts.length / 3));
      postsArrays.push(firstRow);
      let secondRow = posts.slice(
        Math.floor(posts.length / 3),
        Math.floor(posts.length / 3) * 2
      );
      postsArrays.push(secondRow);
      let thirdRow = posts.slice(
        Math.floor(posts.length / 3) * 2,
        posts.length
      );
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
    }
  };

  return (
    <div className={listStyle ? "imagesList" : "imagesGrid"}>
      {makeGridView()}
    </div>
  );
};

export default PostsView;
