import BoxFormComponent from "@/components/workplace/BoxForm";
import BoxInputComponent from "@/components/workplace/BoxInput";

export default function AddAutoPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Add data</h1>
      <div className="w-full sm:px-4 py-8 text-white">
        <BoxFormComponent title="Add data" submit={true}>
          <BoxInputComponent
            input="Username"
            name="add-admin-username"
            type="text"
            auto="off"
          />
          <BoxInputComponent
            input="Password"
            name="add-admin-password"
            type="text"
            auto="off"
          />
        </BoxFormComponent>
      </div>
    </>
  );
}
