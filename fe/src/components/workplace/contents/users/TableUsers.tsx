"use client";
import GetUsers from "@/lib/func/GetUsers";
import {
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

const TableUsers = async () => {
  const users: Users[] = await GetUsers(
    "http://localhost:5000/users",
    "GET",
    "no-store"
  );
  return (
    <>
      <Table
        aria-label="Table"
        className="light text-[#162331] sm:px-8"
        radius="lg">
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Username</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Registered at</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No banner found.">
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

const TableUsersComponent = () => {
  return <TableUsers />;
};

export default TableUsersComponent;
