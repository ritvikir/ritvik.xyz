import Image from "next/image";
import Link from "next/link";
import Navbar from "/components/navbar";

export default function Home() {
  const isOnline = true;

  return (
    <div className="max-w-2xl px-4 mx-auto">
      <Navbar />
      <div className="inline-block">
        <div className="blur-[1.5px] inline-block">
          <div
            className={`w-2.5 h-2.5  rounded-full ${
              isOnline ? "bg-green-300 animate-pulse" : "bg-gray-300"
            }`}
          >
            {" "}
          </div>
        </div>
        <div className="inline-block ml-1 text-gray-400">
          <p className="text-sm">online, 1:33PM</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="">hey, im ritvik 👋</p>

        <p className="mt-2">i was born in ohio but now live in san diego, ca</p>
      </div>
    </div>
  );
}
