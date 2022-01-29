import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  const exploreButtonClickHandler = () =>{
    console.log("Loading..."); 
  }
  return (
    <div className= "" >
      <main className="">
        <Banner buttonText= "Explore" exploreClickHandler= {exploreButtonClickHandler} />
        <Card />
      </main>
    </div>
  )
}
