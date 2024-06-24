"use client";

import React from "react";
import {

  Card,
  CardHeader,

} from "@nextui-org/react";

import {
  getProductCategoryAction,
  getProductsAction,
} from "./_actions/orderProducts.action";
import OrderProductList from "app/components/list.component";

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
      <Card className="p-5">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Products</h2>
        </CardHeader>
        {products.map((product: any) => (
          <OrderProductList
            key={product.id}
            id={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            image={"https://via.placeholder.com/150"}
            link={`/orderProduct/${product.id}`}
          />
        ))}
      </Card>
    </div>
  );
}
