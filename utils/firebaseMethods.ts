import { db } from "@/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const saveDocument = async (
  collection: string,
  id: string,
  data: any
) => {
  await setDoc(doc(db, collection, id), data);
};
