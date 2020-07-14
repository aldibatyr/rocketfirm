import React, { useContext, useEffect, useState } from "react";
import { Context } from "../StateManagement/AppState";
import { keys } from "../keys";
import Unsplash from "unsplash-js";

export const unsplash = new Unsplash({ accessKey: keys.ACCESS_KEY });

const Networking = ({ children }) => {
  const context = useContext(Context);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setloading(true);
    const imagesData = await unsplash.photos.listPhotos(page, 25);
    const json = await imagesData.json();
    context.setPosts(json);
    setloading(false);
  };
  const fetchCollections = async () => {
    const collectionsData = await unsplash.collections.listCollections(
      1,
      10,
      "popular"
    );
    const collectionsJson = await collectionsData.json();
    context.setCollections(collectionsJson);
  };
  useEffect(() => {
    fetchCollections();
  }, []);
  
  useEffect(() => {
    fetchData();
  }, [page]);

  return <>{loading ? <div className="loadingDiv"></div> : children}</>;
};

export default Networking;
