import { MembershipTypeEntity } from "app/entities/payment/membershipType.entity";
import { createMembershipType } from "app/services/admin/payment/membershipType.service";

export const createMembershipTypeAction = async (data : MembershipTypeEntity) => {
    await createMembershipType(data);
}