import Banner from "../components/Banner";
import Card from "../components/Card";
import { CardLayout } from "../components/CardLayout";
import { fetchCoffeeStoresData } from "../lib/coffee-stores";

export default function Home(props) {
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
        {props.coffeeStores.length > 0 && (
          <div>
            <h1 className=" text-orange-50 font-josefinSans_Light text-4xl px-1 mt-20 mb-7">
              Stores in Bangalore...
            </h1>
            <CardLayout>
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.fsq_id}
                    name={`${coffeeStore.name.length>18? coffeeStore.name.slice(0,17) + "...":coffeeStore.name}`}
                    imgUrl={
                      coffeeStore.imgUrl ||
                      "https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_960_720.jpg"
                    }
                    href={`/coffee-store/${coffeeStore.fsq_id}`}
                  />
                );
              })}
            </CardLayout>
          </div>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  
  const coffeeStores = await fetchCoffeeStoresData();
  // coffeeStores.map( coffeeStore =>{
  //   return console.log(coffeeStore.location.address)
  // } )
  // console.log(coffeeStores);
  return {
    props: {
      coffeeStores,
    }, // will be passed to the page component as props
  };
}
