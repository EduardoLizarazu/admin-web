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
import React from "react";
import { DeleteIcon } from "app/components/deleteIcon";
import { EditIcon } from "app/components/editIcon";
import { EyeIcon } from "app/components/eyeIcon";
import { getMembershipTypesAction, deleteMembershipTypeAction, editMembershipTypeStatusAction } from "./_actions/membership.action";
import { CheckIcon } from "app/components/checkIcon";

export default function TableMembership() {

  const [membershipTypes, setMembershipTypes] = React.useState<any>([]);

  // Get membership types
  const handleGetMembershipTypes = async () => {
    try {
      const response = await getMembershipTypesAction();
      setMembershipTypes(response);
      console.log(response);
      
    } catch (error) {
      console.error(error);
    }
  }

  // Remove membership type
  const handleRemoveMembershipType = async (id: string) => {
    try {
      await deleteMembershipTypeAction(id);
      handleGetMembershipTypes();
    } catch (error) {
      console.error(error);
    }
  }

  // Editar status
  const handleEditStatus = async (id: string, status: number) => {
    try {
      await editMembershipTypeStatusAction(id, status);
      handleGetMembershipTypes();
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    handleGetMembershipTypes();
  }, []);
  
  const transformStatus = (status: number) => {
    return (status === 0) ? "Inactivo" : "Activo";
  }

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
        <TableColumn>Estado</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody>
        {membershipTypes.map((membership :any , index:any) => (
          <TableRow key={index}>
            <TableCell>{membership.type}</TableCell>
            <TableCell>{membership.description}</TableCell>
            <TableCell>${membership.price}</TableCell>
            <TableCell>{transformDuration(membership.duration)}</TableCell>
            <TableCell>{transformStatus(membership.status)}</TableCell>
            <TableCell>
            <div className="relative flex items-center gap-2">

              {/* <Tooltip content="Detalles">
                <Link href={`/membership/${membership.id}/read`}>
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EyeIcon />
                  </span>
                </Link>
              </Tooltip> */}
              <Tooltip color="success" content="activar">
              <span className="text-lg text-success cursor-pointer active:opacity-50">
                <CheckIcon onClick={() => handleEditStatus(membership.id, 1)} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="desactivar">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => handleEditStatus(membership.id, 0)} />
              </span>
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
                    <button onClick={() => handleRemoveMembershipType(membership.id)}>
                      <DeleteIcon />
                    </button>
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
