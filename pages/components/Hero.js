import React from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <div
        className="pahlawan min-h-screen"
        style={{ backgroundImage: "url('images/4214558.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="pahlawan-isi text-left text-neutral-content">
          <div className="max-w-xl text-white md:text-2xl">
            <p className="mb-2 text-left">Together We Strong</p>
            <p className="mb-3 text-left text-6xl font-bold">Hello World</p>
            <p className="mb-2 text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eum
              delectus blanditiis facere atque itaque!.
            </p>
          </div>
        </div>
      </div>
      <div
        className="elementor-shape elementor-shape-bottom -mt-9 md:-mt-20 fill-white"
        data-negative="true"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="h-10 md:h-20 w-full"
        >
          {" "}
          <path
            className="elementor-shape-fill fill-white"
            d="M737.9,94.7L0,0v100h1000V0L737.9,94.7z"
          ></path>{" "}
        </svg>
      </div>
    </div>
  );
};

export default Hero;
