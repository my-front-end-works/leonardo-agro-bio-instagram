import Image from "next/image";
import Header from "./_components/header";
import Icons from "./_components/icons";
import Cards from "./_components/cards";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-start items-center gap-5">
      <div className="w-full h-auto">
        <Header />
      </div>
      <div className="w-full h-auto">
        <Cards />
      </div>
      <div className="w-full h-auto">
        <Footer />
      </div>
    </main>
  );
}

{
  /* <div className="w-full h-auto flex justify-center items-center">
  <Icons/>
</div> */
}
