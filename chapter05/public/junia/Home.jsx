import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  const [usernameData, setusernameData] = useState("atuny0");
  const [passwordData, setpasswordData] = useState("9uQFF1Lh");
  const [data, setData] = useState([]);
  const [items, setItems] = useState("");
  const [message, setMessage] = useState("");

  async function login() {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: `${usernameData}`,
          password: `${passwordData}`,
          expiresInMins: 30, // optional, defaults to 60
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response.data.token);

      console.log(response.data);
      setData(response.data);
      setMessage("Login successful"); // Set welcome message
    } catch (error) {
      console.error(error);
      setMessage("Login failed. Please check your credentials.");
    }
  }

  useEffect(() => {
    const items = localStorage.getItem("token");
    if (items) {
      setItems(items);
    }
  }, []);

  console.log("items", items);

  const handleUsername = (event) => {
    setusernameData(event.target.value);
  };

  const handlePassword = (event) => {
    setpasswordData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setpasswordData("");
    setusernameData("");
    setData([]);
    setItems("");
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="text-3xl font-extrabold p-4">LOGIN</div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center items-center "
        >
          <input
            type="text"
            placeholder="Username"
            value={usernameData}
            onChange={handleUsername}
            className="border-2 border-black rounded-md p-2 m-2 w-full md:w-auto"
          />
          <input
            type="text"
            placeholder="Password"
            value={passwordData}
            onChange={handlePassword}
            className="border-2 border-black rounded-md p-2 m-2 w-full md:w-auto"
          />
          <button
            type="submit"
            className="border-2 border-black rounded-md p-2 m-2 bg-black text-white hover:bg-gray-800"
          >
            Login
          </button>
          <button
            onClick={handleLogout} //onClick={() => logout()}
            className="border-2 border-black rounded-md p-2 m-2 bg-black text-white hover:bg-gray-800"
          >
            Logout
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center">
        {message && (
          <p
            className={`text-lg ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {data.firstName && (
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center">
              <img
                src={`${data.image}`}
                alt="Avatar"
                className="w-20 h-20 rounded-full mr-2"
              />
              <p>Welcome back, {data.firstName}!</p>
            </div>
            <button className="border-2 border-black rounded-md p-2 m-2 bg-black text-white hover:bg-gray-800">
              <Link to={"/user-details"}>Details</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
