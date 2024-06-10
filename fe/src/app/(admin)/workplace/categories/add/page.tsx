import BoxFormComponent from "@/components/workplace/BoxForm";
import BoxInputComponent from "@/components/workplace/BoxInput";

export default function AddCateogiriesPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Add categories</h1>
      <div className="w-full sm:px-4 py-8 text-white">
        <BoxFormComponent title="Add categories" submit={true}>
          <BoxInputComponent
            input="New categories"
            name="new-categories"
            type="text"
            auto="off"
          />
          <BoxInputComponent
            input="Ordinal"
            name="ordinal-categories"
            type="number"
            auto="off"
          />
        </BoxFormComponent>
      </div>
    </>
  );
}
