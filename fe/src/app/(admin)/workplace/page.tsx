import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard - KiosBedul.id",
};

import DashboardChartComponent from "@/components/workplace/contents/dashboard/Chart";

export default function Workplace() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="w-full sm:px-4 py-8 text-white">
        <div className="w-full flex flex-col items-stretch gap-4 sm:gap-8">
          <div className="bg-[#162331] rounded-md p-4">
            <h1 className="text-2xl text-red-500 font-medium">Attention!</h1>
            <p className="italic text-sm mt-3 border-b border-white/10 pb-4">
              Bayar VPS: 19 hari 20 jam 30 menit 22 detik
            </p>
            <div className="opacity-80">
              <p className="text-xs mt-4">Abaikan jika sudah membayar</p>
              <p className="text-xs mt-4">
                Sistem otomatis! tidak perlu konfirmasi admin
              </p>
            </div>
            <button className="text-sm font-medium py-2 px-4 bg-gradient-to-r from-red-800 to-red-400 rounded-md mt-4 transition-all duration-300 ease-in-out hover:scale-95 active:opacity-50">
              Bayar VPS
            </button>
          </div>

          <div className="flex flex-row sm:gap-8 gap-4">
            <div className="bg-[#162331] rounded-md p-4 flex flex-col gap-4 w-1/2">
              <h1 className="capitalize text-base">penghasilan bersih</h1>
              <span className="text-xl text-emerald-300">Rp. 20.000</span>
            </div>

            <div className="bg-[#162331] rounded-md p-4 flex flex-col gap-4 w-1/2">
              <h1 className="capitalize text-base">penghasilan kotor</h1>
              <span className="text-xl text-red-400">Rp. 20.000</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 items-stretch">
            <div className="bg-[#162331] rounded-md p-4 flex flex-col gap-4 w-full sm:w-1/2">
              <h1 className="capitalize text-base">total processing</h1>
              <span className="text-xl text-purple-400">Rp. 20.000 (4x)</span>
            </div>

            <div className="flex sm:flex-row sm:gap-8 gap-4 w-full">
              <div className="bg-[#162331] rounded-md p-4 flex flex-col gap-4 w-1/2">
                <h1 className="capitalize text-base">total pending</h1>
                <span className="text-xl text-yellow-400">Rp. 20.000 (0x)</span>
              </div>

              <div className="bg-[#162331] rounded-md p-4 flex flex-col gap-4 w-1/2">
                <h1 className="capitalize text-base">total success</h1>
                <span className="text-xl text-blue-400">Rp. 20.000 (23x)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-20">
          <DashboardChartComponent />
        </div>
      </div>
    </>
  );
}
