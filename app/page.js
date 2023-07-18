import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <nav className="font-semibold px-4 py-6 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <span className="flex items-center self-center ">ritvik.xyz</span>
          <div className="  w-auto" id="navbar-default">
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
    </div>
  );
}
