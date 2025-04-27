import React, { useState } from "react";
import landscape3 from "../assets/landscape3.json";
import Lottie from "lottie-react";
import image from "../assets/image.png";

function KnowMe() {
  const [btnStatus, setBtnStatus] = useState(false);

  let content;

  if (btnStatus) {
    content = (
      <div className="mt-4 text-sm text-left max-w-xl mx-auto relative">
        <button
          onClick={() => setBtnStatus(false)}
          className="absolute top-0 right-0 p-2 text-white hover:text-gray-300"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            aria-label="Close"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M20.643 3.357 12 12l-8.647 8.647M20.649 20.649 3.354 3.354"
            />
          </svg>
        </button>
        <p className="text-lg pt-8">
          I am Anushka, a 21-year-old Computer Science and Engineering student
          (as of the moment I make this project). I made this website cause we
          all have moments where we just zone out and fall into a weird
          over-thinking moment where you're like maybe there's a big baby alien
          who is just playing with the earth like we did with Doll Houses...
          Just me? oops... Yeah so basically I wanted to combine that and my
          interest in Web Development and make something fun. Well, fun for me
          at least. I've always been interested in Web Development and I love to
          learn new things. So I used React and Tailwind CSS for Frontend, Node
          JS for Backend and MongoDB for the Database to make this website. Now
          you might find all this goofy but hey, we all have our quirks and
          that's what makes us unique! I love to learn new things and I am
          always looking for new challenges. I am also a big fan of memes and I
          love to make people laugh. And if you're also a fellow over-thinker,
          then you can relate to me and contact me
          <a
            href="mailto:hiiamanu2004@gmail.com"
            className="text-blue-400 underline ml-1 hover:text-blue-200 transition-colors" target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
    );
  } else {
    content = (
      <button
        onClick={() => setBtnStatus(true)}
        className="mt-4 bg-transparent group-hover:bg-gradient-to-r from-pink-300 via-yellow-200 to-blue-300 text-black font-semibold py-2 px-4 rounded transition-all duration-500 border border-white"
      >
        Press this Button to know who I am.
      </button>
    );
  }

  return (
    <div className="bg-black relative w-full h-screen flex flex-col items-center justify-center object-cover overflow-hidden">
      <Lottie
        animationData={landscape3}
        loop
        autoplay
        className="absolute top-0 left-0 w-full z-0 opacity-50"
      />
      <img
        src={image}
        alt="Anushka"
        className="absolute w-[20%] h-[68%] bottom-0 left-2 object-cover"></img>
      <div
        className={`glass z-10 p-4 rounded-xl text-white text-center transition-transform duration-300 ease-in-out group ${
          !btnStatus ? "hover:scale-110" : ""
        }`}
      >
        <p className="text-xl font-bold pt-2">This is Anushka.</p>
        <p>Yep another one.</p>

        {content}
      </div>
    </div>
  );
}

export default KnowMe;
