import TableMembership from "./table"


export default function MembershipPage() {
    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col px-4 sm:px-8 md:px-16">
            <h1>Membership Page</h1>
            <TableMembership />
        </div>
    )
}