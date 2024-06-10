import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

const BoxInputDropdownComponent = () => {
  const [selectedKeys, setSelectedKeys] = useState(
    new Set(["Select account role"])
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <>
      <Dropdown backdrop="blur" className="text-[#162331]">
        <DropdownTrigger>
          <Button variant="bordered" className="bg-white text-[#162331]">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}>
          <DropdownItem key="Member">Member</DropdownItem>
          <DropdownItem key="Silver">Silver</DropdownItem>
          <DropdownItem key="Gold">Gold</DropdownItem>
          <DropdownItem key="Diamond">Diamond</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default BoxInputDropdownComponent;
