import { useRef } from "react";
import coffeeCup1 from "../../assets/coffee1.jpg";
import coffeeCup2 from "../../assets/coffee2.png";
import { TextMarquee, TextMarqueeReverse } from "./HomePage/TextMarquee";
import SpecialText from "./HomePage/SpecialText";

function HomePage() {
  const ref = useRef(null);

  const clickHandler = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center bg-backGround1">
      <div className="background flex flex-col gap-10 md:justify-around md:gap-28">
        <div className="w-5/6 self-center rounded-lg bg-backGround2 bg-opacity-80 p-4 text-center text-3xl font-extrabold text-text2 shadow-lg md:mx-0 md:w-1/3 md:text-5xl">
          Life is a lie without coffee
        </div>
        <div className="w-3/4 self-center rounded bg-backGround2 bg-opacity-80 p-4 text-center font-bold leading-loose text-text2 shadow md:text-2xl md:leading-loose">
          We're more than just a website — we're a gathering place for coffee
          enthusiasts from all walks of life. Whether you're a casual coffee
          drinker or a seasoned coffee connoisseur, our community is here to
          ignite your love for coffee and foster meaningful connections with
          fellow coffee lovers around the globe.
        </div>
        <div
          className="mb-2 flex animate-bounce cursor-pointer items-center justify-center gap-2 self-center rounded-full bg-backGround2 bg-opacity-70 p-4 font-bold text-text2"
          onClick={clickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>{" "}
          Scroll to view more
        </div>
      </div>
      <TextMarquee />
      <div
        className="m-px flex flex-col items-center justify-center gap-4 text-xs md:text-xl"
        ref={ref}
      >
        <div className="grid grid-flow-col grid-cols-3 gap-4 font-semibold md:w-3/4">
          <div className="rounded bg-backGround2 p-6 text-text1 shadow">
            There are two main types of coffee beans:{" "}
            <SpecialText text={"Arabica"} />, which is smoother, and{" "}
            <SpecialText text={"Robusta"} />, which is stronger and more bitter.
          </div>
          <div className="col-span-2 grid grid-flow-row gap-4">
            <div className="grid grid-flow-col gap-4">
              <div className="rounded bg-backGround2 p-6 text-text1 shadow">
                Coffee is one of the most popular drinks worldwide, enjoyed by{" "}
                <SpecialText text={"billions of people"} /> every day.  
              </div>
              <div className="rounded bg-backGround2 p-6 text-text1 shadow">
                Drinking coffee in moderation may have health benefits, like{" "}
                <SpecialText text={"reducing"} /> the risk of diseases such as{" "}
                <SpecialText text={"Parkinson's"} /> and{" "}
                <SpecialText text={"type 2 diabetes"} />
              </div>
            </div>
            <div className="rounded bg-backGround2 p-6 text-text1 shadow">
              Coffee is about <SpecialText text={"98%"} /> water. The quality{" "}
              <SpecialText text={"water"} /> used to brew coffee can
              significantly <SpecialText text={"affect its taste"} />.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 md:w-3/4">
          <div className="col-span-2 rounded bg-backGround2 p-6 text-text1 shadow">
            Coffee beans are typically roasted to{" "}
            <SpecialText text={"different levels"} /> ranging from light to
            dark. Lighter roasts tend to have more{" "}
            <SpecialText text={"acidity and fruity"} /> flavors, while darker
            roasts are <SpecialText text={"richer and more intense"} />.
          </div>
          <div className="rounded bg-backGround2 p-6 text-text1 shadow">
            Coffee is renowned for its <SpecialText text={"caffeine"} />{" "}
            content, a natural stimulant that helps to{" "}
            <SpecialText text={"improve"} /> focus and alertness.
          </div>
        </div>
      </div>
      <TextMarqueeReverse />
      <div className="m-4 font-medium text-text2 md:mx-24 md:text-xl">
        <div className="my-10 grid grid-flow-row items-center rounded bg-backGround2 px-10 py-4 shadow md:grid-cols-3 md:py-0">
          <img
            src={coffeeCup1}
            alt="coffee-cup-1"
            className="hidden self-center rounded-md md:inline md:h-3/4"
          />
          <div className="col-span-2 self-center">
            <div className="my-6 text-3xl font-bold">Check coffee recipies</div>
            Whether you're a novice or a seasoned aficionado, discover the
            diverse types of coffee—from the bold espresso to the smooth
            Americano. Learn about their origins, brewing methods, and what
            makes each variety unique. Equip yourself with the knowledge to
            appreciate the nuances of every cup as you explore and celebrate the
            global culture of coffee with us!
          </div>
        </div>
        <div className="my-10 grid grid-flow-row items-center rounded bg-backGround2 px-10 py-4 shadow md:grid-cols-3 md:py-0">
          <div className="col-span-2 self-center">
            <div className="my-6 text-3xl font-bold">Coffee shop review</div>
            Embark on a journey of exploration as we guide you to the best
            coffee shops and cafes around the world. From cozy neighborhood
            spots to trendy urban hangouts, our community-sourced reviews will
            lead you to hidden gems and must-visit destinations for your coffee
            adventures.
          </div>
          <img
            src={coffeeCup2}
            alt="coffee-cup-2"
            className="hidden justify-self-end rounded-md md:inline md:h-4/5"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
