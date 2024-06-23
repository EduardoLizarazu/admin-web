import { IMembershipTypePrimitive, MembershipTypeEntity } from "app/entities/payment/membershipType.entity";
import { editMembershipType, getMembershipType } from "app/services/admin/payment/membershipType.service";



export const handleEditMembershipType = async (membership: IMembershipTypePrimitive) => {
  try {
    const membershipEntity = MembershipTypeEntity.create(membership);
    await editMembershipType(membershipEntity);
    return true;
  } catch (error) {
    return false;
  }
}

// Obtener un tipo de membresía
export const handleGetMembershipType = async (id:string) => {
  try {
    const membership = await getMembershipType(id);
    return membership?.toPrimitive();
  } catch (error) {
    return null;
  }
}