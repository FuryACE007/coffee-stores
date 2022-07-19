import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import Store from "../../components/Store";
import arrow from "../../public/arrow.png";
import { fetchCoffeeStoresData } from "../../lib/coffee-stores";

const CoffeeStorePage = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    // as getStaticPaths takes a small amt of time to cache the data for not pre-rendered paths, this gives a fallback
    return <div>Loading...</div>;
  }
  const { name, imgUrl } = props.coffeeStore; //need to placed after the fallback state

  return (
    <div className=" text-white md:text-lg text-base">
      <Head>{name}</Head>
      <Link href="/">
        <a>
          <Image src={arrow} width={20} height={20} />
          <span className=" ml-3 md:text-xl text-base hover:text-amber-500 ease-in duration-200">
            Back to Home
          </span>
        </a>
      </Link>
      <Store
        storeName={name}
        imgUrl={ 
          `${imgUrl || "https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_960_720.jpg"}`
        }
        address={`${
          props.coffeeStore.location.address ||
          props.coffeeStore.location.locality
        } ${
          props.coffeeStore.location.neighborhood ||
          ", Pin Code: "+props.coffeeStore.location.postcode ||
          ""
        }`}
      />
    </div>
  );
};

export async function getStaticPaths() {
  //pre-rendering dynamic routes
  const coffeeStores = await fetchCoffeeStoresData();

  const paths = coffeeStores.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.fsq_id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const params = context.params;
  const coffeeStores = await fetchCoffeeStoresData();
  console.log(coffeeStores);

  return {
    props: {
      coffeeStore: coffeeStores.find((coffeStore) => {
        //to access the value name of dynamic route (as useRouter is accessible only to the client side code)
        return coffeStore.fsq_id.toString() === params.id; // returns the json containing info about store with id = value
      }),
    }, // will be passed to the page component as props
  };
}

export default CoffeeStorePage;
