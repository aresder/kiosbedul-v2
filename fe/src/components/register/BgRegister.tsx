import Image from "next/image";

export const BgRegister = () => {
  return (
    <Image
      className="mix-blend-difference object-cover bg-no-repeat"
      src="/images/background/register/bg-gusion.jpg"
      alt="Background"
      loading="lazy"
      quality={100}
      fill
    />
  );
};
