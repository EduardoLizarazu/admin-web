"use client";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";
import {EyeIcon} from "app/components/Icons/eyeIcon";
import Link from "next/link";

////// This is the code that you need to modify //////

const columns = [
  {name: "NOMBRE", uid: "name"},
  {name: "ROL", uid: "role"},
  {name: "TELÉFONO", uid: "phone"},
  {name: "ACCIONES", uid: "actions"},
];


interface ConsumerObject {
  id: string;
  name: string;
  lastName: string;
  email: string;
  registerDate: string;
  phone: string;
  birthDate: string;
  profilePicture: string;
  apartmentNumber: string;
  userCategory: string;
  condominium: string;
}

interface UserTableProps {
  suppliers: ConsumerObject[];
}



/////////////////////////////////////////////////////


export default function MyTable(props : UserTableProps) {
  const suppliers : ConsumerObject[] = props.suppliers;



  const renderCell = React.useCallback((user: ConsumerObject, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof ConsumerObject];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: "https://i.pravatar.cc/150?u=a042581f4e29026704d"}}
            description={user.email}
            name={cellValue.toString()}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{user.userCategory}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.condominium}</p>
          </div>
        );
      case "phone":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm">{user.phone}</p>
            {/* <p className="text-bold text-sm text-default-400">Bolivia, SC</p> */}
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalles">
              <Link href={`/consumer/${user.id}`}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Link>
            </Tooltip>
          </div>
        );
      default:
        return cellValue.toString(); // Convert Date type to string
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
