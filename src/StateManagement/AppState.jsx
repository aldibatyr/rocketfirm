import React, { createContext, useState, useEffect } from "react";
import Unsplash from "unsplash-js";
import { keys } from "../keys";

export const Context = createContext();

export const unsplash = new Unsplash({ accessKey: keys.ACCESS_KEY });

const AppStateProvider = ({ children }) => {
  const [searchQueries, setSearchQueries] = useState(
    JSON.parse(window.localStorage.getItem("searchQueries")) || []
  );
  const [likedImages, setLikedImages] = useState(
    JSON.parse(window.localStorage.getItem("likedImages")) || []
  );
  const [collections, setCollections] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(2);
  const [selectedPost, setSelectedPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentSearchQuery, setCurrentSearchQuery] = useState("");
  const [additionalPosts, setAdditionalPosts] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const imagesData = await unsplash.photos.listPhotos(1, 25);
    const json = await imagesData.json();
    setPosts(json);
    setAdditionalPosts([]);
    setLoading(false);
  };

  const fetchAdditionalPosts = async () => {
    const additionalImagesData = await unsplash.photos.listPhotos(page, 25);
    const json = await additionalImagesData.json();
    setAdditionalPosts([...additionalPosts, json]);
    setPage((page) => page + 1);
  };

  const resetAdditionalPosts = () => {
    setAdditionalPosts([]);
  };
  const fetchCollections = async () => {
    const collectionsData = await unsplash.collections.listCollections(
      1,
      10,
      "popular"
    );
    const collectionsJson = await collectionsData.json();
    setCollections(collectionsJson);
  };

  const fetchPhotosFromSearchRequest = async (searchQuery) => {
    setLoading(true);
    setCurrentSearchQuery(searchQuery);
    const imagesData = await unsplash.search.photos(searchQuery, 1, 25);
    const imagesJson = await imagesData.json();
    setPosts(imagesJson.results);
    setLoading(false);
    return;
  };

  const fetchAdditionalFromSearchRequest = async () => {
    setLoading(true);
    const imagesData = await unsplash.search.photos(
      currentSearchQuery,
      page,
      25
    );
    const imagesJson = await imagesData.json();
    setAdditionalPosts([...additionalPosts, imagesJson.results]);
    setPage((page) => page + 1);
  };

  const getCollectionPhotos = async (collectionId) => {
    const photosData = await unsplash.collections.getCollectionPhotos(
      collectionId,
      1,
      24
    );
    const photosJson = await photosData.json();
    setPosts(photosJson);
  };

  const addPhotoToFavorites = (post) => {
    setLikedImages([...likedImages, post]);
    window.localStorage.setItem(
      "likedImages",
      JSON.stringify([...likedImages, post])
    );
  };

  const getPhotoDetails = async (id) => {
    const photoDetailsData = await unsplash.photos.getPhoto(id);
    const photoDetailsJson = await photoDetailsData.json();
    console.log(photoDetailsJson);
    setSelectedPost(photoDetailsJson);
  };

  const resetPageCount = () => {
    setPage(2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchCollections();
  }, []);


  return (
    <div>
      <Context.Provider
        value={{
          searchQueries,
          setSearchQueries,
          currentSearchQuery,
          likedImages,
          setLikedImages,
          collections,
          setCollections,
          posts,
          setPosts,
          fetchData,
          fetchCollections,
          getCollectionPhotos,
          addPhotoToFavorites,
          getPhotoDetails,
          selectedPost,
          fetchPhotosFromSearchRequest,
          loading,
          additionalPosts,
          fetchAdditionalPosts,
          resetPageCount,
          resetAdditionalPosts,
          fetchAdditionalFromSearchRequest,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export default AppStateProvider;
