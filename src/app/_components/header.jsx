import Image from "next/image";

export default function Header() {
  return (
    <main className="w-full h-auto bg-[url('/header/background.jpg')] bg-cover bg-center rounded-b-3xl md:rounded-none">
      <div className="w-full h-auto flex flex-col justify-center items-center p-5 gap-10">
        <div className="w-full h-auto flex justify-center items-center gap-2 sm:hidden">
          <div className="relative w-12 h-10 md:w-20 md:h-18 overflow-auto rounded-lg ">
            <Image
              src={"/header/leonardo-icon.jpeg"}
              fill
              alt="Leonardo Pires"
              className="object-cover rounded-full"
            />
          </div>
          <div className="w-full h-auto">
            <h1 className="text-sm md:text-3xl">Leonardo Pires</h1>
          </div>
        </div>
        <div className="w-full h-auto sm:p-10 md:p-30 xl:p-60 flex flex-col gap-10">
          <h1 className="text-4xl md:text-6xl">Profissional no agronegócio</h1>

          <p className="text-md md:text-xl ">
            Estudante de Zootecnia, interessado em produção animal, nutrição,
            manejo e bem-estar dos animais. Busco aprimorar meus conhecimentos e
            desenvolver habilidades práticas que contribuam para uma produção
            agropecuária mais eficiente, sustentável e responsável.
          </p>
          <div className="w-full h-auto flex justify-start items-center">
            <button className="w-full md:w-1/2 xl:w-1/3 h-10 md:h-15 bg-white text-black rounded-3xl md:rounded">
              Entre em contato!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
