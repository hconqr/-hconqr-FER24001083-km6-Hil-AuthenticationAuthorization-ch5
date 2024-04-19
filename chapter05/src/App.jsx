import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import LoginApp from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/register";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MovieSearch from "./MovieDB/pages/searchMovie";
import MovieDetail from "./MovieDB/pages/detailMovie";
import TrendingMovie from "./MovieDB/pages/trendingMovies";
import PopularMovie from "./MovieDB/pages/PopularMovie";
import FavMovies from "./MovieDB/pages/FavMovies";
import NowPlaying from "./MovieDB/pages/movie";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginApp />,
    },
    {
      path: "/regist",
      element: <Register />,
    },
    {
      path: "/movie",
      element: <MovieSearch />,
    },
    {
      path: "/movie-detail",
      element: <MovieDetail />,
    },
    {
      path: "/movie-trending",
      element: <TrendingMovie />,
    },
    {
      path: "/movie-popular",
      element: <PopularMovie />,
    },
    {
      path: "/movie-favorite",
      element: <FavMovies />,
    },
    {
      path: "/movie-now",
      element: <NowPlaying />,
    },
  ]);
  return (
    <GoogleOAuthProvider clientId="748133478944-gojlftepeq0f0521jq7dofovcks41428.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}
