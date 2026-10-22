"use client";

import { useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import { about } from "../_constants/about";
import { skills } from "../_constants/skills";

export default function Cards() {
  const [option, setOption] = useState(0);

  const currentAbout = about[option];

  return (
    <main className="flex h-auto w-full flex-col gap-15 p-5 md:p-30">
      <section className="grid h-auto w-full grid-cols-1 justify-center gap-10 text-black xl:grid-cols-[1fr_2fr] ">
        <div className="flex h-auto w-full flex-col items-start justify-center gap-5">
          <h2 className="text-3xl">{currentAbout.title}</h2>

          <p className="text-md text-gray-600 md:text-xl">
            {currentAbout.about}
          </p>

          <div
            className="flex h-auto w-auto flex-row items-center justify-center gap-5 text-3xl"
            aria-label="Navegação sobre nós"
          >
            <button
              type="button"
              onClick={() => setOption(0)}
              aria-label="Ver primeira descrição"
              className={`cursor-pointer ${
                option === 1 ? "text-green-700" : "text-gray-500"
              }`}
            >
              <IoMdArrowBack />
            </button>

            <button
              type="button"
              onClick={() => setOption(1)}
              aria-label="Ver segunda descrição"
              className={`cursor-pointer ${
                option === 0 ? "text-green-700" : "text-gray-500"
              }`}
            >
              <IoMdArrowForward />
            </button>
          </div>
        </div>

        <div className="flex h-auto w-full flex-col items-center justify-between gap-10 md:flex-col xl:flex-row">
          {skills.map((skill, index) => (
            <article
              key={index}
              className="flex h-auto w-full flex-col items-start justify-start gap-5 rounded-2xl p-5 shadow-2xl xl:p-0 xl:shadow-none"
            >
              <div className="rounded-full p-5 text-xl text-green-700 shadow-2xl">
                {skill.icon}
              </div>

              <div className="flex h-auto w-full flex-col gap-5">
                <h3 className="text-2xl">{skill.title}</h3>

                <p className="text-md text-gray-600 md:text-xl">
                  {skill.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="h-auto w-full border border-gray-200" />

    </main>
  );
}
