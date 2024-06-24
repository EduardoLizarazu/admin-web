"use client";

import React from "react";
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
import { DeleteIcon } from "app/components/Icons/deleteIcon";
import { EditIcon } from "app/components/Icons/editIcon";
import { EyeIcon } from "app/components/Icons/eyeIcon";
import { getProductCategoryAction, getProductsAction } from "./_actions/products.action";

// id: string;
//     userId: string;
//     categoryId: string;
//     name: string;
//     description: string;
//     price: number;
//     stock: number;

export default function ProductPage() {
  
  const [products, setProducts] = React.useState<any>([]);
  const [productCategory, setProductCategory] = React.useState<any>([]);
   
  const matchCategoryIdToName = (id: string) => {
    const category = productCategory.find((category: any) => category.id === id);
    return category?.name;
  }

  React.useEffect(() => {
    (async () => {
      const productActions = await getProductsAction();
      setProducts(productActions);

      const productCategories = await getProductCategoryAction();
      setProductCategory(productCategories);
    })()
  }, []);
  
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
              {products.map((product:any) => (
                <TableRow key={product.id}>
                  <TableCell>{matchCategoryIdToName(product.categoryId)}</TableCell>
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
