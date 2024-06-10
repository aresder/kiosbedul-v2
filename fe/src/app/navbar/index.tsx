"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const disableNavbar = ["/login", "/register", "/forgot", "/admin/login"];

const NavBar = () => {
  const pathname = usePathname();
  if (
    pathname.includes("/workplace") ||
    pathname.includes("/member") ||
    disableNavbar.includes(pathname)
  )
    return null;

  return (
    <div className="fixed top-0 z-50 bg-[#121a23]/80 w-full py-2 px-4 shadow-sm border-b border-orange-500/30 backdrop-blur-lg">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              className="w-10 sm:w-16 h-auto"
              src="/images/logo/kiosbedul-logo.png"
              alt="Logo"
              width={1000}
              height={1000}
            />
          </Link>
          <div className="flex justify-center items-center gap-x-8">
            <Link
              href={"/search"}
              className="flex justify-center items-center gap-4 text-sm border border-orange-500/20 py-2 px-4 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 sm:size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <h1 className="hidden sm:block">Search</h1>
            </Link>
            <Link
              href={"/login"}
              className="text-sm sm:text-base font-semibold hover:opacity-80 active:opacity-50">
              Masuk
            </Link>
            <Link
              href={"/register"}
              className="hidden sm:block font-semibold bg-orange-500 py-2 px-4 rounded-md hover:bg-opacity-80 active:bg-opacity-50 duration-150">
              Register
            </Link>

            {/* Button */}
            <div className="sm:hidden flex flex-col gap-2 cursor-pointer">
              <span className="block border-t border-white w-6"></span>
              <span className="block border-t border-white w-6"></span>
              <span className="block border-t border-white w-6"></span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      {/* <div className="fixed w-full h-svh sm:hidden text-black bg-white/90 backdrop-blur-3xl top-0 left-1/3 rounded-lg ">
        test
      </div> */}
    </div>
  );
};

export default NavBar;
