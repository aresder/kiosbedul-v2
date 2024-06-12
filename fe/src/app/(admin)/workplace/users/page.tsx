import BoxFormComponent from "@/components/workplace/BoxForm";
import TableAdminComponent from "@/components/workplace/contents/admin/TableAdmin";
import TableUsersComponent from "@/components/workplace/contents/users/TableUsers";

export default function UsersAccountPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Users account</h1>
      <div className="w-full sm:px-4 py-8 text-white space-y-8">
        {/* <BoxFormComponent title="Price" submit={true}>
          <BoxInputComponent
            input="Silver price"
            name="silver-price"
            type="number"
            auto="off"
            placeholder="Silver price"
            value="1000000"
            onChange={() => {}}
            required={true}
          />

          <BoxInputComponent
            input="Gold price"
            name="gold-price"
            type="number"
            auto="off"
            placeholder="Gold price"
            value="1000000"
            onChange={}
            required={true}
          />
        </BoxFormComponent> */}

        <BoxFormComponent title="Users" submit={false}>
          <TableUsersComponent />
        </BoxFormComponent>
      </div>
    </>
  );
}
