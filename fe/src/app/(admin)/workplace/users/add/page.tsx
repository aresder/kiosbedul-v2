"use client";

import BoxFormComponent from "@/components/workplace/BoxForm";
import BoxInputComponent from "@/components/workplace/BoxInput";
import BoxInputDropdownComponent from "@/components/workplace/BoxInputDropdown";

export default function AddUserPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Add user account</h1>
      <div className="w-full sm:px-4 py-8 text-white">
        <BoxFormComponent title="Add user" submit={true}>
          <BoxInputComponent
            input="Username"
            name="add-user-username"
            type="text"
            auto="off"
          />
          <BoxInputComponent
            input="Password"
            name="add-user-password"
            type="text"
            auto="off"
          />
          <BoxInputComponent
            input="Balance"
            name="add-user-balance"
            type="text"
            auto="off"
          />
          <BoxInputComponent
            input="Whatsapp number"
            name="add-user-wa"
            type="text"
            auto="off"
          />

          <BoxInputDropdownComponent />
        </BoxFormComponent>
      </div>
    </>
  );
}
