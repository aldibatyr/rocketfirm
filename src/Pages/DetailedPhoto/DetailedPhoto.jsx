import React from "react";
import "./DetailedPhoto.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../StateManagement/AppState";
import UserAvatar from "../../Components/UserAvatar/UserAvatar";
import UserInfo from "../../Components/UserInfo/UserInfo";
import { FavoriteIcon, DownloadIcon } from "../../assets/svgs";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../../Components/Post/Post";
import { useWindowSize } from "react-use";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";

const DetailedPhoto = () => {
  const { width } = useWindowSize();
  const [loading, setLoading] = useState(true);
  const context = useContext(Context);
  let { id } = useParams();

  const getPhotoDetails = async () => {
    await context.getPhotoDetails(id);
    return;
  };

  const loadPage = async () => {
    await getPhotoDetails();
    setLoading(false);
  };
  useEffect(() => {
    loadPage();
  }, [id]);

  const [postLiked, setPostLiked] = useState(false);

  useEffect(() => {
    let likedImageObj = context.likedImages.find(
      (image) => image.id == context.selectedPost.id
    );
    if (likedImageObj !== undefined) {
      setPostLiked(true);
    }
  }, []);

  const makeDetailedPage = () => {
    return (
      <>
        <div
          id="top"
          className="outerContainer"
          style={{ position: "relative" }}
        >
          <div
            className="photoCoverSection"
            style={{
              backgroundImage: `url(${context.selectedPost.urls.regular})`,
            }}
          ></div>
          <div className="photoContent">
            <div className="photoControls">
              <div className="authorInfo">
                <UserAvatar user={context.selectedPost.user} size={50} />
                <div style={{ width: "10px" }}></div>
                <UserInfo
                  mobile={width < 768}
                  user={context.selectedPost.user}
                  alignment="left"
                  fontSize={24}
                />
              </div>
              <div className="likeAndDownload">
                <button
                  className="likeButton"
                  onClick={() => {
                    context.addPhotoToFavorites(context.selectedPost);
                    setPostLiked(true);
                  }}
                >
                  <FavoriteIcon size={25} color={postLiked ? "red" : "gray"} />
                </button>
                <div style={{ width: "10px" }}></div>
                <button className="downloadButton">
                  <DownloadIcon size={34} />
                  <span style={width < 768 ? { display: "none" } : {}}>
                    Download
                  </span>
                </button>
              </div>
            </div>
            <div className="detailedImageContainer">
              <img
                sizes="(max-width: 767px) 100vw, (max-width: 366px) 334px, (max-height: 676px) 334px, (min-aspect-ratio: 4000/6000) calc((calc(100vh - 175px)) * 0.666667), calc(100vw - 32px)"
                className="detailedImage"
                srcSet={
                  (context.selectedPost.urls.full,
                  context.selectedPost.urls.raw,
                  context.selectedPost.urls.regular,
                  context.selectedPost.urls.small,
                  context.selectedPost.urls.full)
                }
                alt={context.selectedPost.alt_description}
              />
            </div>
            <div className="similarTags">
              <h3>Похожие теги</h3>
              <div className="tagsContainer">
                {context.selectedPost.tags ? (
                  context.selectedPost.tags.map((tag, i) => {
                    return (
                      <button className="tagWrapper" key={i}>
                        <span>{tag.title}</span>
                      </button>
                    );
                  })
                ) : (
                  <span>Вечный ненаход</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="similarPhotosContainer">
          <div className="similarPhotosHeadline">
            <h2>Похожие фотографии</h2>
            <a to="#">Show more</a>
          </div>
          <div className="similarPhotos">
            {context.selectedPost.related_collections ? (
              context.selectedPost.related_collections.results.map((result) => {
                return (
                  <Post post={result.cover_photo} key={result.cover_photo.id} />
                );
              })
            ) : (
              <span>
                Видимо, фото настолько ункальное что мы ничего не нашли{" "}
                <span role="img" alt="sad emoji" aria-label="sad emoji face">
                  😟
                </span>
              </span>
            )}
          </div>
          <ScrollToTopButton />
        </div>
      </>
    );
  };

  return <div>{loading ? <span>loading</span> : makeDetailedPage()}</div>;
};

export default DetailedPhoto;
