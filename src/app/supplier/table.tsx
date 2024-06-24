"use client";
import React from "react";
// import Slider from "react-slick";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";
import {DeleteIcon} from "app/components/Icons/deleteIcon";
import {EyeIcon} from "app/components/Icons/eyeIcon";
import { updateStatusRq } from "app/services/admin/consumer/updateStatusRq";
import Link from "next/link";
import { CheckIcon } from "../../components/Icons/checkIcon";

////// This is the code that you need to modify //////

const columns = [
  {name: "NOMBRE", uid: "name"},
  {name: "ROL", uid: "role"},
  {name: "ESTADOS", uid: "status"},
  {name: "ACCIONES", uid: "actions"},
];


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
  requestStatus: number;
}

interface UserTableProps {
  suppliers: SupplierPlainObject[];
}

enum Status {
  PENDING = 0,
  ACCEPTED = 1,
  REJECTED = 2,
}

/////////////////////////////////////////////////////



const statusColorMap: Record<string, ChipProps["color"]>  = {
  1: "success",
  2: "danger",
  0: "warning",
};

export default function MyTable(props : UserTableProps) {
  const suppliers : SupplierPlainObject[] = props.suppliers;

  const acceptRequest = async (id: string) =>
    await updateStatusRq(id, Status.ACCEPTED);

  const rejectRequest = async (id: string) =>
    await updateStatusRq(id, Status.REJECTED);

  const transformStatusRqToText = (status: number) => {
    switch (status) {
      case Status.PENDING:
        return "Pendiente";
      case Status.ACCEPTED:
        return "Aceptado";
      case Status.REJECTED:
        return "Rechazado";
      default:
        return "Desconocido";
    }
  };

  const renderCell = React.useCallback((user: SupplierPlainObject, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof SupplierPlainObject];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: "https://i.pravatar.cc/150?u=a042581f4e29026704d"}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{user.userCategory}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.userCategory}</p> */}
          </div>
        );
      case "status":
        
        return (
          <Chip className="capitalize" color={statusColorMap[user.requestStatus]} size="sm" variant="flat">
            {transformStatusRqToText(user.requestStatus)}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalles">
              <Link href={`/supplier/${user.id}`}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Link>
            </Tooltip>
            <Tooltip color="success" content="Aceptar usuario">
              <span className="text-lg text-success cursor-pointer active:opacity-50">
                <CheckIcon onClick={() => acceptRequest(user.id)} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Rechazar usuario">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => rejectRequest(user.id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
  <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={suppliers}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
