import { icons } from "../_constants/icons";
import Link from "next/link";
export default function Icons() {
  return (
    <>
      <main className="w-full h-auto flex justify-center items-center  flex-wrap gap-10 p-5 ">
        {icons.map((value, idx) => (
          <div
            key={idx}
            className="text-green-950 flex justify-center items-center flex-wrap gap-10"
          >
            <Link href={value.href}>
              <span className="w-10 h-10 md:w-15 md:h-15 text-xl bg-gray-100 rounded-full flex justify-center items-center text-green-800">
                {value.icon}
              </span>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
