"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "./validation";
import { BgRegister } from "@/components/register/BgRegister";
import Link from "next/link";
import AlertInformation from "@/components/register/AlertInformation";
import axios from "axios";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    setIsLoading(true);
    try {
      // const URL = process.env.API_URL_REGISTER;
      // if (!URL) {
      //   throw new Error("API URL is not defined");
      // }
      const response = await axios.post(
        "https://v2.kiosbedul.id/api/v1/register",
        {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // if (!response) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || "Failed to register");
      // }

      setSuccess(true);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-black/10 via-black/50 to-black/80 w-full">
      {/* Background image (Gusion) */}
      <BgRegister />
      <div>
        {success && (
          <span className="absolute z-50">
            <AlertInformation />
          </span>
        )}
      </div>

      <div className="container h-screen flex items-center justify-center">
        <Link
          className="absolute m-8 py-2 px-4 rounded-lg text-white/50 hover:text-white active:bg-slate-900 z-50 text-sm sm:text-2xl bg-slate-900/80 top-0 left-0 mb-8"
          href="/">
          X
        </Link>

        <div className="flex flex-col gap-4 py-8 px-12 mt-8 sm:mt-0 rounded-lg lg:backdrop-blur-none lg:hover:backdrop-blur-sm lg:backdrop-brightness-75 lg:hover:backdrop-brightness-50 backdrop-brightness-50 backdrop-blur-[2px] text-white transition ease-in-out duration-700">
          <h1 className="text-2xl sm:text-4xl font-semibold">Daftar</h1>
          <span className="text-white/80 text-xs sm:text-base">
            Mohon masukan data diri Anda dengan valid!
          </span>

          <div className="text-sm w-4/5">
            {error && (
              <span className=" font-semibold text-red-500">{error}</span>
            )}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <label
                  className="text-white/80 text-xs sm:text-sm"
                  htmlFor="full_name">
                  Full name
                </label>
                <input
                  className="text-xs sm:text-sm bg-slate-800 outline-none focus:bg-slate-900 py-2 px-4 rounded-lg duration-200 peer:"
                  type="text"
                  placeholder="Full name"
                  {...register("full_name")}
                  id="full_name"
                  required
                />
                <span className="text-red-500 text-sm">
                  {errors.full_name && errors.full_name?.message}
                </span>
              </div>

              <div className="grid gap-2">
                <label
                  className="text-white/80 text-xs sm:text-sm"
                  htmlFor="email">
                  Email
                </label>
                <input
                  className="text-xs sm:text-sm bg-slate-800 outline-none focus:bg-slate-900 py-2 px-4 rounded-lg duration-200 peer:"
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  id="email"
                  required
                />
                <span className="text-red-500 text-sm">
                  {errors.email && errors.email?.message}
                </span>
              </div>

              <div className="grid gap-2">
                <label
                  className="text-xs sm:text-sm text-white/80"
                  htmlFor="password">
                  Password
                </label>
                <input
                  className="text-xs sm:text-sm bg-slate-800 outline-none focus:bg-slate-900 py-2 px-4 rounded-lg duration-200"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  id="password"
                  required
                />
                <span className="text-red-500 text-sm">
                  {errors.password && errors.password?.message}
                </span>
              </div>

              <div className="grid gap-2">
                <label
                  className="text-xs sm:text-sm text-white/80"
                  htmlFor="phone_number">
                  No Whatsapp
                </label>
                <input
                  className="text-xs sm:text-sm bg-slate-800 outline-none focus:bg-slate-900 py-2 px-4 rounded-lg duration-200"
                  type="number"
                  placeholder="08xxx"
                  {...register("phone_number")}
                  id="phone_number"
                  required
                />
                <span className="text-red-500 text-sm">
                  {errors.phone_number && errors.phone_number?.message}
                </span>
              </div>
            </div>

            {/* <div className="text-[12px] sm:text-base mt-4">
              <input
                type="checkbox"
                className="accent-blue-500 mx-2 cursor-pointer sm:size-4"
                required
              />
              <span>
                Saya setuju dengan {""}
                <Link href={"/terms"} className="text-blue-500 hover:underline">
                  Syarat Ketentuan
                </Link>
                {""} dan {""}
                <Link
                  href={"/privacy"}
                  className="text-blue-500 hover:underline">
                  Kebijakan Privasi
                </Link>
                .
              </span>
            </div> */}
            <div className="mt-8">
              <button
                type="submit"
                className="text-sm sm:text-base btn-lr disabled:opacity-50"
                disabled={isLoading}>
                {isLoading ? "Mendaftar..." : "Daftar"}
              </button>
            </div>
          </form>

          <div className="text-sm sm:text-base">
            <span>Sudah punya akun gan? </span>
            <Link
              className="text-blue-500 stroke-black hover:underline hover:underline-offset-2"
              href="/login">
              Langsung aja login -&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
