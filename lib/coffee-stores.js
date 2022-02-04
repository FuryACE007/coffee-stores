// Holds server-side code functions

// Initialize unsplash

import { createApi } from "unsplash-js";

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

//////////////////////////////////////////////////////////////////////////////////

const getUrlForCoffeeStores = (lat, long, radius, categories, limit) => {
  return `https://api.foursquare.com/v3/places/search?ll=${lat}%2C${long}&radius=${radius}&categories=${categories}&limit=${limit}&sort=RATING`;
};

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee store",
    perPage: 10,
  });
  const unsplashResults = photos.response.results;
  const photosResponse = unsplashResults.map((result) => result.urls.regular);

  return photosResponse;
};

export const fetchCoffeeStoresData = async () => {
  const photos = await getListOfCoffeeStorePhotos();

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(
    getUrlForCoffeeStores(12.9537, 77.5777, 7000, 13032, 8),
    options
  );
  const data = await response.json();

  return data.results.map((venue, idx) => {
    return {
      ...venue,
      imgUrl: photos[idx],
    };
  });
};
