import gsap from "gsap";

export const minimizeHeader = () => {
  gsap.to(".App-header", { height: 80, duration: 0.8 });
  gsap.to(".header-content", { paddingTop: 25, duration: 0.8 }, "-=0.8");
};

export const expandHeader = (width) => {
  if (width < 768) {
    gsap.to(".App-header", { height: "100vh", duration: 0.8 });
    gsap.to(".header-content", { paddingTop: 50, duration: 0.8 }, "-=0.8");
  } else {
    gsap.to(".App-header", { height: 400, duration: 0.8 });
    gsap.to(".header-content", { paddingTop: 50, duration: 0.8 }, "-=0.8");
  }
};

export const loadInitialHeader = (width) => {
  if (width < 768) {
    gsap.to(".App-header", { height: 240, duration: 0.8 });
    gsap.to(".header-content", { paddingTop: 50, duration: 0.8 }, "-=0.8");
  } else {
    gsap.to(".App-header", { height: 400, duration: 0.8 });
    gsap.to(".header-content", { paddingTop: 50, duration: 0.8 }, "-=0.8");
  }
};
