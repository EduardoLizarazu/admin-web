"use server";
import { getMembershipTypes, deleteMembershipType, editMembershipTypeStatus } from "app/services/admin/payment/membershipType.service";


// Obtener memberships de firebase

export const getMembershipTypesAction = async () => {
  const response = await getMembershipTypes();
  // transformar a primitivo 
  const responsePrimitive = response.map((item) => item.toPrimitive());
return responsePrimitive;
};

// Eliminar membership de firebase
export const deleteMembershipTypeAction = async (id: string) => {
  await deleteMembershipType(id);
};

// Editar estado
export const editMembershipTypeStatusAction = async (id: string, status: number) => {
  await editMembershipTypeStatus(id, status);
};