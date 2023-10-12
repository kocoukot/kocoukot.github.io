const our_projects_section = function () {
  return new Swiper(".inwork__slider", {
    autoplay: {
      delay: 2e3,
    },
    loop: true,
    observer: false,
    speed: 1e3,

    breakpoints: {
      940: { slidesPerView: 2, spaceBetween: 100 },
      0: { slidesPerView: 1, spaceBetween: 60 },
    },
  });
};

export default our_projects_section;
