import Banner from "../components/Banner";
import Card from "../components/Card";
import { CardLayout } from "../components/CardLayout";
import storeImg from "../public/cafe.webp";
import coffeStores from "../data/coffee-stores.json";

export default function Home() {
  const exploreButtonClickHandler = () => {
    console.log("Loading...");
  };
  return (
    <div className="">
      <main className="">
        <Banner
          buttonText="Explore"
          exploreClickHandler={exploreButtonClickHandler}
        />
        <h1 className=" text-orange-50 font-josefinSans_SemiBold text-4xl px-1 mt-20 mb-7">
          Stores in Bangalore...
        </h1>
        <CardLayout>
          {coffeStores.map((coffeStore) => {
            return (
              <Card
                key ={coffeStore.id}
                name={coffeStore.name}
                imgUrl={coffeStore.imgUrl}
                href={`/coffee-store/${coffeStore.id}`}
              />
            );
          })}
        </CardLayout>
      </main>
    </div>
  );
}
