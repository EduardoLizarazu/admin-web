import jwt from 'jsonwebtoken';


export function decodeJWT(token: string) {
  try {
    // Decodifica el token sin verificar la firma (¡no usar en producción para validación!)
    const decoded = jwt.decode(token, { complete: true });
    return decoded ? decoded.payload : null;
  } catch (error) {
    console.error("Error decodificando el JWT:", error);
    return null;
  }
}


