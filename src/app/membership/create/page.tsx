"use client";
import React from "react";
import { Input, Textarea, Button, Card } from "@nextui-org/react";
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
  const [details, setDetails] = React.useState<string>("");

  const dummyMembership = {
    type: "Free",
    description: "Access to basic features",
    price: 0,
    duration: 0,
    details: `
      - Free membership details
      - 1 user
      - 3 projects
    `,
  };

  const handleCreation = async () => {
    const membershipPrimitive = {
      id: "0",
      type: type,
      description: description,
      price: parseFloat(price),
      duration: parseInt(duration),
      details: details,
    };
    const membershipEntity = MembershipTypeEntity.create(membershipPrimitive);

    await createMembershipTypeAction(membershipEntity);
  };

  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col px-4 sm:px-8 md:px-16">
      <h1>Membership Create Page</h1>
      <Table isStriped>
        <TableHeader>
          <TableColumn>FORM</TableColumn>
          <TableColumn>INPUT</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
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
          <TableRow key="5">
            <TableCell>Detalles:</TableCell>
            <TableCell>
              <Input
                isClearable
                label="Detalles"
                fullWidth
                value={details}
                name="details"
                onChange={(e) => setDetails(e.target.value)}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
