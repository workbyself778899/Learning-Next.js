import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      


      <div className="">
        FIrst page
        <button className="animate-bounce ">My Spin</button>
        
        <div className="flex gap-3">
          <div className="w-12 h-12 animate-spin  bg-pink-500 mt-2"></div>
        <div className="w-12 h-12 animate-spin bg-red-500 mt-2"></div>
        <div className="w-12 h-12 animate-spin bg-blue-500 mt-2"></div>
        </div>
        

    <div className="rotate-45  bg-amber-300">Hello</div>


      </div>
    </div>
  );
}
