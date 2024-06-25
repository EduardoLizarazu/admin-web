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
import { ReactNode } from "react";
interface TableListProps {
  headers: string[];
  data: string[];
  actions: any;
  children?: ReactNode;
}

export default function TableList(props: TableListProps) {
  const { headers, data, actions } = props;

  return (
    <Table removeWrapper aria-label="Membership types table">
      <TableHeader>
        {
          headers.map((header: string, index: number) => (
            <TableColumn key={index}>{header}</TableColumn>
          ))
        }
      </TableHeader>
      <TableBody>
        {data.map((data: string, index: number) => (
          <TableRow key={index}>
            <TableCell>{data}</TableCell>
            <TableCell>{data}</TableCell>
            <TableCell>{data}</TableCell>
            <TableCell>{data}</TableCell>
            <TableCell>{data}</TableCell>
            <TableCell>{data}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
