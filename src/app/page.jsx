import Image from "next/image";
import Header from "./_components/header";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-full h-screen flex flex-col justify-start items-start md:p-5">
        <Header />
      </div>
    </main>
  );
}
