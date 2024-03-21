import React from "react";

function Footer() {
  return (
    <div className="bg-backGround2 p-4 md:px-24 md:py-10">
      <div className="grid grid-flow-col grid-cols-3">
        <div className="justify-self-center">
          <div className="font-bold text-text2 md:text-xl">C4Coffee</div>
          <div className="mt-4 font-semibold text-text1 md:text-lg md:leading-loose">
            By a coffee lover, <br /> To a coffee lover, <br /> For a coffee
            lover
          </div>
        </div>
        <div className="justify-self-center">
          <div className="mb-2 font-bold text-text2 md:text-xl">
            Quick Links:
          </div>
          <ul className="mx-6 font-semibold text-text1 md:text-base">
            <li className="my-2 cursor-pointer">Home</li>
            <li className="my-2 cursor-pointer">Coffee recipe</li>
            <li className="my-2 cursor-pointer">Coffee review</li>
            <li className="my-2 cursor-pointer">Shop review</li>
          </ul>
        </div>
        <div className="mb-2 justify-self-center font-bold text-text2 md:text-xl">
          Connect with Me:
        </div>
      </div>
      <div className="mt-6 font-semibold text-text2">
        Copyright © 2024 C4Coffee. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
