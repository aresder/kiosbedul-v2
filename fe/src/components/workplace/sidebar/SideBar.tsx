import Link from "next/link";
import Image from "next/image";
import { createContext, useState } from "react";

const SidebarContext = createContext({
  expanded: true,
});
export const SideBarLayoutComponent = ({ children }: any) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`z-50 sm:h-full fixed flex flex-col justify-between top-0 left-0 backdrop-blur-2xl bg-white/30 sm:pb-4 px-2 transition-all duration-500 ease-in-out ${
        expanded
          ? "w-[14rem] pb-4 h-full"
          : "w-[4.5rem] rounded-br-md sm:rounded-none sm:h-full sm:absolute"
      }`}>
      {/* Header/Logo sidebar */}
      <div
        className={`flex sticky top-0 left-0 items-center sm:border-b sm:border-orange-200 py-4 ${
          expanded
            ? "justify-between border-b border-orange-200"
            : "justify-center sm:bg-white"
        }`}>
        <Image
          className={`overflow-hidden transition-all ${
            expanded ? "w-11" : "w-0 hidden"
          }`}
          src={"/images/logo/kiosbedul-logo.png"}
          alt="Logo"
          width={500}
          height={500}
        />
        <button
          onClick={() => setExpanded(!expanded)}
          className="sticky font-semibold opacity-85 hover:opacity-100 hover:bg-orange-200 rounded-lg p-2 duration-300">
          {expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <SidebarContext.Provider value={{ expanded }}>
        <div
          className={`sm:block ${
            expanded
              ? "overflow-y-auto invisible hover:visible hover:scroollbar pr-4 pt-4"
              : "hidden"
          }`}>
          {children}
        </div>
      </SidebarContext.Provider>

      {/* Footer sidebar */}
      <div className={`sm:block ${expanded ? "block" : "hidden my-8"}`}>
        <span
          className={`text-sm opacity-50 transition-all overflow-hidden ${
            expanded ? "w-full" : "w-0 hidden"
          }`}>
          <i>Hai</i>
        </span>
        <Link href={"/workplace/user"} className="hover:opacity-80">
          <div
            className={`flex items-center gap-x-2 ${
              expanded ? "justify-start" : "justify-center"
            }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h1
              className={`text-sm transition-all overflow-hidden ${
                expanded ? "w-full" : "w-0 hidden"
              }`}>
              Angga Riadi Syahputra
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarContext;
