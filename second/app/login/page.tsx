import Image from "next/image";
import { describe } from "node:test";
export const metadata = {
  title:"Login",
  describe:"Build by page"
}

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center">
        Login page
      </div>
    </div>
  );
}
