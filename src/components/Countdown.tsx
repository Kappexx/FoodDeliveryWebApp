"use client"
import Countdown from "react-countdown";

const endingDate = new Date("2023-09-25")

const CountDown = () => {
  return ( 
    
      <Countdown className=" text-yellow-300 font-bold text-5xl" date={endingDate}/>
    
  );
}
 
export default CountDown;