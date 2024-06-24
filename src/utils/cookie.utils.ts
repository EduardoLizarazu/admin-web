import { cookies } from "next/headers";


// obtener una cookie
export const getAccessToken = async () => {
  const cookiesStore: any = cookies();
  return await cookiesStore.get("accessToken").value;
};