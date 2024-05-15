import CoffeeDesc from "../components/CoffeeTypes/CoffeeDesc";
import data from "../data.json";

function CoffeeTypes() {
  return (
    <div className="bg-backGround1 p-10">
      <div className="text-center text-3xl font-extrabold text-text2">
        Coffee types
      </div>
      <div className="my-10 text-center text-lg font-semibold text-text1">
        Discover the origins, flavors, and unique characteristics of each coffee
        drink as you browse through our curated selection. Whether you&apos;re a
        coffee connoisseur seeking your next caffeine fix or a casual coffee
        enthusiast looking to explore new flavors, our comprehensive guide
        provides insights into the fascinating world of coffee culture.
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {data.map((coffee) => (
          <CoffeeDesc
            name={coffee.CoffeeDrink}
            desc={coffee.Description}
            image={coffee.ImageLink}
            key={coffee.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CoffeeTypes;
