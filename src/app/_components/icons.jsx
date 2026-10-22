import { icons } from "../_constants/icons";
import Link from "next/link";
export default function Icons() {
  return (
    <>
      <main className="w-full h-auto flex justify-center md:justify-end items-center  flex-wrap gap-5 ">
        {icons.map((value, idx) => (
          <div
            key={idx}
            className="text-green-950 flex justify-center items-center flex-wrap "
          >
            <Link href={value.href} target="_blank">
              <span className="w-10 h-10 md:w-10 md:h-10 text-xl bg-gray-100 rounded-full flex justify-center items-center text-green-800">
                {value.icon}
              </span>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
