import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../../StateManagement/AppState";
import DetailedPhotoPresenter from "../../Components/DetailedPhotoPresenter/DetailedPhotoPresenter";
import SimilarPhotos from "../../Components/SimilarPhotos/SimilarPhotos";

import "./DetailedPhotoPage.scss";
import DetailedPhotoPagePlaceholder from "../../Components/DetailedPhotoPagePlaceholder/DetailedPhotoPagePlaceholder";

const DetailedPhotoPage = () => {
  const [loading, setLoading] = useState(true);

  const context = useContext(Context);
  let { id } = useParams();

  const getPhotoDetails = async () => {
    await context.getPhotoDetails(id);
    return;
  };

  const loadPage = async () => {
    await getPhotoDetails();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadPage();
  }, [id]);

  useEffect(() => {}, []);

  const makeDetailedPage = () => {
    return (
      <>
        <DetailedPhotoPresenter post={context.selectedPost} />
        <SimilarPhotos post={context.selectedPost} />
      </>
    );
  };

  return <div>{loading ? <DetailedPhotoPagePlaceholder /> : makeDetailedPage()}</div>;
};

export default DetailedPhotoPage;
