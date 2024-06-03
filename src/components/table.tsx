"use client";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "app/components/editIcon";
import {DeleteIcon} from "app/components/deleteIcon";
import {EyeIcon} from "app/components/eyeIcon";
import {columns, users} from "app/utils/data";

////// This is the code that you need to modify //////

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
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type User = typeof users[0];

export default function MyTable(props : UserTableProps) {

  const suppliers : SupplierPlainObject[] = props.suppliers;

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
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
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
