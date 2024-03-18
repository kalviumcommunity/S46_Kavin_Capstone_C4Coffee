import React from 'react';
import baristaImage from '../assets/baristaImage.png';
import coffeeCup from '../assets/coffeeCup.png';
import TextMarquee from '../components/TextMarquee';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function HomePage() {
  return (
    <div className="bg-backGround1 flex justify-center flex-col">
      <div className="self-center mt-10 text-3xl md:text-5xl font-extrabold text-text2 transition w-2/3 text-center">
        Life is not better without coffee
      </div>

      <TextMarquee />

      <div className="flex justify-center items-center">
        <div className="w-1/4">
        </div>
      </div>

      <TextMarquee />

      <div className="self-center font-bold m-6 md:text-3xl text-text2 leading-loose text-center md:leading-loose">
        <div className="animate-in slide-in-from-right duration-700 delay-300">
          In the dawn's soft light, a brew begins to rise,
        </div>
        <div className="animate-in slide-in-from-right duration-700 delay-200">
          A fragrant dance, a spell to mesmerize.
        </div>
        <div className="animate-in slide-in-from-right duration-700 delay-100">
          From earthy grounds, the essence steeps,
        </div>
        <div className="animate-in slide-in-from-right duration-700 ">
          In gentle whispers, the aroma keeps.
        </div>
      </div>
    </div>
  );
}

export default HomePage;
