import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function supriseHandler() {
    setIndex(Math.floor(Math.random() * reviews.length));
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 rounded-md transition-all duration-700 shadow-md hover:shadow-xl">
      <Card review={reviews[index]}></Card>
      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft />
        </button>
        <button onClick={rightShiftHandler}>
          <FiChevronRight className="cursor-pointer hover:text-violet-500" />
        </button>
      </div>
      <div className="mx-auto mt-5">
        <button
          className="font-bold text-white text-lg bg-violet-400 hover:bg-violet-500 py-2 px-10 rounded-md shadow-md transition-hover duration-200"
          onClick={supriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
