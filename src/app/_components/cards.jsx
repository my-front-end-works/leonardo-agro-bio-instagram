"use client";
import { useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { about } from "../_constants/about";
import { skills } from "../_constants/skills";

export default function Cards() {
  const [option, setOption] = useState(0);

  return (
    <main className="w-full h-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 justify-center text-black p-5 md:p-30 ">
      <div className="w-full md:w-full h-auto flex flex-col gap-5 justify-center items-start ">
        <h1 className="text-3xl">{about[option].title}</h1>
        <p className="text-md md:text-xl text-gray-600">
          {about[option].about}
        </p>
        <div className="w-auto h-auto flex flex-row justify-center items-start text-3xl gap-5">
          <IoMdArrowBack
            onClick={() => setOption(0)}
            className={`${option == 1 ? "text-green-700" : "text-gray-500"}`}
          />
          <IoMdArrowForward
            onClick={() => setOption(1)}
            className={`${option == 0 ? "text-green-700" : "text-gray-500"}`}
          />
        </div>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center gap-10 ">
        {skills.map((value, idx) => (
          <div
            key={idx}
            className="w-full h-auto flex flex-col justify-start items-start gap-5 shadow-2xl md:shadow-none md:p-0 p-5 rounded"
          >
            <div className="p-5 text-xl shadow-2xl rounded-full text-green-700">
              {value.icon}
            </div>
            <div className="w-full h-auto flex flex-col gap-5">
              <h1 className="text-2xl">{value.title}</h1>
              <p className="text-md md:text-xl text-gray-600">
                {value.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
