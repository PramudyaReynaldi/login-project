import React, { useState } from "react";
import loginImg from "../assets/city.jpg";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === 'Error') {
      alert('Register failed')
    } else {
      alert('Register successfully! back to login page')
      window.location.href = '/'
    }

    console.log(data);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={loginImg} alt="" />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
            onSubmit={registerUser}
          >
            <h2 className="text-4xl dark:text-white font-bold text-center">
              REGISTER
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Name</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                onClick={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                onClick={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>
            <button
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
              type="submit"
            >
              REGISTER
            </button>

            <Link to={"/"}>
              <p className="flex justify-center text-gray-400 py-2">Login</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
