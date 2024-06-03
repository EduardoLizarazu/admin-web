"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
// import Image from "next/image";

export default function ProductCard(props: any) {
  const product = {
    id: "001",
    supplierId: "sup001",
    name: "Coffee Machine",
    description: "High-quality coffee machine with multiple features.",
    category: "Appliances",
    price: 99.99,
    stock: 15,
    images: ["/perfil.png", "/perfil.png"],
    state: 1,
    reviews: [
      {
        id: "rev001",
        to: "001",
        userId: "user001",
        rating: 4,
        comment: "Great product, but a bit noisy.",
        date: new Date(),
      },
    ],
  };

  return (
    <Card className="py-4 w-64 h-80">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{product.category}</p>
        <h4 className="font-bold text-large">{product.name}</h4>
        <small className="text-default-500">{product.description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardFooter className="text-small justify-between" >
        <b>{product.price}$</b>
        <p className="text-default-500">Stock: {product.stock}</p>
      </CardFooter>
    </Card>
  );
}
