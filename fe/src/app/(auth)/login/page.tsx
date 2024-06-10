"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BgLogin } from "@/components/login/BgLogin";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(false);
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return setError(errorData.message || "Data tidak valid");
      }

      return router.push("/workplace");
    } catch (error: any) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
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
          <h1 className="text-2xl sm:text-4xl font-semibold">Masuk</h1>
          <span className="text-white/80 text-sm sm:text-base">
            Login menggunakan akun yang sudah terdaftar!
          </span>

          <div>
            {" "}
            {error && (
              <span className="font-semibold text-red-500">{error}</span>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-4">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Link
                  href="/forgot"
                  className="text-sm sm:text-base w-1/2 text-blue-500 stroke-black hover:underline hover:underline-offset-2">
                  Lupa Password?
                </Link>
              </div>
            </div>
            <div className="mt-8 ">
              <button
                type="submit"
                className="text-sm sm:text-base btn-lr disabled:opacity-50"
                disabled={isLoading}>
                {isLoading ? "Tunggu..." : "Masuk"}
              </button>
            </div>
          </form>

          <div className="text-sm sm:text-base">
            <span>Belum punya akun? </span>
            <Link
              className="text-blue-500 stroke-black hover:underline hover:underline-offset-2"
              href="/register">
              Bikin dulu gan -&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
