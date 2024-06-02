"use client";
import { getSupplier } from "app/services/admin/supplier/getSuppliers";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Params {
  details: string;
}

interface SupplierDetailsProps {
  params: Params;
}

export default function SupplierDetails(props: SupplierDetailsProps) {
  const { details } = props.params;
  const [supplier, setSupplier] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (details) {
      getSupplier(details)
        .then((data) => {
          setSupplier(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch supplier details:", error);
          setLoading(false);
        });
    }
  }, [details]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!supplier) {
    return <div>No supplier data found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Detalles del Proveedor</h1>
      <button
        onClick={() => window.history.back()}
        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Volver Atrás
      </button>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={`/perfil.png`}
            width={96}
            height={96}
            alt="Profile"
            className="h-24 w-24 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {supplier.name} {supplier.lastName}
            </h2>
            <p className="text-sm text-gray-600">{supplier.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>ID:</strong> {supplier.id}
          </p>
          <p>
            <strong>Phone:</strong> {supplier.phone}
          </p>
          <p>
            <strong>Register Date:</strong>{" "}
            {new Date(supplier.registerDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Birth Date:</strong>{" "}
            {new Date(supplier.birthDate).toLocaleDateString()}
          </p>
          <p>
            <strong>User Category:</strong> {supplier.userCategory}
          </p>
          <p>
            <strong>NIT:</strong> {supplier.nit}
          </p>
          <p>
            <strong>Company:</strong> {supplier.companyName}
          </p>
          <p>
            <strong>Company Address:</strong> {supplier.companyAddress}
          </p>
          <p>
            <strong>Company Phone:</strong> {supplier.companyPhone}
          </p>
          <p>
            <strong>Manager Email:</strong> {supplier.companyManagerEmail}
          </p>
          <p>
            <strong>License Type:</strong> {supplier.licenseType}
          </p>
          <p>
            <strong>Certificate Type:</strong> {supplier.certificateType}
          </p>
          <p>
            <strong>Request Status:</strong> {supplier.requestStatus}
          </p>
          <p>
            <strong>Offers:</strong> {supplier.companyOffers.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
