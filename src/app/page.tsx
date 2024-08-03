"use client";
import Countdown from 'react-countdown';
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
export default function Home() {
  const{width,height}=useWindowSize();
  interface RendererPrams{
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean
  }
  function renderer({ hours, minutes, seconds, completed } : RendererPrams){
    if (completed){
      return (<Confetti width={width} height={height} recycle={false} gravity={0.2}  wind={0} numberOfPieces={1000}/>);
    }
    else {
      const hour =(hours>=10?`${hours}`:`0${hours}`);
      const minute = (minutes>=10?`${minutes}`:`0${minutes}`);
      const second = (seconds>=10?`${seconds}`:`0${seconds}`);
      return (<span className="text-8xl font-mono font-bold">{hour}:{minute}:{second}</span>);
    }
  }
  return (
    <main>
      <div className="w-screen h-screen flex items-center">
        <div className="m-auto">
          <Countdown date={Date.now()+5000} renderer={renderer}/>
        </div>
      </div>
    </main>
  );
}
