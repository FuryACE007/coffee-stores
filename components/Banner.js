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

      <h1 className=" text-white text-6xl md:text-8xl font-braga font-medium mt-5">
        Coffee <span className=" text-orange-500"> Connoiseur </span>
      </h1>
      <p className="font-josefinSlab_SemiBold text-xl md:text-3xl text-orange-50 py-2 pl-1">
        Discover amazing coffee shops near you!
      </p>

      <button
        className=" bg-orange-500 font-josefinSans_Regular text-white px-5 pb-3 pt-4 md:text-lg md:px-6 md:py-4 mt-4 rounded-tl-none rounded-b-3xl rounded-r-3xl hover:rounded-none hover:bg-orange-600 active:shadow-lg active:shadow-orange-700 ease-in duration-200"
        onClick={props.exploreClickHandler}
      >
        {" "}
        {props.buttonText}{" "}
      </button>
    </div>
  );
};

export default Banner;
