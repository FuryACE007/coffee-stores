import Banner from "../components/Banner";
import Card from "../components/Card";
import { CardLayout } from "../components/CardLayout";
import storeImg from "../public/cafe.webp";

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
        <h1 className=" text-orange-50 font-josefinSans_SemiBold text-4xl px-1 mt-20 mb-7"> Stores near you... </h1>
        <CardLayout>
          <Card
            name="Cafe Coffee Day"
            imgUrl={storeImg}
            href="/coffee-store/cafe-coffee-day"
          />
          <Card
            name="Cafe Coffee Day"
            imgUrl={storeImg}
            href="/coffee-store/cafe-coffee-day"
          />
          <Card
            name="Cafe Coffee Day"
            imgUrl={storeImg}
            href="/coffee-store/cafe-coffee-day"
          />
          <Card
            name="Cafe Coffee Day"
            imgUrl={storeImg}
            href="/coffee-store/cafe-coffee-day"
          />
        </CardLayout>
      </main>
    </div>
  );
}
