"use client";

import Image from "next/image";
import React, { useState } from "react";

const Banner: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="container py-4">
      <div className="relative">
        <Image
          className="w-full object-cover rounded-xl shadow-2xl shadow-orange-500"
          src="/images/banner/banner-kiosbedul.png"
          alt="Banner"
          width={1080}
          height={900}
        />
        {isActive && (
          <div className="absolute inset-0 bg-black opacity-50"></div>
        )}
      </div>
    </div>
  );
};

export default Banner;
