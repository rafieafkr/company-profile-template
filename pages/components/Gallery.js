import React from "react";

const Gallery = () => {
  return (
    <div className=" bg-white dark:bg-slate-700" id="gallery">
      <div className="text-center mb-6">
        <h1 className="w-full text-5xl font-bold pb-3">Gallery Perusahaan</h1>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab
          nihil, delectus minima voluptatem eligendi.
        </p>
      </div>

      <div className="carousel w-80 h-60 md:w-2/3 md:h-60 m-auto pt-4">
        <div id="slide1" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://placeimg.com/800/200/arch"
            className="w-full rounded-lg"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle opacity-70">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle opacity-70">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://placeimg.com/800/200/arch"
            className="w-full rounded-lg"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle opacity-70">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle opacity-70">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://placeimg.com/800/200/arch"
            className="w-full rounded-lg"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle opacity-70">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle opacity-70">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://placeimg.com/800/200/arch"
            className="w-full rounded-lg"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle opacity-70">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle opacity-70">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
