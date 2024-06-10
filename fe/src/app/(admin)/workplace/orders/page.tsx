import BoxFormComponent from "@/components/workplace/BoxForm";
import BoxTableComponent from "@/components/workplace/BoxTable";
import ManageProductsComponent from "@/components/workplace/contents/mproducts/ManageProducts";

export default function ManageOrdersPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Orders</h1>
      <div className="w-full sm:px-4 py-8 text-white">
        <BoxFormComponent title="Manage orders">
          <BoxTableComponent />
        </BoxFormComponent>
      </div>
    </>
  );
}
