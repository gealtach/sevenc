import Image from "next/image";
import wall from '@/app/wall.jpeg'
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-white">
      <h1 className="text-black text-3xl p-4 font-bold" >Sitio en construcción<span className="animate-ping duration-1000">...</span></h1>
      <Image src={wall} height={170} width={300} alt="seven"/>
    </main>
  );
}
