import Image from "next/image";

export default function Header() {
  return (
    <main className="w-full md:w-[99%] flex justify-start items-center h-auto bg-[url('/header/background.jpg')] bg-cover bg-center rounded-b-2xl md:rounded-2xl p-5 md:mt-2">
      <div className="w-full md:w-2/5 h-auto grid grid-rows-[auto_auto_auto] gap-5 justify-center md:justify-start md:items-center ">
        <div className="w-full flex flex-row justify-start items-center gap-5 ">
          <div className="relative w-30 md:w-25 h-20 overflow-auto rounded-lg ">
            <Image
              src={"/header/leonardo-icon.jpeg"}
              fill
              alt="Leonardo Pires"
              className="object-cover rounded-full"
            />
          </div>
          <div className="w-full h-auto">
            <h1 className="text-xl md:text-3xl">Leonardo Pires</h1>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 ">
          <h1 className="text-2xl md:text-6xl">Profissional no ramo do agro</h1>
          <p className="text-sm md:text-xl">
            Estudante de Zootecnia, interessado em produção animal, nutrição,
            manejo e bem-estar dos animais. Busco aprimorar meus conhecimentos e
            desenvolver habilidades práticas que contribuam para uma produção
            agropecuária mais eficiente, sustentável e responsável.
          </p>
        </div>
        <div className="w-full flex justify-center items-center md:justify-start">
          <button className="bg-white rounded-2xl text-black w-full h-12">
            Entre em contato!
          </button>
        </div>
      </div>
    </main>
  );
}
