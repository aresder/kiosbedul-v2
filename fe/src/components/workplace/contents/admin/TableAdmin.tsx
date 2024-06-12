"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import HandleUpdateAdmin from "./HandleUpdateAdmin";
import HandleDeleteAdmin from "./HandleDeleteAdmin";
import GetUsers from "@/lib/func/GetUsers";

interface Users {
  id: number;
  username: string;
  password: string;
  status: string;
  registerAt: string;
}

const TableAdmin = async () => {
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
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No Data found">
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.registerAt}</TableCell>
              <TableCell className="flex gap-2">
                <HandleUpdateAdmin {...user} />
                <HandleDeleteAdmin {...user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

const TableAdminComponent = () => {
  return <TableAdmin />;
};

export default TableAdminComponent;
