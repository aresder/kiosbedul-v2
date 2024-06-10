import BoxFormComponent from "@/components/workplace/BoxForm";
import BoxInputComponent from "@/components/workplace/BoxInput";
import BoxTableComponent from "@/components/workplace/BoxTable";
import UsersComponent from "@/components/workplace/contents/users/Users";

export default function UsersAccountPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Users account</h1>
      <div className="w-full sm:px-4 py-8 text-white space-y-8">
        <BoxFormComponent title="Price" submit={true}>
          <BoxInputComponent
            input="Silver price"
            name="silver-price"
            type="number"
            auto="off"
          />

          <BoxInputComponent
            input="Gold price"
            name="gold-price"
            type="number"
            auto="off"
          />
        </BoxFormComponent>
        <BoxFormComponent title="Users" submit={false}>
          <BoxTableComponent
            add={true}
            addValue="Add user"
            link="/workplace/users/add"
          />
        </BoxFormComponent>
      </div>
    </>
  );
}
