
import Cards from "./_components/cards";
import Experience from "./_components/experience";

export default function Home() {
  return (
    <main className="w-full h-auto flex flex-col justify-between items-center gap-5">
      <div className="w-full h-auto">
        <Cards />
      </div>
      <div className="w-full h-auto">
        <Experience/>
      </div>
    </main>
  );
}
