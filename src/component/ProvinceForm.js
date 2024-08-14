import React from "react";
import CheckBox from "./CheckBox";
import provincesData from "../common/data-provinces.json";
import "./provinceform.scss";

const ProvinceForm = () => {
  console.log(provincesData);
  const provinces = Object.values(provincesData.data).sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const columnCount = 4;
  const itemsPerColumn = Math.ceil(provinces.length / columnCount);

  const columns = Array.from({ length: columnCount }, (_, colIndex) =>
    provinces.slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
  );


  return (
    <div className="province-grid">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="province-column">
          {column.map((item) => (
            <CheckBox
              key={item.key}
              provinceData={item}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProvinceForm;
