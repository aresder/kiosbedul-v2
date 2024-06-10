import BoxFormComponent from "@/components/workplace/BoxForm";
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

export default function GamesCategoriesPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Categories</h1>
      <div className="w-full sm:px-4 py-8 text-white">
        <BoxFormComponent title="Categories" submit={false}>
          <BoxTableComponent
            add={true}
            addValue="Add categories"
            link="/workplace/categories/add"
          />
        </BoxFormComponent>
      </div>
    </>
  );
}
