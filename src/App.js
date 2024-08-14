import React, { useEffect, useState } from "react";
import "./App.css";
import MapTravel from "./component/MapTravel";
import ProvinceForm from "./component/ProvinceForm";
import { fetchUserData } from "./fireStore/user/fetchUserData";
import { fetchSelectedProvinces } from "./fireStore/province/fetchSelectedProvinces";

function App() {
  const [user, setUser] = useState({});
  const [selectedProvinces, setSelectedProvinces] = useState({});
  function getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem("userData"));
  }
  useEffect(() => {
    async function fetchData(userLocal) {
      try {
        // Lấy dữ liệu người dùng từ localStorage
        if (!userLocal) {
          // Lấy dữ liệu người dùng từ Firestore
          const userId = "HSXg366yGD1aEl8PDwkA";
          const userData = await fetchUserData(userId);
          if (userData) {
            localStorage.setItem("userData", JSON.stringify(userData));
            const { selectedProvinces } = userData;
            console.log(selectedProvinces);
            if (selectedProvinces && selectedProvinces.length > 0) {
              // Lấy các tỉnh mà người dùng đã chọn
              const provinces = await fetchSelectedProvinces(selectedProvinces);
    
              setSelectedProvinces(provinces);
            } else {
              console.log("No provinces selected");
            }
          }
        } else {
          const { selectedProvinces } = userLocal;
          if (selectedProvinces && selectedProvinces.length > 0) {
            // Lấy các tỉnh mà người dùng đã chọn
            const provinces = await fetchSelectedProvinces(selectedProvinces);

            setSelectedProvinces(provinces);
          } else {
            console.log("No provinces selected");
          }
        }
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    }
    fetchData(getUserFromLocalStorage());
  }, []);
console.log(selectedProvinces);
    return (
    <div className="App">
      { selectedProvinces ? selectedProvinces.map((province) => (
        <p key={province.key}>{province.title}</p>
      )) :  <></>}
      {/* <ProvinceForm />
      <MapTravel /> */}
    </div>
  );
}

export default App;
