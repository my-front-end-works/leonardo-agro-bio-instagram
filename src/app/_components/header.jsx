import Image from "next/image";

export default function Header() {
  return (
    <main className="w-full flex justify-center items-center h-auto md:h-auto bg-[url('/header/background.jpg')] bg-cover bg-center rounded-b-2xl md:rounded-2xl p-5">
      <div className="w-full h-auto grid grid-rows-[auto_auto_auto] gap-5 justify-center md:items-center ">
        <div className="w-full flex flex-row justify-start items-center gap-5 ">
          <div className="relative w-15 h-15 overflow-auto rounded-lg ">
            <Image
              src={"/header/leonardo-icon.jpeg"}
              fill
              alt="Leonardo Pires"
              className="object-cover  rounded-full"
            />
          </div>
          <div className="w-full h-auto">
            <h1 className="text-md">Leonardo Pires</h1>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 ">
          <h1 className="text-2xl">Profissional no ramo do agro</h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsum
            sunt ipsa, reprehenderit perferendis dolor facere excepturi quidem
            minus beatae, laudantium ad corporis commodi et totam aspernatur.
            Illum, ex alias.
          </p>
        </div>
        <div className="w-full flex justify-center items-center ">
          <button className="bg-white rounded-2xl text-black w-full h-12">
            Entre em contato!
          </button>
        </div>
      </div>
    </main>
  );
}
