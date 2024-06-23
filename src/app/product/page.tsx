"use client";

import {
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Link,
} from "@nextui-org/react";
import { DeleteIcon } from "app/components/deleteIcon";
import { EditIcon } from "app/components/editIcon";
import { EyeIcon } from "app/components/eyeIcon";

// id: string;
//     userId: string;
//     categoryId: string;
//     name: string;
//     description: string;
//     price: number;
//     stock: number;

export default function ProductPage() {
  const products = [
    {
      id: "1",
      userId: "user1",
      category: "electronics",
      name: "Laptop",
      description:
        "High performance laptop suitable for gaming and professional work.",
      price: 1200.0,
      stock: 15,
    },
    {
      id: "2",
      userId: "user2",
      category: "home appliances",
      name: "Microwave",
      description:
        "Efficient and easy-to-use microwave with pre-programmed settings.",
      price: 150.0,
      stock: 30,
    },
    {
      id: "3",
      userId: "user3",
      category: "books",
      name: "JavaScript for Beginners",
      description:
        "A comprehensive guide to mastering JavaScript from scratch.",
      price: 29.99,
      stock: 50,
    },
  ];

  
  
  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col px-4 sm:px-8 md:px-16">
      <Card>
        <CardHeader>
          <h1>Tabla de productos</h1>
          <Button 
            href="/product/create" 
            color="primary"
            as={Link}
            >
            Agregar Producto
          </Button>
        </CardHeader>
        <CardBody>
          <Table>
            <TableHeader>
              <TableColumn>CATEGORÍA</TableColumn>
              <TableColumn>NOMBRE</TableColumn>
              <TableColumn>DESCRIPCIÓN</TableColumn>
              <TableColumn>PRECIO</TableColumn>
              <TableColumn>STOCK</TableColumn>
              <TableColumn>ACCIONES</TableColumn>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Detalles">
                        <Link href={`/membership/${product.id}/read`}>
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <EyeIcon />
                          </span>
                        </Link>
                      </Tooltip>

                      <Tooltip content="Editar">
                        <Link href={`/membership/${product.id}/edit`}>
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <EditIcon />
                          </span>
                        </Link>
                      </Tooltip>
                      <Tooltip color="danger" content="desactivar">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <DeleteIcon
                          // onClick={() => handleEditStatus(product.id, 0)}
                          />
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
