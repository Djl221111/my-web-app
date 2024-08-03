"use client";
import { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
export default function Home() {
  let [counter, setCounter] = useState(0);
  const{width,height}=useWindowSize();
  function handleClick() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <main>
      {
        (counter>5) &&<Confetti width={width} height={height} recycle={false} gravity={0.2} wind={0} numberOfPieces={1000}/>
      }
      <div className="w-screen h-screen flex items-center">
        <div className="m-auto">
          <div>I have clicked {counter} times</div>
          <div className="flex items-center">
            <button
              onClick={handleClick}
              className="m-auto border rounded-lg p-2 bg-sky-400 
                  text-white hover:bg-sky-600 active:bg-sky-700"
            >
              Click Me!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
