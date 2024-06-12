"use client";
import { Input } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

interface InputProps {
  input: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  auto: string;
}

const BoxInputComponent = ({
  input,
  name,
  type,
  label,
  value,
  onChange,
  auto,
}: InputProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm: justify-between gap-y-4 px-8">
      {/* <label htmlFor={name} className="text-sm sm:text-base">
        {input}
      </label> */}
      <Input
        size="sm"
        radius="sm"
        type={type}
        name={name}
        id={name}
        label={label}
        value={value}
        onChange={onChange}
        autoComplete={auto}
        required
      />
    </div>
  );
};

export default BoxInputComponent;
