"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="h-auto w-full rounded-b-3xl bg-[url('/header/background.jpg')] bg-cover bg-center md:rounded-none">
      <div className="flex h-auto w-full flex-col items-center justify-center gap-10 p-5">
        {/* Identificação mobile */}
        <div className="flex h-auto w-full items-center justify-center gap-3 sm:hidden">
          <div className="relative h-10 w-12 overflow-hidden rounded-full">
            <Image
              src="/header/leonardo-icon.jpeg"
              fill
              alt="Foto de Leonardo Pires"
              sizes="48px"
              className="rounded-full object-cover"
            />
          </div>

          <div className="h-auto w-full">
            <h1 className="text-sm font-semibold text-white">Leonardo Pires</h1>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex h-auto w-full flex-col gap-10 sm:p-10 md:p-30 xl:p-60">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Profissional no Agronegócio
          </h2>

          <p className="text-md text-white md:text-xl">
            Estudante de Zootecnia, interessado em produção animal, nutrição,
            manejo e bem-estar dos animais. Busco aprimorar meus conhecimentos e
            desenvolver habilidades práticas que contribuam para uma produção
            agropecuária mais eficiente, sustentável e responsável.
          </p>

          <div className="flex h-auto w-full items-center justify-start">
            <a
              href="#contato"
              className="flex h-12 w-full items-center justify-center rounded-3xl bg-white font-semibold text-black transition-colors hover:bg-gray-200 md:h-15 md:w-1/2 md:rounded xl:w-1/3"
            >
              Entre em contato!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
