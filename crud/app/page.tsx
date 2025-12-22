import Image from "next/image";
import Link from "next/link";

export default function Home() { 
  return (
    <div className="flex  justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="my-6 p-9 border-2">
        <div className="text-2xl">Hello</div>
        <div>My messgae</div>
        <div className="flex gap-10">
          <Link href={'/edit/sd '} className="px-9 py-3 bg-amber-100 " >Edit</Link>
          <button className="bg-red-500 text-white px-10 py-3" >Delete</button>
        </div>

      </div>
    </div>
  );
}
