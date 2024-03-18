import React from 'react';

function TextMarquee() {
  return (
    <div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Espresso
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Americano
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Cappuccino
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Latte
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Macchiato
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Flat White
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Mocha
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Affogato
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Ristretto
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Lungo
          </span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Espresso
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Americano
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Cappuccino
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Latte
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Macchiato
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Flat White
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Mocha
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Affogato
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Ristretto
          </span>
          <span className="mx-4 text-5xl text-text2 font-bold opacity-40">
            Lungo
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextMarquee;
