import { doc, getDoc } from "firebase/firestore";
import { db } from "../fireStoreConfig";

export const fetchUserData = async function fetchUserData(userId) {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (err) {
    console.log("Error fetching user document: " + err.message);
    throw err;
  }
};
