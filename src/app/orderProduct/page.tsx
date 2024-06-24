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
  Image,
  Spacer,
} from "@nextui-org/react";

import { EyeIcon } from "app/components/eyeIcon";
import { MinusIcon } from "app/components/minusIcon";
import {
  getProductCategoryAction,
  getProductsAction,
} from "./_actions/orderProducts.action";
import { PlusIcon } from "app/components/plusIcon";
import { CommentsIcon } from "app/components/commentIcon";
import OrderProductList from "./list";

// id: string;
//     userId: string;
//     categoryId: string;
//     name: string;
//     description: string;
//     price: number;
//     stock: number;

export default function OrderProductPage() {
  const [products, setProducts] = React.useState<any>([]);
  const [productCategory, setProductCategory] = React.useState<any>([]);

  const matchCategoryIdToName = (id: string) => {
    const category = productCategory.find(
      (category: any) => category.id === id
    );
    return category?.name;
  };

  const handleAddProduct = () => {
    console.log("Add product");
  };

  const handleMinusProduct = () => {
    console.log("Minus product");
  };

  React.useEffect(() => {
    (async () => {
      const productActions = await getProductsAction();
      setProducts(productActions);

      const productCategories = await getProductCategoryAction();
      setProductCategory(productCategories);
    })();
  }, []);

  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col px-4 sm:px-8 md:px-16">
      {/* <Card>
        <CardHeader>
          <h1>Tabla de productos</h1>
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
              {products.map((product: any) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {matchCategoryIdToName(product.categoryId)}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Aumentar">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <PlusIcon />
                        </span>
                      </Tooltip>
                      <Tooltip content="Disminuir">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <MinusIcon />
                        </span>
                      </Tooltip>
                      <Tooltip content="Detalles">
                        <Link href={`/product/review/${product.id}/read`}>
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <EyeIcon />
                          </span>
                        </Link>
                      </Tooltip>
                      <Tooltip content="Comentarios">
                        <Link href={`/product/review/${product.id}/read`}>
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <CommentsIcon />
                          </span>
                        </Link>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
        
      </Card> */}

      <Card className="p-5">
        {products.map((product: any) => (
          <OrderProductList
            key={product.id}
            id={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            image={"https://via.placeholder.com/150"}
          />
        ))}
      </Card>
    </div>
  );
}
