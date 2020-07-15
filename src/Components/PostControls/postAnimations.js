import gsap from "gsap";

export const handlePanZoom = () => {
  gsap.to(".hovered .panIcon", { scale: 1.1 });
  gsap.to(".hovered .favoriteIcon", { opacity: 0.3 });
  gsap.to(".hovered .downloadIcon", { opacity: 0.3 });
};

export const handlePanNormalize = () => {
  gsap.to(".hovered .panIcon", { scale: 1 });
  gsap.to(".hovered .favoriteIcon", { opacity: 1 });
  gsap.to(".hovered .downloadIcon", { opacity: 1 });
};
export const handleFavoriteZoom = () => {
  gsap.to(".hovered .favoriteIcon", { scale: 1.1 });
  gsap.to(".hovered .panIcon", { opacity: 0.3 });
  gsap.to(".hovered .downloadIcon", { opacity: 0.3 });
};

export const handleFavoriteNormalize = () => {
  gsap.to(".hovered .favoriteIcon", { scale: 1 });
  gsap.to(".hovered .panIcon", { opacity: 1 });
  gsap.to(".hovered .downloadIcon", { opacity: 1 });
};
export const handleDownloadZoom = () => {
  gsap.to(".hovered .downloadIcon", { scale: 1.1 });
  gsap.to(".hovered .panIcon", { opacity: 0.3 });
  gsap.to(".hovered .favoriteIcon", { opacity: 0.3 });
};

export const handleDownloadNormalize = () => {
  gsap.to(".hovered .downloadIcon", { scale: 1 });
  gsap.to(".hovered .panIcon", { opacity: 1 });
  gsap.to(".hovered .favoriteIcon", { opacity: 1 });
};
