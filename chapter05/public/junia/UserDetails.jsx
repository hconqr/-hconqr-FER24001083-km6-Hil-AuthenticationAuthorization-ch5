import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function UserDetails() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState("");

  async function getUserData() {
    try {
      const response = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${items}`,
        },
      });

      console.log("data", response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const items = localStorage.getItem("token");
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    if (items) {
      getUserData();
    }
  }, [items]);

  console.log("items", items);

  return (
    <div className="container mx-auto items-center justify-center flex">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <img
          src={`${data?.image}`}
          className="w-64 h-full rounded-lg  mt-10 "
        />
      </div>
      <div className="grid grid-cols-3 mt-10 pl-20 pt-24">
        <div className="bg-sky-200  p-4 rounded-tl-lg">
          <div className="font-bold">First Name:</div>
          <div>{`${data?.firstName} `}</div>
        </div>
        <div className="bg-sky-200  p-4">
          <div className="font-bold">Last Name:</div>
          <div>{`${data?.lastName}`}</div>
        </div>
        <div className="bg-sky-200  p-4 rounded-tr-lg">
          <div className="font-bold">Age:</div>
          <div>{data?.age}</div>
        </div>
        <div className="bg-sky-300  p-4">
          <div className="font-bold">Gender:</div>
          <div style={{ textTransform: "capitalize" }}>{data?.gender}</div>
        </div>
        <div className="bg-sky-300  p-4">
          <div className="font-bold">Eye Color:</div>
          <div>{data?.eyeColor}</div>
        </div>
        <div className="bg-sky-300  p-4">
          <div className="font-bold">Height:</div>
          <div>{data?.height} cm</div>
        </div>
        <div className="bg-sky-200  p-4">
          <div className="font-bold">Weight:</div>
          <div>{data?.weight} kg</div>
        </div>
        <div className="bg-sky-200  p-4">
          <div className="font-bold">Blood Type:</div>
          <div>{data?.bloodGroup}</div>
        </div>
        <div className="bg-sky-200  p-4">
          <div className="font-bold">Birth Date:</div>
          <div>{data?.birthDate}</div>
        </div>
        <div className="bg-sky-300  p-4">
          <div className="font-bold">Email:</div>
          <div>{data?.email}</div>
        </div>
        <div className="bg-sky-300  p-4">
          <div className="font-bold">Phone:</div>
          <div>{data?.phone}</div>
        </div>
        <div className="bg-sky-300  p-4">
          <div className="font-bold">Social Security Number:</div>
          <div>{data?.ssn}</div>
        </div>
        <div className="bg-sky-200  p-4">
          <div className="font-bold">Domain:</div>
          <div>{data?.domain}</div>
        </div>
        <div className="bg-sky-200  p-4">
          <div className="font-bold">IP Address:</div>
          <div>{data?.ip}</div>
        </div>
        <div className="bg-sky-200  p-4">
          <div className="font-bold">University:</div>
          <div>{data?.university}</div>
        </div>
        <div className="bg-sky-300  p-4 col-span-3 ">
          <div className="font-bold">Home Address:</div>
          <div>{`${data?.address?.address}, ${data?.address?.city}, ${data?.address?.state}, ${data?.address?.postalCode}`}</div>
        </div>
        <div className="bg-sky-200  p-4 col-span-3 ">
          <div className="font-bold">Job Address:</div>
          <div>{`${data?.company?.address?.address}, ${data?.company?.address?.city}, ${data?.company?.address?.state}, ${data?.company?.address?.postalCode}`}</div>
        </div>
        <div className="bg-sky-300  col-span-3 p-4">
          <div className="font-bold">Username:</div>
          <div>{data?.username}</div>
        </div>
        <div className="bg-sky-200 col-span-3 p-4 rounded-b-lg">
          <div className="font-bold">Password:</div>
          <div>{data?.password}</div>
        </div>
        <button className="bg-sky-300 border-2 border-black rounded-md w-32 p-2 mt-8">
          <Link to={"/"}>Home</Link>
        </button>
      </div>
    </div>
  );
}
