import React from "react";
import Image from "next/image";

import classes from "./Store.module.css";
import location from "../public/location.png";
import star from "../public/star.png";

const Store = (props) => {
  return (
    <div className=" my-5 md:my-7">
      <h1 className=" font-josefinSans_SemiBold text-3xl md:text-5xl text-orange-100 opacity-80">
        {" "}
        {props.storeName}{" "}
      </h1>
      <div className=" flex flex-col md:flex-row mt-3 md:mt-7 w-full">
        <div className=" ring-2 p-3 pt-4 pr-4 md:mx-3 ring-orange-200 rounded-3xl">
          <Image
            src={props.imgUrl}
            width={750}
            height={480}
            className=" rounded-2xl"
          />
        </div>
        <div className={`${classes.glass} mt-6 md:mt-0 md:py-4 h-full w-full md:w-2/6 md:h-fit md:ml-5 px-2`}>
          <h3 className=" py-2 md:py-4 px-5 font-josefinSlab_Bold text-xl md:text-2xl">
            <span className=" mr-3">
              <Image src={location} alt="location" width={24} height={22} />
            </span>
            {props.address}
          </h3>
          <h3 className=" py-2 md:py-4 px-5 font-josefinSlab_Bold text-xl md:text-2xl">
            <span className=" mr-3">
              <Image src={star} alt="location" width={24} height={22} />
            </span>
            10
          </h3>
          <div className=" mt-3 md:mt-7 mb-6 mx-5 font-josefinSans_regular text-sm md:text-xl">
            <button className= {` ${classes.glowButton} py-2`}> Up vote </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Store;
