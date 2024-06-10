"use client";

import NextLink from "next/link";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

interface InputProps {
  add: boolean;
  addValue: string;
  link: string;
}

const BoxTableComponent = ({ add, addValue, link }: InputProps) => {
  return (
    <>
      {add && (
        <Button
          as={NextLink}
          href={link}
          className="w-[8rem] ml-4"
          color="primary"
          variant="solid"
          showAnchorIcon>
          {addValue}
        </Button>
      )}
      <Table className="light text-[#162331] sm:px-8" radius="lg">
        <TableHeader>
          <TableColumn>Username</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Registered at</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No banner found.">
          <TableRow key="1">
            <TableCell>Angga</TableCell>
            <TableCell>On</TableCell>
            <TableCell>10/10/2022</TableCell>
            <TableCell className="flex gap-2 ">
              <Button
                className="outline-none text-white hover:bg-blue-800 active:bg-blue-950"
                color="primary"
                radius="sm"
                size="sm">
                Edit
              </Button>
              <Button
                className="bg-red-500 outline-none text-white hover:bg-red-700 active:bg-red-950"
                radius="sm"
                size="sm">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default BoxTableComponent;
