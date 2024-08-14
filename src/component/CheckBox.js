import React from "react";
import "./checkbox.scss";

const CheckBox = ({ callbackForm, provinceData }) => {
  return (
    <div className="checkbox-province">
      <label>
        <input
          type="checkbox"
          id={provinceData.id}
          name="province"
          value={provinceData.title}
        />
        {provinceData.title}
      </label>
    </div>
  );
};

export default CheckBox;
