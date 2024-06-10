"use client";

import { Button } from "@nextui-org/react";
const BoxButtonComponent = () => {
  return (
    <div className="flex justify-end items-center gap-x-4 mr-8 translate-y-4">
      <Button type="reset" className="hover:text-red-500 py-2 px-4 rounded-md">
        Cancel
      </Button>
      <Button
        type="submit"
        className="bg-emerald-500 py-2 px-6 rounded-md hover:bg-emerald-600">
        Save
      </Button>
    </div>
  );
};

export default BoxButtonComponent;
