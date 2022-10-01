/* eslint-disable @next/next/no-img-element */
import React from "react";

const Berita = () => {
  return (
    <div className="py-20 px-5 bg-white dark:bg-slate-700" id="berita">
      <div className="text-center mb-6">
        <h1 className="w-full text-5xl font-bold pb-3">Berita Acara</h1>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab
          nihil, delectus minima voluptatem eligendi.
        </p>
      </div>
      <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-2">
        <div className="w-full p-2">
          <div className="card lg:card-side bg-white shadow-xl">
            <img
              src="https://placeimg.com/300/250/arch"
              alt="Album"
              className="rounded-md mt-6 lg:mt-0 lg:rounded-none"
            />
            <div className="card-body">
              <h2 className="card-title">Lorem</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                labore asperiores quibusdam quas. Quo, porro!
              </p>
              <div className="card-actions justify-end">
                <button className="btn text-black bg-amber-300  border-amber-300 hover:bg-amber-400 hover:border-amber-300">
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-2">
          <div className="card lg:card-side bg-white shadow-xl">
            <img
              src="https://placeimg.com/300/250/arch"
              alt="Album"
              className="rounded-md mt-6 lg:mt-0 lg:rounded-none"
            />
            <div className="card-body">
              <h2 className="card-title">Lorem</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                labore asperiores quibusdam quas. Quo, porro!
              </p>
              <div className="card-actions justify-end">
                <button className="btn text-black bg-amber-300  border-amber-300 hover:bg-amber-400 hover:border-amber-300">
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-2">
          <div className="card lg:card-side bg-white shadow-xl">
            <img
              src="https://placeimg.com/300/250/arch"
              alt="Album"
              className="rounded-md mt-6 lg:mt-0 lg:rounded-none"
            />
            <div className="card-body">
              <h2 className="card-title">Lorem</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                labore asperiores quibusdam quas. Quo, porro!
              </p>
              <div className="card-actions justify-end">
                <button className="btn text-black bg-amber-300  border-amber-300 hover:bg-amber-400 hover:border-amber-300">
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-2">
          <div className="card lg:card-side bg-white shadow-xl">
            <img
              src="https://placeimg.com/300/250/arch"
              alt="Album"
              className="rounded-md mt-6 lg:mt-0 lg:rounded-none"
            />
            <div className="card-body">
              <h2 className="card-title">Lorem</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                labore asperiores quibusdam quas. Quo, porro!
              </p>
              <div className="card-actions justify-end">
                <button className="btn text-black bg-amber-300  border-amber-300 hover:bg-amber-400 hover:border-amber-300">
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
