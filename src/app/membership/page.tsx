import { Button, Link } from "@nextui-org/react";
import TableMembership from "./table";


{/* <Button as={Link} onClick={handleSignOut} color="primary" href="/login" variant="flat">
            Sign Out
          </Button> */}


export default function MembershipPage() {
  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col px-4 sm:px-8 md:px-16">
      <h1>Membership Page</h1>
      <Button as={Link} href="/membership/create" color="primary">
            Nueva membresía
      </Button>
      <TableMembership />
    </div>
  );
}
