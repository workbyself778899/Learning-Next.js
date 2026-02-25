import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl flex gap-3">
      <Link href="/news/id?lang=en"> English </Link>
      <Link href="/news/id?lang=ne"> Nepali </Link>
    </div>
  );
}
