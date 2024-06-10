"use client";

import Link from "next/link";

const AlertInformation: any = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900/60 backdrop-blur-sm w-full -z-20"></div>
      <div className="py-4 px-8 bg-slate-900 rounded-lg flex flex-col gap-2 transition duration-200">
        <p className="text-lg text-green-500">Register successfully 😁🎉</p>
        <span className="text-white">
          please
          <Link href={"/login"} className="text-blue-500 hover:underline">
            {""} Login -&gt;
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AlertInformation;
