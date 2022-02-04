import React from "react";
import Image from "next/image";

import glass from "./Card.module.css";
import Link from "next/link";
import arrow from "../public/arrow.png";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <a>
        <div
          className={`w-full flex flex-col px-5 pt-4 pb-8 mb-11 ${glass.background} ease-in duration-200 `}
        >
          <h2 className=" text-2xl font-josefinSlab_Bold text-orange-100 mb-2 w-full">
            {props.name}{" "}
            <Image
              src={arrow}
              width={20}
              height={20}
              className="mt-3 rounded-full rotate-180"
            />
          </h2>
          <Image
            src={props.imgUrl}
            width={630}
            height={390}
            alt="Store Image"
            className=" rounded-xl"
          />
        </div>
      </a>
    </Link>
  );
};

export default Card;
