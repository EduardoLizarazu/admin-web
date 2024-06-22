"use client";
import { getConsumer } from "app/services/admin/consumer/getConsumers";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Params {
  details: string;
}

interface ConsumerDetailsProps {
  params: Params;
}

export default function ConsumerDetails(props: ConsumerDetailsProps) {
  const { details } = props.params;
  const [consumer, setConsumer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (details) {
      getConsumer(details)
        .then((data) => {
          setConsumer(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch consumer details:", error);
          setLoading(false);
        });
    }
  }, [details]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!consumer) {
    return <div>No consumer data found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Detalles del Consumidor</h1>
      <button onClick={() => window.history.back()} className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
        Volver Atrás
      </button>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            // src={consumer.profilePicture || "/perfil.png"} // Fallback to a default image if none provided
            src={ "/perfil.png"} // Fallback to a default image if none provided
            width={96}
            height={96}
            alt="Profile"
            className="h-24 w-24 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {consumer.name} {consumer.lastName}
            </h2>
            <p className="text-sm text-gray-600">{consumer.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p><strong>ID:</strong> {consumer.id}</p>
          <p><strong>Phone:</strong> {consumer.phone}</p>
          <p><strong>Register Date:</strong> {new Date(consumer.registerDate).toLocaleDateString()}</p>
          <p><strong>Birth Date:</strong> {new Date(consumer.birthDate).toLocaleDateString()}</p>
          <p><strong>User Category:</strong> {consumer.userCategory}</p>
          <p><strong>Apartment Number:</strong> {consumer.apartmentNumber}</p>
          <p><strong>Condominium:</strong> {consumer.condominium}</p>
        </div>
      </div>
    </div>
  );
}
