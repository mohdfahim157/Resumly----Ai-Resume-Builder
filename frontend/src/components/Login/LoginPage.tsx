import React, { useState } from "react";


export default function LoginPage() {
  const [state, setState] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="absolute h-full w-full flex justify-center items-center top-0 z-1 ">
    <form
      onSubmit={handleSubmit}
      className="sm:w-87.5 w-full text-center bg-green-700  rounded-2xl px-8"
      style={{boxShadow: "0px 42px 70px 26px rgba(0, 0, 0, 0.9)"}}
    >
      <h1 className="text-white text-3xl mt-10 font-medium">
        {state === "login" ? "Login" : "Sign up"}
      </h1>

      <p className="text-green-100 text-sm mt-2">Please sign in to continue</p>

      {state !== "login" && (
        <div className="flex items-center mt-6 w-full bg-white border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-gray-400"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <circle cx="12" cy="8" r="5" />{" "}
            <path d="M20 21a8 8 0 0 0-16 0" />{" "}
          </svg>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full bg-transparent text-green-950 placeholder-gray-400 border-none outline-none "
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <div className="flex items-center w-full mt-4 bg-white  h-12 rounded-full overflow-hidden pl-6 gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-gray-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />{" "}
          <rect x="2" y="4" width="20" height="16" rx="2" />{" "}
        </svg>
        <input
          type="email"
          name="email"
          placeholder="Email id"
          className="w-full bg-transparent text-green-950 placeholder-gray-400 border-none outline-none "
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className=" flex items-center mt-4 w-full bg-white h-12 rounded-full overflow-hidden pl-6 gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-gray-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />{" "}
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />{" "}
        </svg>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full bg-transparent text-green-950 placeholder-gray-400 border-none outline-none"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-4 text-left">
        <button className="text-sm text-green-100 hover:underline">
          Forget password?
        </button>
      </div>

      <button
        type="submit"
        className="mt-2 w-full h-11 rounded-full text-white bg-white/33 hover:bg-white hover:text-green-900 cursor-pointer transition "
      >
        {state === "login" ? "Login" : "Sign up"}
      </button>

      <p
        onClick={() =>
          setState((prev) => (prev === "login" ? "register" : "login"))
        }
        className="text-green-100 text-sm mt-3 mb-11 cursor-pointer"
      >
        {state === "login"
          ? "Don't have an account?"
          : "Already have an account?"}
        <span className="text-green-300 hover:underline ml-1">click here</span>
      </p>
    </form>
    </div>
  );
}
