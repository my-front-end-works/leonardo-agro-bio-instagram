import Image from "next/image";
import { experiences } from "../_constants/experience";

export default function Experience() {
  return (
    <main className="flex h-auto w-full p-5">
      <section className="flex w-full flex-col gap-5">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <h2 className="text-3xl text-black">Experiências</h2>

          <p className="text-center text-md text-gray-400 md:text-xl">
            Competências ao longo da minha carreira como zootecnista
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-10 p-10">
          {experiences.map((value, idx) => (
            <div
              key={idx}
              className="relative w-60 h-60  md:h-70 md:w-70 overflow-hidden rounded transition delay-150 duration-300 ease-in-out hover:opacity-65"
            >
              <Image
                src={Object.values(value)[0]}
                alt={Object.keys(value)[0]}
                fill
                sizes="192px"
                className="object-cover "
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-3">
                <p className="text-center text-lg font-semibold text-white">
                  {Object.keys(value)[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
