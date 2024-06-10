import type { Metadata } from "next";
import SideBar from "./sidebar";

export const metadata: Metadata = {
  title: "Administrator - KiosBedul.id",
  description: "KiosBedul.id #1 Top-Up All Provider Tangerang",
};

export default function WorkplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-[#121a23]">
      <SideBar />
      <div className="p-8 h-full max-w-full pt-14 my-12 sm:my-0 sm:sidebar-close">
        {children}
      </div>
    </div>
  );
}
