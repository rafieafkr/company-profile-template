import React from "react";
import Image from "next/image";

const Layanan = () => {
  return (
    <div>
      {/* Intro Section */}
      <div className="hero p-5 md:p-20">
        <div className="hero-content -mt-24 flex-col justfify-center lg:flex-row">
          <Image
            src="https://placeimg.com/500/300/arch"
            width={1000}
            height={700}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="preview"
          />
          <div className="mt-10">
            <h1 className="text-5xl font-bold">Lorem ipsum dolor</h1>
            <p className="py-6 border">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Lorem Ipsum</button>
          </div>
        </div>
      </div>

      {/* Layanan */}
      <div className="mb-10">
        <div className="w-full text-5xl font-bold text-center py-5">
          <h1>Layanan</h1>
        </div>
        <div className="px-5 w-full">
          <div className="grid gap-7 grid-cols-6 grid-rows-5 max-w-2xl">
            <div
              id="card"
              className="max-w-full px-7 py-6 shadow-lg shadow-slate-400 bg-white col-span-3 row-span-3 rounded"
            >
              <div className="w-full h-16 pl-7 mb-2 bg-amber-300 rounded-full flex">
                <div className="bg-white mt-1 w-14 h-14 rounded-full flex justify-center ml-5">
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
                <div className="ml-2 h-min mt-5">
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
              className="max-w-full px-7 py-6 shadow-lg shadow-slate-400 bg-white rounded col-span-3 row-span-2"
            >
              <div className="w-full h-16 pl-7 mb-2 bg-amber-300 rounded-full flex">
                <div className="bg-white mt-1 w-14 h-14 rounded-full flex justify-center ml-5">
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
              className="max-w-full px-7 py-6 shadow-lg shadow-slate-400 col-span-3 row-span-3"
            >
              <div className="w-full h-16 pl-11 mb-2 bg-amber-300 rounded-full flex">
                <div className="bg-white mt-1 w-14 h-14 rounded-full flex justify-center ml-5">
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
              className="max-w-full px-7 py-6 shadow-lg shadow-slate-400 col-span-3 row-span-2"
            >
              <div className="w-full h-16 pl-12 mb-2 bg-amber-300 rounded-full flex">
                <div className="bg-white mt-1 w-14 h-14 rounded-full flex justify-center ml-5">
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
        </div>
      </div>
    </div>
  );
};

export default Layanan;
