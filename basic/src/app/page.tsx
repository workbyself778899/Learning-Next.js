"use client"
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-2xl">
      <p>Selecting the Route</p>

      <div className="w-screen gap-4 flex justify-center items-center mt-10">
        <Link href="/about" className="px-5 py-2 border bg-black text-white rounded-[100]">
          About
        </Link>
        <Link href="/blog" className="px-7 py-2 border bg-black text-white rounded-[100]">
          Blog
        </Link>
        <Link href="/product" className="px-7 py-2 border bg-black text-white rounded-[100]">
          Product
        </Link>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center ">

        <ul className="list-disc ml-5 space-y-1 text-gray-800">
          <li>Routing is defined according to the file structure.</li>
          <li>For dynamic routes, we create a folder using this "[folder_name]".</li>
        </ul>
        <ol className="list-decimal ml-5 space-y-1 text-gray-800">
          <li> docs Folder is for "Catch-all Segments" </li>
        </ol>
      </div>
    </div>
  );
}
