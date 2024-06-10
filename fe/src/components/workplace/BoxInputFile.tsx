"use client";

import { Button } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useState } from "react";

interface InputProps {
  input: string;
  name: string;
  auto: string;
  size: string;
  table: boolean;
}

const BoxInputFileComponent = ({
  input,
  name,
  auto,
  size,
  table,
}: InputProps) => {
  const [expanded] = useState<boolean>(table);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm: justify-between gap-y-4 px-8">
        <label htmlFor="logo" className="text-sm sm:text-base flex-1">
          {input}
        </label>
        <div className="flex flex-col w-full sm:w-1/2">
          <input
            className="py-2 px-4 rounded-md bg-white text-[#162331] outline-none"
            type="file"
            id={name}
            autoComplete={auto}
          />
          <small className="pt-2 opacity-80">Size: {size} (px)</small>
        </div>
      </div>
      {expanded && (
        <Table
          isStriped
          radius="md"
          className="mt-4 sm:px-16 light text-[#162331]">
          <TableHeader className="grow">
            <TableColumn>Banner</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody emptyContent="No banner found." className="flex-none">
            <TableRow key="1">
              <TableCell>CEO</TableCell>
              <TableCell>
                <Button className="bg-red-500 outline-none py-2 px-4 rounded-md text-white hover:bg-red-600 active:bg-red-800">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Technical Lead</TableCell>
              <TableCell>
                {" "}
                <Button className="bg-red-500 outline-none py-2 px-4 rounded-md text-white">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Senior Developer</TableCell>
              <TableCell>
                {" "}
                <Button className="bg-red-500 outline-none py-2 px-4 rounded-md text-white">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Community Manager</TableCell>
              <TableCell>
                {" "}
                <Button className="bg-red-500 outline-none py-2 px-4 rounded-md text-white">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default BoxInputFileComponent;
