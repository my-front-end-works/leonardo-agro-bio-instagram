import Image from "next/image";

export default function Header() {
  return (
    <main className="w-full h-[50%] bg-[url('/header/background.jpg')] bg-cover bg-center rounded-2xl p-5">
      <div className="w-full h-auto grid grid-rows-[1fr_2fr_0.5fr] gap-5 justify-start items-center">
        <div className="w-full flex flex-row justify-start items-center gap-5">
          <div className="relative w-15 h-15 overflow-auto rounded-lg ">
            <Image
              src={"/header/leonardo-icon.jpeg"}
              fill
              alt="Leonardo Pires"
              className="object-cover  rounded-full"
            />
          </div>
          <div>
            <h1 className="text-md">Leonardo Pires</h1>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Profissional no ramo do agro</h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsum
            sunt ipsa, reprehenderit perferendis dolor facere excepturi quidem
            minus beatae, laudantium ad corporis commodi et totam aspernatur.
            Illum, ex alias.
          </p>
        </div>
        <div className="flex justify-center items-center p-5">
          <button className="bg-white rounded-2xl text-black w-full h-10">Entre em contato!</button>
        </div>
      </div>
    </main>
  );
}
