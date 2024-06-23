"use client";
import React, { ReactElement } from "react";
import { Input, Textarea, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { MembershipTypeEntity } from "app/entities/payment/membershipType.entity";
import { createMembershipTypeAction } from "./actions/create.action";

export default function MembershipCreatePage() {
  const [type, setType] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [duration, setDuration] = React.useState<string>("");
  const [details, setDetails] = React.useState<string[]>([""]);

  // const dummyMembership = {
  //   type: "Free",
  //   description: "Access to basic features",
  //   price: 0,
  //   duration: 0,
  //   details: `
  //     - Free membership details
  //     - 1 user
  //     - 3 projects
  //   `,
  // };

  const handleDetailChange = (index:any, value:any) => {
    const newDetails = [...details];
    newDetails[index] = value;
    setDetails(newDetails);
  };

  const addDetail = () => {
    setDetails([...details, ""]); // Agrega un nuevo detalle vacío al arreglo
  };

  const removeDetail = (index:any) => {
    const newDetails = [...details];
    newDetails.splice(index, 1);
    setDetails(newDetails);
  };

  const handleCreation = async () => {
    const membershipPrimitive = {
      id: "dummy-id",
      type: type,
      description: description,
      price: parseFloat(price),
      duration: parseInt(duration),
      details: transformDetails(details),
      status : 0,
    };
    const membershipEntity = MembershipTypeEntity.create(membershipPrimitive);

    await createMembershipTypeAction(membershipEntity);
  };

  const transformDetails = (details: string[]) => {
    return details.map(item => `- ${item}`).join('\n');
  }

  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col px-4 sm:px-8 md:px-16">
      <button
        onClick={() => window.history.back()}
        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Volver Atrás
      </button>
      
      <Card>
        <CardHeader>
        <h1>Membership Create Page</h1>
        </CardHeader>
        <CardBody>
        <Table>
        <TableHeader>
          <TableColumn>FORM</TableColumn>
          <TableColumn>INPUT</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="-1">
            <TableCell>Tipo:</TableCell>
            <TableCell>
              <Input
                isClearable
                label="Tipo"
                fullWidth
                value={type}
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Descripción:</TableCell>
            <TableCell>
              <Input
                isClearable
                label="Description"
                fullWidth
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Precio:</TableCell>
            <TableCell>
              <Input
                isClearable
                label="Precio:"
                fullWidth
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Duración:</TableCell>
            <TableCell>
              <Input
                isClearable
                label="Duración (Dias):"
                fullWidth
                value={duration}
                name="duration"
                onChange={(e) => setDuration(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow key={5}>
            <TableCell>Detalles:</TableCell>
            <TableCell>
              <Button className="mt-2 mb-2" fullWidth color="secondary" onClick={addDetail}>Agregar Detalle</Button>
              {details.map((detail, index) => (
                <div key={index} className="mt-4">
                  <Input
                    label={`Detalle ${index + 1}`}
                    fullWidth
                    value={detail}
                    name="detail"
                    onChange={(e) => handleDetailChange(index, e.target.value)}
                    endContent={<Button onClick={() => removeDetail(index)}>Eliminar</Button>}
                  />
                </div>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
        </CardBody>
        <CardFooter>
          <Button fullWidth color="primary" onClick={handleCreation}>Crear Membresía</Button>
        </CardFooter>
      </Card>
      
    </div>
  );
}