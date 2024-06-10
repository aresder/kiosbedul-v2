import Image from "next/image";
import Link from "next/link";

interface PulsaList {
  id: number;
  provider: string;
  url: string;
  image: string;
}

const PulsaPage = ({ pulsaList }: { pulsaList: PulsaList[] }) => {
  return (
    <div className="w-full text-white mt-16">
      <div className="flex gap-4 px-4">
        <span className="border-r-4 border-orange-500"></span>
        <h1 className="text-base md:text-2xl text-white uppercase py-2 font-semibold">
          📞 Pulsa
        </h1>
      </div>
      <div className="mt-8 flex justify-center items-center md:mx-8">
        <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-4">
          {pulsaList.map((pulsa) => (
            <Link
              href={pulsa.url}
              className="relative hover:scale-105 duration-200"
              key={pulsa.id}>
              <div className="absolute text-white opacity-0 hover:opacity-80 bg-gradient-to-b from-white/10 to-black w-full h-full rounded-xl duration-300 flex flex-col justify-end items-start p-4">
                <h1 className="text-xs md:text-xl font-semibold">
                  {pulsa.provider}
                </h1>
              </div>
              <Image
                className="w-full h-auto rounded-xl hover:scale-105"
                src={pulsa.image}
                alt=""
                width={1000}
                height={1000}
                quality={100}
                priority={true}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PulsaPage;
