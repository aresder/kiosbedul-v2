"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const disableFooter = ["/login", "/register", "/forgot", "/admin/login"];

const PageFooter = () => {
  const pathname = usePathname();
  if (
    pathname.includes("/workplace") ||
    pathname.includes("/member") ||
    disableFooter.includes(pathname)
  )
    return null;

  return (
    <div className="w-full py-4 bg-[#0f171f] border-t border-orange-500/20 mt-16">
      <div className="container mt-8">
        <div className="flex flex-col lg:flex-row gap-x-20">
          <div className="flex flex-col md:items-start gap-y-4">
            <Image
              className="w-16 md:w-32 h-auto"
              src="/images/logo/kiosbedul-logo.png"
              alt="logo"
              width={1000}
              height={1000}
            />
            <p className="text-white/90 mt-4 px-4 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              saepe vero dignissimos nulla iste dicta repellendus provident
              culpa est ex?
            </p>
          </div>
          <span className="lg:hidden block border-t border-orange-200/20 my-4"></span>
          <div className="shrink-0 px-4">
            <div className="flex flex-wrap gap-x-20 gap-y-4">
              <div className="space-y-6 mt-8">
                <h1 className="text-orange-400 text-base">Peta Situs</h1>
                <ul className="space-y-4">
                  <li>
                    <Link href={"/"} className="hover:underline text-sm">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="hover:underline text-sm">
                      Daftar Harga
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="hover:underline text-sm">
                      Cek Transaksi
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="hover:underline text-sm">
                      Ulasan
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 mt-8">
                <h1 className="text-orange-400 text-base">Dukungan</h1>
                <ul className="space-y-4">
                  <li>
                    <Link href={"/"} className="hover:underline text-sm">
                      Whatsapp
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="hover:underline text-sm">
                      Grub Whatsapp
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="hover:underline text-sm">
                      Donasi
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 mt-8">
                <h1 className="text-orange-400 text-base">Legalitas</h1>
                <ul className="space-y-4">
                  <li>
                    <Link href={"/"} className="hover:underline text-sm">
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="hover:underline text-sm">
                      Syarat & Ketentuan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="block border-t border-orange-200/20 my-8"></span>
        <p className="text-white/50 text-center md:text-start">
          &copy; 2024 Website topup game tercepat no. 1 di Tangerang!. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PageFooter;
