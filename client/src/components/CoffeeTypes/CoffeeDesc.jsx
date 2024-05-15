function CoffeeDesc({ name, desc, image }) {
  return (
    <div className="rounded bg-backGround2 p-4 shadow">
      <div className="m-4 text-center text-xl font-bold text-text2">
        {name}
      </div>
      <div className="grid items-center justify-center grid-cols-2">
        <img src={image} alt="coffee-image" className="my-4 md:w-4/5 rounded shadow" />
        <div className="text-base font-semibold text-text1">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default CoffeeDesc;
