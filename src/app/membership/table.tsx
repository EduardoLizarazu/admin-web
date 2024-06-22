"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Link,
} from "@nextui-org/react";
import { DeleteIcon } from "app/components/deleteIcon";
import { EditIcon } from "app/components/editIcon";
import { EyeIcon } from "app/components/eyeIcon";

export default function TableMembership() {

  interface IMembershipDetails {
    id : string;
    type: string;
    description: string;
    price: number;
    duration: number; // Days
    details: string;
  }

  const membershipTypes : IMembershipDetails[] = [
    {
      id: "1",
      type: "Free",
      description: "Access to basic features",
      price: 0,
      duration: 0,
      details: `
        - Free membership details
        - 1 user
        - 3 projects
      `,
    },
    {
      id: "2",
      type: "Individual",
      description: "Full access for one person",
      price: 99,
      duration: 360,
      details: `
        - Individual membership details
        - 1 user
        - Unlimited projects
      `,
    },
    {
      id: "3",
      type: "Organization",
      description: "Team access for up to 10 users",
      price: 299,
      duration: 360,
      details: `
        - Organization membership details
        - 10 users
        - Unlimited projects
      `,
    },
  ];

  const transformDuration = (duration: number) => {
    if (duration === 0) {
      return "Ilimitado";
    }
    return `${duration} días`;
  }
  return (
    <Table removeWrapper aria-label="Membership types table">
      <TableHeader>
        <TableColumn>Type</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Duration</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody>
        {membershipTypes.map((membership, index) => (
          <TableRow key={index}>
            <TableCell>{membership.type}</TableCell>
            <TableCell>{membership.description}</TableCell>
            <TableCell>${membership.price}</TableCell>
            <TableCell>{transformDuration(membership.duration)}</TableCell>
            <TableCell>
            <div className="relative flex items-center gap-2">
              <Tooltip content="Detalles">
                <Link href={`/membership/${membership.id}/read`}>
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EyeIcon />
                  </span>
                </Link>
              </Tooltip>
              <Tooltip content="Editar">
                <Link href={`/membership/${membership.id}/edit`}>
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon />
                  </span>
                </Link>
              </Tooltip>
              <Tooltip content="Eliminar">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <DeleteIcon />
                  </span>
              </Tooltip>
            </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
