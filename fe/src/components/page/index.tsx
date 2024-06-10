import Faq from "@/components/faq/Faq";
import faqData from "@/lib/data/faq";
import Promo from "@/components/promo";
import promoData from "@/lib/data/promo";
import GamesPage from "../products/games";
import gamesData from "@/lib/data/products/games";
import PulsaPage from "../products/pulsa";
import pulsaData from "@/lib/data/products/pulsa";
import Banner from "../banner/Banner";

const Page = () => {
  return (
    <div className="md:bg-gradient-to-bl md:from-orange-800 md:via-[#121a23] md:to-[#121a23]">
      <div className="container py-4 mt-12 sm:mt-20">
        <Banner />
        {/* PROMO */}
        <Promo promoList={promoData} />

        {/* PRODUCT LIST */}
        {/* GAMES */}
        <GamesPage gameList={gamesData} />
        {/* Pulsa */}
        <PulsaPage pulsaList={pulsaData} />

        {/* FAQ */}
        <Faq faqList={faqData} />
      </div>
    </div>
  );
};
export default Page;
