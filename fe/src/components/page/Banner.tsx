"use client";

import { Image } from "@nextui-org/react";
// import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import React, { useState } from "react";

const Banner = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="container py-4 sm:px-12">
      <div className="relative w-full flex justify-center">
        <Image
          as={NextImage}
          className="w-full h-auto shadow-xl shadow-orange-500"
          src="/images/banner/banner-kiosbedul.png"
          alt="Banner"
          sizes="300em"
          width={1080}
          height={960}
          quality={100}
        />
        {isActive && (
          <div className="absolute inset-0 bg-black opacity-50"></div>
        )}
      </div>
    </div>
  );
};

export default Banner;
