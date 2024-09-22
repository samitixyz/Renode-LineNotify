import React from "react";
import ArrowIcon from "./ArrowIcon.tsx";

const ClickNotify = () => {
  const handleClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/notify`, {
        method: "GET",
      });
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log(data);
      } else {
        const text = await response.text();
        console.log("Response is not JSON:", text);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <section className="flex h-screen items-center flex-col justify-center bg-gray-500">
      <div
        className="flex items-center px-10 cursor-pointer flex-row justify-center border border-green-500 text-white bg-green-500 hover:bg-white hover:text-green-500 rounded-full leading-[60px] no-underline transition-all duration-200 ease-in-out"
        onClick={handleClick}
      >
        Notify Me
        <ArrowIcon />
      </div>
    </section>
  );
};

export default ClickNotify;
