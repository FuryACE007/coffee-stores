import React from "react";
import Image from "next/image";
import coffeeLogo from "../public/coffee.jpg";

const Banner = (props) => {
  return (
    <div className="py-3">
      <Image
        src={coffeeLogo}
        width={150}
        height={150}
        className="opacity-70 rounded-full"
      />

      <h1 className=" text-white text-4xl md:text-8xl font-braga font-medium mt-5">
        Coffee <span className=" text-orange-500"> Connoiseur </span>
      </h1>
      <p className=" text-lg md:text-2xl text-slate-200 py-5 pl-1">
        Discover amazing coffee shops near you!
      </p>

      <button
        className=" bg-orange-500 text-white px-5 py-3 md:text-xl md:px-8 mxdpy-4 mt-4 rounded-tl-none rounded-b-3xl rounded-r-3xl hover:rounded-none hover:bg-orange-600 active:shadow-lg active:shadow-orange-700 ease-in duration-200"
        onClick={props.exploreClickHandler}
      >
        {" "}
        {props.buttonText}{" "}
      </button>
    </div>
  );
};

export default Banner;
