/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-image">
        <nav className="py-4">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex space-x-10 text-xl">
              <li>
                <Link
                  to={`/movie-trending`}
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                    to={`/movie-favorite`}
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Favorite
                </Link>
              </li>
              <li>
                <Link
                  to={`/movie-popular`}
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                   Popular
                </Link>
              </li>
              <li>
                <Link
                to={`/movie-now`}
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                 Now Playing
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              Welcome To Movie Group 1
            </h1>
            <Link
              to={`/movie`}
              className="bg-gray-500 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded bg-opacity-50 inline-block mt-4"
            >
              Cari Movie
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
