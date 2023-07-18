import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mt-10 font-semibold text-gray-300 pt-6 pb-2">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
        <h1 class="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent inline-block bg-clip-text">ritvik.xyz</h1>
        </div>
        
        <div className="w-auto" id="navbar-default">
          <ul className="flex flex-row space-x-8 mt-0 ">
            <li className=" py-1 ">
              <Link href="" aria-current="page">
                github
              </Link>
            </li>
            <li className="py-1 ">
              <Link href="" aria-current="page">
                twitter
              </Link>
            </li>
            <li className=" py-1 ">
              <Link href="">words</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
