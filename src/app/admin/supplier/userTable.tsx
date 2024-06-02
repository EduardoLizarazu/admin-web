"use client";
import Link from "next/link";


interface SupplierPlainObject {
  id: string;
  name: string;
  lastName: string;
  email: string;
  registerDate: string; // Date converted to ISO string
  phone: string;
  birthDate: string; // Date converted to ISO string
  userCategory: string;
  profilePicture: string;
  nit: string;
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyManagerEmail: string;
  licenseType: string;
  certificateType: string;
  companyOffers: string[];
}

interface UserTableProps {
  suppliers: SupplierPlainObject[];
}


export default function UserTable(params: UserTableProps) {
  const suppliers  = params.suppliers;

  const acceptRequest = async (id: string) => {
    
  }

  return (
    <table className="min-w-full bg-white">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
            Nombre
          </th>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
            Apellido
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Celular
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Correo
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {suppliers.length > 0 ? (
          suppliers.map((supplier, index) => (
            <tr
              key={supplier.id}
              className={
                index % 2 === 0
                  ? "hover:bg-gray-100"
                  : "bg-gray-200 hover:bg-gray-300"
              }
            >
              <td className="w-1/3 text-left py-3 px-4">{supplier.name}</td>
              <td className="w-1/3 text-left py-3 px-4">{supplier.lastName}</td>
              <td className="w-1/3 text-left py-3 px-4">{supplier.phone}</td>
              <td className="w-1/3 text-left py-3 px-4">{supplier.email}</td>
              <td className="w-1/3 text-left py-3 px-4">
                <button
                  onClick={() => acceptRequest(supplier.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Aceptar
                </button>
              </td>
              <td className="w-1/3 text-left py-3 px-4">
                <Link href={`/admin/supplier/details/${supplier.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Ver detalles
                  </button>
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">
              No hay proveedores
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
