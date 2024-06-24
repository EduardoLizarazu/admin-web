import { Card, Image, Spacer, Link } from "@nextui-org/react";

interface ListProps {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

export default function List(props: ListProps) {
  const { id, title, description, price, stock, image } = props;

  return (
    <>
      <Card as={Link} href={"/orderProduct/" + id}>
        <div className="w-full mx-auto  p-4 flex bg-white shadow-lg rounded-lg">
          <div className="mr-4" >
            <Image src={image} alt="Product" className="w-full" />
          </div>
          <div className="flex-initial ">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <div className="mt-4">
              <span className="text-lg">Stock: {stock}</span>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold">${price}</span>
            </div>
          </div>
        </div>
      </Card>
      <Spacer y={5} />
    </>
  );
}
