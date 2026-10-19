import Image from "next/image";

import Icons from "./icons";

export default function Footer() {
  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center gap-5 bg-green-950 p-5 md:p-15">
      <div className="grid h-auto w-full grid-rows-2 md:grid-cols-2 items-center justify-center gap-5">
        <div className="w-auto h-auto flex flex-row gap-5 md:justify-start justify-center items-center">
          <div className="relative w-10 h-10 md:h-10 md:w-10 overflow-hidden">
            <Image
              src="/footer/vaca-hd.png"
              alt="Foto de Leonardo Pires"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="w-auto h-auto flex flex-col justify-center items-center gap-5">
            <h1 className="text-md md:text-xl">Leonardo Pires</h1>
          </div>
          
        </div>
        <div className="w-auto h-auto flex justify-center items-center">
          <Icons />
        </div>
      </div>

      <hr className="w-full" />

      <div className="flex h-auto w-full items-center justify-start rounded-2xl p-2 text-center">
        <p className="text-white">
          © Feito por{" "}
          <span className="cursor-pointer hover:text-blue-300">André Luiz</span>
          , Desenvolvedor de software 2026
        </p>
      </div>
    </footer>
  );
}
