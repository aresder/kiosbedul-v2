"use client";
import { useState } from "react";
import BoxButtonComponent from "./BoxButton";

interface InputProps {
  children: React.ReactNode;
  title: string;
  submit: boolean;
}

const BoxFormComponent = ({ children, title, submit }: InputProps) => {
  const [showButton] = useState<boolean>(submit);
  return (
    <div className="bg-[#162331] rounded-xl p-4 space-y-8">
      <h1 className="text-xl border-b border-white/10 pb-4 pl-4">{title}</h1>
      <div>
        <div className="flex flex-col gap-8 py-8">
          {children}
          {/* Button (Save & Cancel) */}
          {showButton && <BoxButtonComponent />}
        </div>
      </div>
    </div>
  );
};

export default BoxFormComponent;
