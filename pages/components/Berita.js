import React from "react";

const Berita = () => {
  return (
    <div className="py-4 bg-white dark:bg-slate-700" id="berita">
      <div className="text-center mb-6">
        <h1 className="w-full text-5xl font-bold pb-3">Berita Acara</h1>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab
          nihil, delectus minima voluptatem eligendi.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="w-full p-4">
          <div className="card lg:card-side bg-white shadow-xl">
            <figure>
              <img src="https://placeimg.com/300/250/arch" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Lorem</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                labore asperiores quibusdam quas. Quo, porro!
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-amber-300 text-black">More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="card lg:card-side bg-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lorem</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                labore asperiores quibusdam quas. Quo, porro!
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-amber-300 text-black">More</button>
              </div>
            </div>
            <figure>
              <img src="https://placeimg.com/300/250/arch" alt="Album" />
            </figure>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="card lg:card-side bg-white shadow-xl">
            <figure>
              <img src="https://placeimg.com/300/250/arch" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Lorem</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                labore asperiores quibusdam quas. Quo, porro!
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-amber-300 text-black">More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="card lg:card-side bg-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Lorem</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                labore asperiores quibusdam quas. Quo, porro!
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-amber-300 text-black">More</button>
              </div>
            </div>
            <figure>
              <img src="https://placeimg.com/300/250/arch" alt="Album" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
