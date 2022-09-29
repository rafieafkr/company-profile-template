import React from "react";
import Image from "next/image";

const Layanan = () => {
  return (
    <div className="bg-white dark:bg-slate-700">
      {/* Intro Section */}
      <div className="hero md:h-auto px-5 md:pt-20 md:pr-20 md:pl-20 md:pb-5">
        <div className="hero-content -mt-24 flex-col justfify-center lg:flex-row">
          <Image
            src="https://placeimg.com/500/300/arch"
            width={1000}
            height={700}
            className="max-w-lg rounded-lg"
            alt="preview"
          />
          <div className="">
            <h1 className="text-5xl font-bold">Lorem ipsum dolor</h1>
            <p className="py-6 font-light">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn text-black bg-amber-300  border-amber-300 hover:bg-amber-400 hover:border-amber-300 md:mt-4">
              Lorem Ipsum
            </button>
          </div>
        </div>
      </div>

      {/* Layanan */}
      <div className="pt-20 px-5" id="layanan">
        <div className="text-center mb-6">
          <h1 className="w-full text-5xl font-bold pb-3">Layanan</h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab
            nihil, delectus minima voluptatem eligendi.
          </p>
        </div>
        <div className="px-5 w-full md:grid md:grid-cols-2 md:grid-rows-1">
          <div className="grid md:gap-7 md:grid-cols-6 md:grid-rows-5 max-w-2xl">
            <div
              id="card"
              className="mb-5 md:mb-0 max-w-full px-7 py-6 shadow-2xl bg-white col-span-3 row-span-3 rounded-lg"
            >
              <div className="w-full h-16 mb-2 bg-amber-300 rounded-full flex justify-center">
                <div className="bg-white mt-1 w-14 h-14 rounded-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-10"
                  >
                    <path
                      fill="#000"
                      d="M17,11H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0,4H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,9h6a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2ZM21,3H7A1,1,0,0,0,6,4V7H3A1,1,0,0,0,2,8V18a3,3,0,0,0,3,3H18a4,4,0,0,0,4-4V4A1,1,0,0,0,21,3ZM6,18a1,1,0,0,1-2,0V9H6Zm14-1a2,2,0,0,1-2,2H7.82A3,3,0,0,0,8,18V5H20Zm-9-4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm0,4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z"
                    />
                  </svg>
                </div>
                <div className="ml-2 pt-5">
                  <h3 className="font-bold">Sertifikasi</h3>
                </div>
              </div>
              <div>
                <p className="text-slate-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente tempore laboriosam provident, illum sint quo
                  mollitia, doloribus similique exercitationem aperiam dolorum.
                  Perferendis..
                </p>
              </div>
            </div>
            <div
              id="card"
              className="mb-5 md:mb-0 max-w-full px-7 py-6 shadow-2xl bg-white col-span-3 row-span-2 rounded-lg"
            >
              <div className="w-full h-16 mb-2 bg-amber-300 rounded-full flex justify-center">
                <div className="bg-white mt-1 w-14 h-14 rounded-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-10"
                  >
                    <path
                      fill="#000000"
                      d="M21,14H20V7a3,3,0,0,0-3-3H7A3,3,0,0,0,4,7v7H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14ZM6,7A1,1,0,0,1,7,6H17a1,1,0,0,1,1,1v7H6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V16H20Z"
                      className="w-10"
                    />
                  </svg>
                </div>
                <div className="ml-2 h-min mt-3">
                  <h3 className="font-bold my-2">Digital Marketing</h3>
                </div>
              </div>
              <div>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore facere assumenda, laborum fuga doloribus inventore
                  incidunt a iusto ad accusamus?
                </p>
              </div>
            </div>
            <div
              id="card"
              className="mb-5 md:mb-0 max-w-full px-7 py-6 shadow-2xl bg-white col-span-3 row-span-3 rounded-lg"
            >
              <div className="w-full h-16 mb-2 bg-amber-300 rounded-full flex justify-center">
                <div className="bg-white mt-1 w-14 h-14 rounded-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-10"
                  >
                    <path
                      fill="#000000"
                      d="M13.3,12.22A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5ZM21.71,9.13a1,1,0,0,0-1.42,0l-2,2-.62-.63a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l1.34,1.34a1,1,0,0,0,1.41,0l2.67-2.67A1,1,0,0,0,21.71,9.13Z"
                    />
                  </svg>
                </div>
                <div className="ml-2 h-min mt-3">
                  <h3 className="font-bold my-2">Konsultasi</h3>
                </div>
              </div>
              <div>
                <p className="text-slate-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  tenetur, eum debitis voluptatem optio facilis. Consequatur
                  amet vitae, voluptatum nisi aliquid autem eius, impedit
                  repellendus ratione odio culpa molestias dolores!, fugit.
                </p>
              </div>
            </div>
            <div
              id="card"
              className="max-w-full px-7 py-6 shadow-2xl bg-white col-span-3 row-span-2 rounded-lg"
            >
              <div className="w-full h-16 mb-2 bg-amber-300 rounded-full flex justify-center">
                <div className="bg-white mt-1 w-14 h-14 rounded-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-10"
                  >
                    <path
                      fill="#000000"
                      d="M21.17,2.06A13.1,13.1,0,0,0,19,1.87a12.94,12.94,0,0,0-7,2.05,12.94,12.94,0,0,0-7-2,13.1,13.1,0,0,0-2.17.19,1,1,0,0,0-.83,1v12a1,1,0,0,0,1.17,1,10.9,10.9,0,0,1,8.25,1.91l.12.07.11,0a.91.91,0,0,0,.7,0l.11,0,.12-.07A10.9,10.9,0,0,1,20.83,16a1,1,0,0,0,1.17-1v-12A1,1,0,0,0,21.17,2.06ZM11,15.35a12.87,12.87,0,0,0-6-1.48c-.33,0-.66,0-1,0v-10a8.69,8.69,0,0,1,1,0,10.86,10.86,0,0,1,6,1.8Zm9-1.44c-.34,0-.67,0-1,0a12.87,12.87,0,0,0-6,1.48V5.67a10.86,10.86,0,0,1,6-1.8,8.69,8.69,0,0,1,1,0Zm1.17,4.15A13.1,13.1,0,0,0,19,17.87a12.94,12.94,0,0,0-7,2.05,12.94,12.94,0,0,0-7-2.05,13.1,13.1,0,0,0-2.17.19A1,1,0,0,0,2,19.21,1,1,0,0,0,3.17,20a10.9,10.9,0,0,1,8.25,1.91,1,1,0,0,0,1.16,0A10.9,10.9,0,0,1,20.83,20,1,1,0,0,0,22,19.21,1,1,0,0,0,21.17,18.06Z"
                    />
                  </svg>
                </div>
                <div className="ml-2 h-min mt-3">
                  <h3 className="font-bold my-2">Pelatihan</h3>
                </div>
              </div>
              <div>
                <p className="text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  minus excepturi aperiam natus id ducimus fuga vitae.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-full md:flex md:justify-end hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 400 300"
              width="580"
              height="570"
              className="illustration styles_illustrationTablet__1DWOa"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="197.18"
                  y1="255.33"
                  x2="185.59"
                  y2="266.92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="gray"></stop>
                  <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="349.32"
                  y1="177.17"
                  x2="339.92"
                  y2="186.57"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
              </defs>
              <title>Information Flow Ilustration</title>
              <g style={{ isolation: "isolate" }}>
                <g id="Layer_2" data-name="Layer 2">
                  <path
                    d="M194.28,291.14,14.56,184.93C8.84,181.71,3.93,176.44,9.51,173L189.88,69c2.71-1.68,6.82-2.78,9.57-1.18L388.11,177.34c5.72,3.32,6.75,12.6,1,15.93L218,291A23.9,23.9,0,0,1,194.28,291.14Z"
                    fill="#f78f38"
                  ></path>
                  <path
                    d="M192.5,251.31c-7.68,4.48-13.18,7.49-25,14.24,8.95,5.44,15.88,10.44,16.89,11l27.11-16.11C209.44,259.38,202.07,256,192.5,251.31Z"
                    fill="url(#linear-gradient)"
                    style={{ mixBlendMode: "multiply" }}
                  ></path>
                  <path
                    d="M345.53,173.9c-6.24,3.64-10.7,6.08-20.29,11.56,7.26,4.41,12.89,8.47,13.71,9l22-13.08C359.27,180.45,353.3,177.74,345.53,173.9Z"
                    fill="url(#linear-gradient-2)"
                    style={{ mixBlendMode: "multiply" }}
                  ></path>
                  <path
                    d="M353.16,73.77V98.44a2.16,2.16,0,0,1-3.24,1.87L324.58,85.68a2.16,2.16,0,0,1-1.08-1.87V59.14a2.16,2.16,0,0,1,3.24-1.87L352.08,71.9A2.16,2.16,0,0,1,353.16,73.77Z"
                    fill="#FCD34D"
                  ></path>
                  <polyline
                    points="340.66 163.96 340.66 177.71 362.89 177.71 362.89 163.96"
                    fill="#FCD34D"
                  ></polyline>
                  <ellipse
                    cx="351.78"
                    cy="163.96"
                    rx="11.12"
                    ry="5.47"
                    fill="#311f1d"
                  ></ellipse>
                  <ellipse
                    cx="351.78"
                    cy="178.24"
                    rx="11.12"
                    ry="5.47"
                    fill="#FCD34D"
                  ></ellipse>
                  <path
                    d="M364.22,132c-2.35-1-5.6-4.15-8.44-4.05a33.23,33.23,0,0,0-1.72,8.44,76.55,76.55,0,0,0-.32,14.08q.1,1.57.26,3.13a2.49,2.49,0,0,0,.25.88q0,5.44,0,10.88a.35.35,0,0,0,.69,0q0-5.23,0-10.47a15.43,15.43,0,0,0,3.18-1.47,10.83,10.83,0,0,0,4.48-5.63c1.8-5,.66-10.57,2.36-15.52C364.72,132.2,364.47,132.11,364.22,132Z"
                    fill="#311f1d"
                  ></path>
                  <path
                    d="M359.42,123.82a8.71,8.71,0,0,0-3.18,3.25,5.45,5.45,0,0,0-.5,1l-.1.21h0a14.53,14.53,0,0,0-.53,1.72,2.15,2.15,0,0,1,1.18-.93,2.94,2.94,0,0,1,1.86-.17,7.77,7.77,0,0,1,1.7.91c.8.48,1.56,1,2.34,1.52,3.68,2.34,8.59,2.58,11.43-.83,0-.13.07-.27.1-.41C374.14,127.72,367.56,119.09,359.42,123.82Z"
                    fill="#f78f38"
                  ></path>
                  <path
                    d="M372,131.91l.46-.31a.31.31,0,0,0-.09-.26c-2.23-2.29-4.62-4.53-7.66-5.66a13.13,13.13,0,0,0-6.84-.67c-.25.29-.47.59-.7.89a11.88,11.88,0,0,1,7.87.65,22,22,0,0,1,6.84,5.27A.33.33,0,0,0,372,131.91Z"
                    fill="#311f1d"
                  ></path>
                  <path
                    d="M334.67,136.89a9.28,9.28,0,0,0-5,8.91c.26,6.56,11.07.16,13.94-5.38s3.32,2.36,3.32,2.36"
                    fill="#311f1d"
                  ></path>
                  <path
                    d="M344.4,134.6a19.57,19.57,0,0,0-6,.83,14.56,14.56,0,0,0-3.73,1.46,12,12,0,0,0,2.16,1.15,6.57,6.57,0,0,1,3.49,2.5,5,5,0,0,1,.42,1c.66,2.16.09,4.78,1,6.95s2.7,4.09,5.25,4.24c3,.19,4.44-2.74,5-5.27s1.43-6,.46-8.59C351.35,135.83,347.28,134.74,344.4,134.6Z"
                    fill="#f78f38"
                  ></path>
                  <path
                    d="M348.41,144.84c-1.28-4.14-4-8.05-8-9.89h-.15l-.19.06-.72.19c4.62,1.71,7.52,6.27,8.71,10.93,1.51,6,1,12.4,1,18.49a.32.32,0,0,0,.64,0C349.75,158.11,350.35,151.14,348.41,144.84Z"
                    fill="#311f1d"
                  ></path>
                  <polygon
                    points="70.33 194.47 83.89 186.85 83.89 173.57 70.53 181.29 70.33 194.47"
                    fill="#FCD34D"
                  ></polygon>
                  <polygon
                    points="59.12 174.51 59.12 187.88 70.33 194.47 70.53 181.29 59.12 174.51"
                    fill="#FCD34D"
                  ></polygon>
                  <polygon
                    points="59.12 174.51 70.53 181.29 83.89 173.57 72.2 166.8 59.12 174.51"
                    fill="#FCD34D"
                  ></polygon>
                  <polygon
                    points="70.33 194.47 83.89 186.85 83.89 173.57 70.53 181.29 70.33 194.47"
                    opacity="0.29"
                  ></polygon>
                  <polygon
                    points="59.12 174.51 59.12 187.88 70.33 194.47 70.53 181.29 59.12 174.51"
                    opacity="0.07"
                  ></polygon>
                  <polygon
                    points="59.12 174.51 70.53 181.29 83.89 173.57 72.2 166.8 59.12 174.51"
                    fill="#FCD34D"
                  ></polygon>
                  <path
                    d="M90.82,134.4l37-20.3a4.53,4.53,0,0,0,2.35-4V42.33a4.53,4.53,0,0,0-6.79-3.92l-37,21.36a4.53,4.53,0,0,0-2.26,3.92v66.75A4.53,4.53,0,0,0,90.82,134.4Z"
                    fill="#FCD34D"
                  ></path>
                  <path
                    d="M93.06,87.17V103.4c0,4.72,7.33,4.72,7.33,0V87.17C100.39,82.46,93.06,82.45,93.06,87.17Z"
                    fill="#56403d"
                  ></path>
                  <path
                    d="M103,70.52V96.71c0,4.72,7.33,4.72,7.33,0V70.52C110.35,65.81,103,65.8,103,70.52Z"
                    fill="#ffa197"
                  ></path>
                  <path
                    d="M114.83,51.54V91.75c0,4.72,7.33,4.72,7.33,0V51.54C122.15,46.83,114.83,46.82,114.83,51.54Z"
                    fill="#f2f2f2"
                  ></path>
                  <path
                    d="M105.71,108l-9.06,4.76c-1.29.68-.15,2.62,1.14,1.95l9.06-4.76C108.13,109.23,107,107.28,105.71,108Z"
                    fill="#f2f2f2"
                  ></path>
                  <path
                    d="M121.59,106.76Q109,113.54,96.05,119.82c-1.3.63-.16,2.58,1.14,1.95q12.9-6.27,25.54-13.05C124,108,122.87,106.08,121.59,106.76Z"
                    fill="#f2f2f2"
                  ></path>
                  <path
                    d="M293.81,71.82,194.62,15.69a5.23,5.23,0,0,0-7.81,4.55v61a5.23,5.23,0,0,0,2.66,4.55l99.19,56.13a5.23,5.23,0,0,0,7.81-4.55v-61A5.23,5.23,0,0,0,293.81,71.82Z"
                    fill="#fbb03b"
                  ></path>
                  <path
                    d="M290.56,141.67l-66.26-37.5L192,85.87c-2.58-1.46-3.75-2.82-4-5.92-.54-6.07,0-12.43,0-18.52V35.79c0-5.28-.71-11.12,0-16.36.86-6.32,5.56-3.09,8.62-1.36l14.1,8,78.65,44.51c2.49,1.41,5.42,2.33,6,5.54.86,4.52,0,10,0,14.63V136.1c0,2.92-.14,7.42-5.06,5.46-1.34-.54-1.93,1.64-.6,2.17,6.42,2.57,7.9-3.56,7.9-8.32V85.89c0-3.49,1.16-9.7-.83-12.9-1.47-2.37-5.22-3.74-7.52-5l-17.32-9.8L224.5,31.3c-10-5.66-19.89-12.07-30.23-17.11-4.46-2.17-8.38.4-8.58,5.24-.26,6,0,12.14,0,18.17V65.53c0,5.25-.49,10.77,0,16,.35,3.71,2.74,4.92,5.59,6.54l14.43,8.17,81.88,46.34,1.84,1A1.13,1.13,0,0,0,290.56,141.67Z"
                    fill="#2e3192"
                  ></path>
                  <path
                    d="M200.44,78.79s7.32-28,20.19-20.71,6.81,36.59,15.9,36.08S256,75,263.77,78.79s7.57,37.74,17.41,43.07"
                    fill="#fff"
                  ></path>
                  <polyline
                    points="201.27 41.88 211.81 74.3 231.17 61.39 239.43 89.36 254.23 81.78 266.27 105.17 283.76 104.68"
                    fill="none"
                    stroke="#42210b"
                    strokeMiterlimit="10"
                    strokeWidth="0.75"
                  ></polyline>
                  <ellipse
                    cx="283.76"
                    cy="104.68"
                    rx="2.23"
                    ry="3.53"
                    transform="translate(-10.67 35.48) rotate(-7.02)"
                    fill="#89562c"
                  ></ellipse>
                  <ellipse
                    cx="201.27"
                    cy="41.88"
                    rx="2.23"
                    ry="3.53"
                    transform="translate(-3.61 24.92) rotate(-7.02)"
                    fill="#89562c"
                  ></ellipse>
                  <path
                    d="M107.3,96.86c12.49-16.82,31.76-28.28,52.39-32,20.42-3.64,43.74,1.24,56.57,17.54,3.13,4,5.62,8.82,5.19,13.85-.41,4.84-3.4,9-6.18,13-9,12.86-17,27.5-16.4,43.16s13.09,31.73,28.75,31c11.66-.57,20.84-9.57,30.83-15.61,10.66-6.45,23.67-9.77,35.78-6.81S317,174,318.5,186.39c1.43,11.71-5.12,23-13.13,31.66-18.86,20.4-46.32,31.22-73.87,34.84-16.34,2.15-34.88,1.23-46.49-10.45-16.81-16.92-10.16-46.09-21.07-67.3-5.82-11.32-16.44-19.63-28.09-24.77-18.07-8-41.56-7.91-55.27,6.32-13,13.52-12.39,37.44.63,51s36,15.39,51.66,5"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeDasharray="4 4"
                  ></path>
                  <polyline
                    points="226.86 138.23 224.5 127.24 239.57 124.34 244.04 147.01 228.35 150.07"
                    fill="#FCD34D"
                  ></polyline>
                  <path
                    d="M221.86,145.93s.77-4.64,1.08-5.9,2.34-3.48,3.32-4.31c1.16-1,3.95-2.6,4-1.58s-2.82,4-2.82,4,.95,4.74.32,7a10.52,10.52,0,0,1-1.78,3.66"
                    fill="#ffac99"
                  ></path>
                  <path
                    d="M220.62,145.6c-2.24,2.62-6.06,8.21-6.06,8.21a90.74,90.74,0,0,1-5.62-12.54c-1.9-5.75-6.51-5.82-6.51-5.82l3.18,25.79A8.54,8.54,0,0,0,215.86,164c5.45-2.06,10.59-11.36,11.59-15.64A24,24,0,0,0,220.62,145.6Z"
                    fill="#FCD34D"
                  ></path>
                  <polyline
                    points="206.72 211.41 202.91 248.78 194.38 243.24 194.16 200.07"
                    fill="#ffac99"
                  ></polyline>
                  <path
                    d="M211.43,260.07c-.84-1.56-2.61-2.76-3.93-3.89a9.37,9.37,0,0,1-3.27-4.37c-.33-.92-.6-12.82-.32-12.8l-.18,0c-2.84,2.17-6.38,3.11-9.71,1.84-.44,6.17-.86,13.74-.51,14.23.59.83,3.2,1.91,3.2,1.91l-.05-7.08,1.05,6.81a4.26,4.26,0,0,0,1.09,1.45,8.55,8.55,0,0,0,2.53,1.27,24.28,24.28,0,0,0,5.27,1.81c1.29.23,4.31.6,4.91-1Z"
                    fill="#311f1d"
                  ></path>
                  <polyline
                    points="196.07 213.92 192.26 251.29 183.71 242.5 183.51 202.58"
                    fill="#ffac99"
                  ></polyline>
                  <path
                    d="M193.81,242.53q.61-7,1-14.09a29.64,29.64,0,0,0,11.55-4.8c2.83-12.34,1.32-49.52,1.32-49.52l-24.11,2.08c-5.88,17.15-.89,51.49-.89,51.49a24.37,24.37,0,0,0,10.95.95q-.4,6.5-.95,13a10.23,10.23,0,0,1-9.25.36c-.48,6.35-1,15.07-.61,15.6.59.83,3.2,1.91,3.2,1.91L186,252.4l1.05,6.81a4.26,4.26,0,0,0,1.09,1.45,8.55,8.55,0,0,0,2.53,1.27,24.28,24.28,0,0,0,5.27,1.81c1.29.23,4.31.6,4.91-1l-.07-.14c-.84-1.56-2.61-2.76-3.93-3.89a9.37,9.37,0,0,1-3.27-4.37,103.4,103.4,0,0,1-.43-11.24A.61.61,0,0,0,193.81,242.53Z"
                    fill="#311f1d"
                  ></path>
                  <path
                    d="M207.75,150.9c-.28-7.47-.56-18.44-11-16a1.27,1.27,0,0,1-.67,0,21.87,21.87,0,0,0-8.34,6.21c-5.07,6.44-4.11,35.08-4.11,35.08a28.14,28.14,0,0,0,24.11-2.08C207.83,166.37,208,158.63,207.75,150.9Z"
                    fill="#FCD34D"
                  ></path>
                  <path
                    d="M202.18,123.81s4.62,12.47-.41,15c-4.22,2.1-8.07-2.18-9.15-5-1.27-3.35.77-8,3.09-10.66C197.78,120.74,201,120.44,202.18,123.81Z"
                    fill="#ffac99"
                  ></path>
                  <path
                    d="M198.53,118.93c-3.75-.32-7.22.72-9.35,3.82-2.37,3.46-4.12,8.3-3.78,12.55.18,2.25,1.32,3.53,3.13,4.73a6.72,6.72,0,0,0,1.36.59c1.7.51,4.26,1.12,5.84,0-1.14-3.3-1.07-7.75.57-9.77,0,0-.24-2.55.25-2.18s-.12,2.26,1.32,2.18,5.36-.53,7.24-3.55C206.29,125.47,203.53,119.36,198.53,118.93Z"
                    fill="#311f1d"
                  ></path>
                  <path
                    d="M195.78,133.37s-.24-2.13-1.53-1.7-.51,3.22,1.1,3.9"
                    fill="#ffac99"
                  ></path>
                  <path
                    d="M207,150.43s1.45,13.24.76,23.68c0,0-1-11.47-1-12.92S207,150.43,207,150.43Z"
                    fill="#311f1d"
                    opacity="0.25"
                  ></path>
                  <path
                    d="M183.51,168.69v4.77s12.43,2.36,23.77-2.39Z"
                    fill="#311f1d"
                    opacity="0.25"
                  ></path>
                  <path
                    d="M225,159.56c-1.39.14-6.82,1.38-8.84,1.84a24.82,24.82,0,0,0-8.71,1.88c-3,1.28-3.48,1.6-3.59,4.76a.66.66,0,0,0,.83.62,22.78,22.78,0,0,1,10.09-.15.63.63,0,0,0,.37,0A13.42,13.42,0,0,0,222,166.4c2.64-1.72.6-4.1.6-4.1s5.86-1.26,6.23-2.52S226.68,159.38,225,159.56Z"
                    fill="#ffac99"
                  ></path>
                  <path
                    d="M212.37,159.68l-16.07,2.58L188.53,140a26.85,26.85,0,0,0-5,6.32c-2.31,4-3.22,13.7-2.76,15.92s.55,9.73,11.5,10.52c7.36.53,15.74-1.73,20.44-3.27A10.42,10.42,0,0,1,212.37,159.68Z"
                    fill="#FCD34D"
                  ></path>
                  <path
                    d="M193.81,153.29s-.7,9.37,4.69,9S213,159.59,213,159.59s-12.79,5-16.89,4.22S193.81,153.29,193.81,153.29Z"
                    fill="#311f1d"
                    opacity="0.25"
                  ></path>
                  <path
                    d="M227.46,166.79v36a3.15,3.15,0,0,0,4.73,2.73l36.94-21.33a3.15,3.15,0,0,0,1.58-2.73v-36a3.15,3.15,0,0,0-4.73-2.73L229,164.06A3.15,3.15,0,0,0,227.46,166.79Z"
                    fill="#FCD34D"
                  ></path>
                  <polygon
                    points="76.01 153.88 84 153.54 83.34 160.47 76.01 153.88"
                    fill="#fff"
                  ></polygon>
                  <polygon
                    points="143.72 150.26 147.02 156.34 140.36 158.36 143.72 150.26"
                    fill="#fff"
                  ></polygon>
                  <polygon
                    points="177.9 220.87 175.61 227.39 169.64 223.82 177.9 220.87"
                    fill="#fff"
                  ></polygon>
                  <polygon
                    points="244.5 246.32 250.81 249.16 246.74 254.8 244.5 246.32"
                    fill="#fff"
                  ></polygon>
                  <polygon
                    points="293.01 224.65 299.8 223.32 299.74 230.28 293.01 224.65"
                    fill="#fff"
                  ></polygon>
                  <polygon
                    points="306.64 171.71 303.93 165.35 310.74 163.96 306.64 171.71"
                    fill="#fff"
                  ></polygon>
                  <polygon
                    points="210.71 108.75 217.06 106.03 218.46 112.84 210.71 108.75"
                    fill="#fff"
                  ></polygon>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
