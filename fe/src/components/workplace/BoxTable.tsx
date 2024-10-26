"use client";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

interface Users {
  id: number;
  username: string;
  password: string;
  status: string;
  registerAt: string;
}

const getUsers = async () => {
  const res = await fetch("http://localhost:5000/users", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

const BoxTable = async () => {
  const users: Users[] = await getUsers();

  return (
    <>
      <Table className="light text-[#162331] sm:px-8" radius="lg">
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Username</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Registered at</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No Data Found">
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.registerAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

const BoxTableComponent = () => {
  return <BoxTable />;
};

export default BoxTableComponent;
