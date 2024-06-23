"use client";
import React from "react";
import { Input, Textarea, Button, Card } from "@nextui-org/react";
import { MembershipTypeEntity } from "app/entities/payment/membershipType.entity";
import { createMembershipTypeAction } from "./actions/create.action";

export default function MembershipCreatePage() {
  const [type, setType] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const [details, setDetails] = React.useState<string>("");

  const dummyMembership = {
    type: "Free",
    description: "Access to basic features",
    price: 0,
    duration: 0,
    details: `
      - Free membership details
      - 1 user
      - 3 projects
    `,
  };

  const handleCreation = async () => {
    const membershipPrimitive = {
      id: "0",
      type: type,
      description: description,
      price: price,
      duration: duration,
      details: details,
    };
    const membershipEntity = MembershipTypeEntity.create(membershipPrimitive);

    await createMembershipTypeAction(membershipEntity);
  };

  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col px-4 sm:px-8 md:px-16">
      <h1>Membership Create Page</h1>
        <Card className="p-4">
          <form
            onSubmit={handleCreation}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Input
              isClearable
              label="Type"
              fullWidth
              value={type}
              name="type"
              onChange={(e) => setType(e.target.value)}
            />
            <Input
              isClearable
              label="Description"
              fullWidth
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              isClearable
              label="Price"
              fullWidth
              type="number"
              value={price.toString()}
              name="price"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <Input
              isClearable
              label="Duration (months)"
              fullWidth
              type="number"
              value={duration.toString()}
              name="duration"
              onChange={(e) => setDuration(Number(e.target.value))}
            />
            <Textarea
              label="Details"
              fullWidth
              value={details}
              name="details"
              onChange={(e) => setDetails(e.target.value)}
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </Card>
      
    </div>
  );
}
