"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PromoList {
  id: number;
  title: string;
  game: string;
  price: string;
  from: string;
  discount: string;
  url: string;
  image: string;
}

const Promo = ({ promoList }: { promoList: PromoList[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [isRight, setIsRight] = useState<boolean>(false);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setIsLeft(scrollLeft === 0);
    setIsRight(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    const current = scrollRef.current;

    if (current) {
      current.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (current) {
        current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-16">
      <div className="w-full text-white">
        <div className="flex gap-4 px-4 pb-8">
          <span className="border-r-4 border-orange-500"></span>
          <h1 className="text-base md:text-2xl text-[#FBf8f3] uppercase py-2 font-semibold">
            🔥 Promo
          </h1>
        </div>
      </div>

      <div className="relative">
        {/* Tombol kiri */}
        {!isLeft && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full text-3xl z-20 active:scale-90"
            onClick={scrollLeft}>
            &lt;-
          </button>
        )}

        {/* Tombol kanan */}
        {!isRight && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full text-3xl z-20 active:scale-90"
            onClick={scrollRight}>
            -&gt;
          </button>
        )}

        <div
          ref={scrollRef}
          className={
            isRight || isLeft
              ? `flex mx-8 gap-4 md:gap-8 snap-x overflow-x-hidden snap-mandatory scroll-smooth`
              : `flex mx-8 gap-4 md:gap-8 snap-x overflow-x-hidden snap-mandatory scroll-smooth mask`
          }>
          {promoList.map((promo) => (
            <Link
              key={promo.id}
              href={"/"}
              className="snap-center flex-shrink-0 w-auto md:w-[28rem]">
              <div className="flex flex-col gap-4 bg-[#1f2d3c] bg-opacity-45 border border-transparent rounded-lg p-4 hover:bg-opacity-30 ease-in-out duration-300 hover:scale-95 active:scale-90 hover:border hover:border-orange-500">
                <Image
                  className="rounded-lg w-full size-20 md:w-full md:size-40"
                  src={promo.image}
                  alt="mobile logends"
                  width={1000}
                  height={1000}
                  quality={100}
                />
                <div className="flex flex-col gap-1">
                  <span className="text-base md:text-xl font-semibold">
                    {promo.title}
                  </span>
                  <h3 className="text-xs md:text-sm opacity-50">
                    {promo.game}
                  </h3>

                  <div className="relative text-xs flex mt-4 w-full items-center">
                    <div className="flex flex-col md:flex-row md:items-center gap-x-4 w-full">
                      <h1 className="text-base md:text-xl font-semibold text-emerald-300 drop-shadow-lg">
                        Rp. {promo.price}
                      </h1>
                      <span className="text-xs md:text-sm line-through opacity-75 text-red-300">
                        Rp. {promo.from}
                      </span>
                    </div>
                    <span className="text-xs md:text-sm bg-emerald-800 rounded-lg px-2 text-white absolute right-0 my-auto">
                      <span className="md:hidden">-{promo.discount}</span>
                      <span className="hidden md:block">
                        Discount {promo.discount}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promo;
