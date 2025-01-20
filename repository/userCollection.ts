import { firestore } from "../config/firebaseConfig";
import { User } from "../entities/user";

const USERS_COLLECTION = "USERS";

export const getUserById = async (id: string): Promise<User | null> => {
  const doc = await firestore.collection(USERS_COLLECTION).doc(id).get();
  return doc.exists ? (doc.data() as User) : null;
};

export const updateUserById = async (
  id: string,
  data: Partial<User>
): Promise<void> => {
  await firestore
    .collection(USERS_COLLECTION)
    .doc(id)
    .set(data, { merge: true });
};
