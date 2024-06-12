import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin - KiosBedul.id",
};

import BoxFormComponent from "@/components/workplace/BoxForm";
import ModalAdminComponent from "@/components/workplace/contents/admin/ModalAdmin";
import TableAdminComponent from "@/components/workplace/contents/admin/TableAdmin";

export default function AdminPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Admin account</h1>
      <div className="w-full sm:px-4 py-8 text-white">
        <BoxFormComponent title="Admin" submit={false}>
          <div className="ml-4">
            <ModalAdminComponent />
          </div>
          <TableAdminComponent />
        </BoxFormComponent>
      </div>
    </>
  );
}
