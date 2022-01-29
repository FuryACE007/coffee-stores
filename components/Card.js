import React from "react";
import Image from "next/image";

import glass from "./Card.module.css";
import Link from "next/link";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <a>
        <div
          className={`w-full px-5 py-4 mb-3 ${glass.background} ease-in duration-200 `}
        >
          <h2 className=" text-2xl font-josefinSlab_Bold text-orange-100 text-center mb-2">
            {props.name}
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
