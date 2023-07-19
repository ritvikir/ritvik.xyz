import Image from "next/image";
import Link from "next/link";
import Navbar from "/components/navbar";
import Status from "/components/status";

export default function Home() {
  const isOnline = true;

  return (
    <div className="max-w-2xl px-4 mx-auto">
      <Navbar />
      <Status />
      <div className="mt-10">
        <p className="">hey, im ritvik 👋</p>
        <p className="mt-2">i was born in ohio but now live in san diego, ca</p>
        <p className="mt-2">currently im working on a hacker house, exploring VR/AR, and tinkering with LLMs</p>
        <p className="mt-2">prev. i was involved with a few startups, tried (and failed) some of my own </p>
      </div>


    </div>
  );
}
