import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("yantobasna1945@yahoo.com");
  const [password, setPassword] = useState("Yanto123_");
  useEffect(() => {
    console.log("localStorage ", localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      alert("Tidak perlu login lagi");
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    const response_login = await fetch(
      "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          expiresInMins: 0.1, // optional, defaults to 60
        }),
      }
    );
    const json_login = await response_login.json();

    if (response_login?.status === 200) {
      console.log("Data", json_login?.data);
      localStorage.setItem("token", json_login?.data?.token);
      navigate("/", { state: { token: json_login?.data?.token } });
      alert("Berhasil login");
    } else {
      alert("password atau username salah");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold">Login</h1>
          </div>
          <input
            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            value={email}
            onChange={(fejs) => setEmail(fejs.target.value)}
          />
          <input
            className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(fejs) => setPassword(fejs.target.value)}
          />
          <div className="flex justify-around">
            {" "}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => navigate("/regist")}
            >
              Register
            </button>
          </div>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}
