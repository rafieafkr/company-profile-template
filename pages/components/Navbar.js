import React from "react";

const Navbar = () => {
  return (
    <div className="navbar w-full h-20 bg-white dark:bg-slate-700">
      <div className="justify-items-center text-center bg-black-1000">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#layanan">Layananlkj</a>
            </li>
            <li>
              <a href="#gallery">Gallery Perusahaan</a>
            </li>
            <li tabIndex="0">
              <a className="justify-between">
                Sosial Media
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-white">
                <li>
                  <a>Instagram</a>
                </li>
                <li>
                  <a>Facebook</a>
                </li>
                <li>
                  <a>LinkedIn</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Kontak</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-black ext-xl bg-amber-300 hover:bg-white">
          LOREM IPSUM
        </a>
      </div>
      <div className="navbar-end hidden w-full lg:flex md:flex-end">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="#layanan">Layanan</a>
          </li>
          <li>
            <a href="#gallery">Gallery Perusahaan</a>
          </li>
          <li tabIndex="0">
            <a>
              Sosial Media
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-white">
              <li>
                <a>Instagram</a>
              </li>
              <li>
                <a>Facebook</a>
              </li>
              <li>
                <a>LinkedIn</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#footer">Kontak</a>
          </li>
          <li>
            <a href="#berita">Berita</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
