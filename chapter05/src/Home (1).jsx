import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location ", localStorage.getItem("token"));

  useEffect(() => {
    console.log("localStorage ", localStorage.getItem("token"));
    if (localStorage.getItem("token") === null) {
      alert("silahkan login dulu");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      if (localStorage.getItem("login") === "google component") {
        const decoded = jwtDecode(localStorage.getItem("token"));
        if (decoded?.exp < new Date() / 1000) {
          alert("token expire");
        }
      } else {
        try {
          const res = await fetch(
            "https://shy-cloud-3319.fly.dev/api/v1/auth/me",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          // const res = await axios.get(
          //   "https://shy-cloud-3319.fly.dev/api/v1/auth/me",
          //   {
          //     headers: {
          //       Authorization: `Bearer123 ${localStorage.getItem("token")}`,
          //     },
          //   }
          // );
          const resJson = await res?.json();
          if (res?.status === 401) {
            alert("token expire");
            return;
          }
          console.log("first", resJson);
        } catch (error) {
          alert("token expire");
          console.log("error ", error);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      Home
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        logout
      </button>
    </div>
  );
}
