import { getDocs, query, collection, where, orderBy } from "firebase/firestore";
import { db } from "../fireStoreConfig";

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export const fetchSelectedProvinces =
  // Hàm để lấy danh sách các tỉnh dựa trên các tỉnh mà user đã chọn
  async function fetchSelectedProvinces(provinces) {
    const chunks = chunkArray(provinces, 30); // Chia nhỏ provinces thành các nhóm tối đa 30 phần tử
    const provinceData = [];
    try {
      for (const chunk of chunks) {
        const provincesRef = collection(db, "provinces");
        const q = query(provincesRef, where("key", "in", chunk), orderBy("key"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          provinceData.push(doc.data());
        });
      }

      return provinceData;
    } catch (err) {
      console.log("Error fetching provinces: " + err.message);
      throw err;
    }
  };
