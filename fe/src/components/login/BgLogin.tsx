import Image from "next/image";

export const BgLogin = () => {
  return (
    <Image
      className="mix-blend-overlay object-cover bg-no-repeat"
      src="/images/background/login/bg-lunox.jpg"
      alt="Background"
      loading="lazy"
      quality={100}
      fill
    />
  );
};
