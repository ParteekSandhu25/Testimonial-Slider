import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-10">
        <img
          className=" aspect-square rounded-full w-[140px] h-[140px] z-20"
          src={review.image}
          alt={review.namme}
        ></img>
        <div className="rounded-full w-[140px] h-[140px]  absolute top-[-6px] left-[10px] z-[-5] bg-violet-500"></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize">{review.name}</p>
      </div>

      <div className="text-center ">
        <p className="text-violet-300 uppercase font-normal text-sm">
          {review.job}
        </p>
      </div>

      <div className="mx-auto text-violet-400 mt-5 ">
        <FaQuoteLeft></FaQuoteLeft>
      </div>

      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      <div className="mx-auto text-violet-400 mt-5">
        <FaQuoteRight></FaQuoteRight>
      </div>
    </div>
  );
}

export default Card;
