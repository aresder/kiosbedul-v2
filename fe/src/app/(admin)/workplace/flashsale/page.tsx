import BoxFormComponent from "@/components/workplace/BoxForm";
import BoxInputComponent from "@/components/workplace/BoxInput";
import BoxTableComponent from "@/components/workplace/BoxTable";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export default function FlashSalePage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Flash sale</h1>
      <div className="w-full sm:px-4 py-8 text-white">
        <BoxFormComponent title="Flash sale" submit={true}>
          <BoxInputComponent input="status" />
        </BoxFormComponent>
      </div>
    </>
  );
}
