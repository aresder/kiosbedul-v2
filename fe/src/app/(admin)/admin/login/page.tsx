import { BgLogin } from "@/components/login/BgLogin";
import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="relative bg-gradient-to-b from-white/30 via-white/20 to-black/80 w-full">
      {/* Background image (Lunox) */}
      <BgLogin />

      <div className="container h-screen flex items-center justify-center">
        <Link
          className="absolute m-8 py-2 px-4 rounded-lg text-white/50 hover:text-white active:bg-slate-900 z-50 text-sm sm:text-2xl bg-slate-900/80 top-0 left-0 mb-8"
          href="/">
          X
        </Link>
        <div className="flex flex-col gap-4 py-8 px-12 mt-8 sm:mt-0 rounded-lg lg:backdrop-blur-none lg:hover:backdrop-blur-sm lg:backdrop-brightness-75 lg:hover:backdrop-brightness-50 backdrop-brightness-50 backdrop-blur-[2px] text-white transition ease-in-out duration-700 ">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Atmin datang 😋
          </h1>
          <span className="text-white/80 text-sm sm:text-base">Login min</span>

          <form className="mt-4">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <label
                  className="text-white/80 text-sm sm:text-base"
                  htmlFor="email">
                  Email
                </label>
                <input
                  className="text-sm sm:text-base bg-slate-800 outline-none focus:bg-slate-900 py-2 px-4 rounded-lg duration-200 peer:"
                  type="text"
                  placeholder="email"
                  id="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm sm:text-base text-white/80"
                  htmlFor="password">
                  Password
                </label>
                <input
                  className="text-sm sm:text-base bg-slate-800 outline-none focus:bg-slate-900 py-2 px-4 rounded-lg duration-200"
                  type="Password"
                  placeholder="Password"
                  id="password"
                  required
                />
                {/* <Link
                  href="/forgot"
                  className="text-sm sm:text-base w-1/2 text-blue-500 stroke-black hover:underline hover:underline-offset-2">
                  Lupa Password?
                </Link> */}
              </div>
            </div>
            <div className="mt-8 ">
              <button
                type="submit"
                className="text-sm sm:text-base btn-lr disabled:opacity-50">
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
