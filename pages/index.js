import Banner from "../components/Banner";

export default function Home() {
  const exploreButtonClickHandler = () =>{
    console.log("Loading..."); 
  }
  return (
    <div className= "" >
      <main className="">
        <Banner buttonText= "Explore" exploreClickHandler= {exploreButtonClickHandler} />
      </main>
    </div>
  )
}
