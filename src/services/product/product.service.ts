import { ProductEntity } from "app/entities/product/product.entity";
import firebase_app from "app/firebase/config";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);
const consumerCollection = "PRODUCTS";

// crear un producto
export const createProduct = async (product: ProductEntity) => {
  try {
    const docRef = await addDoc(collection(db, consumerCollection), product.toPrimitive());
    // editar y poner id de doRef
    await setDoc(doc(db, consumerCollection, docRef.id), { id: docRef.id }, { merge: true });

    return docRef.id;
  } catch (error) {
    console.error("ERROR CREATE PRODUCT", error);
    throw error;
  }
};


// obtener todos los productos

// id: string;
//     userId: string;
//     categoryId: string;
//     name: string;
//     description: string;
//     price: number;
//     stock: number;
export const getProducts = async () => {
  try {
    const collectionRef = collection(db, consumerCollection);
    const snapshot = await getDocs(collectionRef);
    const documents = snapshot.docs.map((doc) => {
      const { id, userId, categoryId, name, description, price, stock } =
        doc.data();

      const product = new ProductEntity({
        id: id,
        userId: userId,
        categoryId: categoryId,
        name: name,
        description: description,
        price: price,
        stock: stock,
      });

      return product;
    });

    return ProductEntity.createArray(documents);
  } catch (error) {
    console.error("ERROR GET PRODUCT", error);
    throw error;
  }
};

// obtener un producto con id
export const getProduct = async (id: string) => {
  try {
    const docRef = doc(db, consumerCollection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { id, userId, categoryId, name, description, price, stock } =
        docSnap.data();

      const product = new ProductEntity({
        id: id,
        userId: userId,
        categoryId: categoryId,
        name: name,
        description: description,
        price: price,
        stock: stock,
      });

      return product;
    }
  } catch (error) {
    console.error("ERROR GET PRODUCT", error);
    throw error;
  }
};

// obtener producto por userId
export const getProductsByUserId = async (userId: string) => {
  try {
    const collectionRef = collection(db, consumerCollection);
    const snapshot = await getDocs(collectionRef);
    const documents = snapshot.docs
      .map((doc) => {
        const { id, userId, categoryId, name, description, price, stock } =
          doc.data();

        const product = new ProductEntity({
          id: id,
          userId: userId,
          categoryId: categoryId,
          name: name,
          description: description,
          price: price,
          stock: stock,
        });

        return product;
      })
      .filter((product) => product.userId === userId);

    return ProductEntity.createArray(documents);
  } catch (error) {
    console.error("ERROR GET PRODUCT BY USER ID", error);
    throw error;
  }
};

// editar un producto
export const editProduct = async (product: ProductEntity) => {
  try {
    const docRef = doc(db, consumerCollection, product.id);
    await setDoc(docRef, product.toPrimitive());
  } catch (error) {
    console.error("ERROR EDIT PRODUCT", error);
    throw error;
  }
};


// eliminar un producto
export const deleteProduct = async (id: string) => {
  try {
    const docRef = doc(db, consumerCollection, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("ERROR DELETE PRODUCT", error);
    throw error;
  }
};