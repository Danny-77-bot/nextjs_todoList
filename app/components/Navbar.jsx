import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-slate-900 text-fuchsia-50">
      <div className="text-xl font-bold">
        <Link href="/">Dcoding</Link>
      </div>
      <div className="space-x-4">
        <Link href="/addTopic" className="hover:underline">
          Add Topic
        </Link>
      </div>
    </nav>
  );
}
