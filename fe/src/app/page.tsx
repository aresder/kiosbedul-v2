import Banner from "@/components/page/Banner";
import FaqPage from "@/components/page/Faq";
import GamesPage from "@/components/page/products/Games";
import PulsaPage from "@/components/page/products/Pulsa";
import Promo from "@/components/page/Promo";
import faqData from "@/lib/data/faq";
import gamesData from "@/lib/data/products/games";
import pulsaData from "@/lib/data/products/pulsa";
import promoData from "@/lib/data/promo";

export default function Home() {
  return (
    <div className="md:bg-gradient-to-bl md:from-orange-800 md:via-[#121a23] md:to-[#121a23]">
      <div className="container py-4 pt-16 sm:pt-20">
        <Banner />
        {/* PROMO */}
        <Promo promoList={promoData} />

        {/* PRODUCT LIST */}
        {/* GAMES */}
        <GamesPage gameList={gamesData} />
        {/* Pulsa */}
        <PulsaPage pulsaList={pulsaData} />

        {/* FAQ */}
        <FaqPage faqList={faqData} />
      </div>
    </div>
  );
}
