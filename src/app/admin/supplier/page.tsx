import { getSuppliers } from "app/services/admin/supplier/getSuppliers";
import Link from "next/link";
import UserTable from "./userTable";

export default async function Supplier() {
  const suppliers = await getSuppliers();

  const plainSuppliers = suppliers.map((supplier) => supplier.toPlainObject());

  const acceptRequest = (id: string) => {
    // Code to accept request
    
  }

  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
      <div className="w-full flex-grow p-6">
        <h1 className="text-3xl text-black pb-6">Tables</h1>

        <div className="w-full mt-6">
          <p className="text-xl pb-3 flex items-center">
            <i className="fas fa-list mr-3"></i> Table Example
          </p>
          <div className="bg-white overflow-auto">
            {/* TABLE */}
            <UserTable suppliers={plainSuppliers} />
          </div>
        </div>
      </div>
    </div>
  );
}
