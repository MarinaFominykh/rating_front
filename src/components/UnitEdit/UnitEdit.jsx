import "./UnitEdit.scss";
import { useEffect, useState } from "react";
import Select from "react-select";
function UnitEdit({units, role, value, onChange}) {
return (
    <div className="unit-edit">
    <Select
      options={units.map((unit) => {
        return { value: unit._id, label: unit.name };
      })}
      value={value}
      onChange={onChange}
      required
      placeholder={<div>{role}</div>}
      // isClearable
      // unstyled
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: 0,
          width: "100%",
          minHeight: "20px",
          height: "28px",
          padding: "0px",
          margin: "0px",
          cursor: "text",
          fontFamily: "Inter, Arial, Helvetica, sans-serif",
          fontWeight: "600",
          fontSize: "16px",
          // background: "#ffffff",
          // ":hover": {
          //   background:'#f6f6f6'
          // }
         
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
      }}
    />
    <label className="form__label unit-edit__label">{role}</label>
   
    </div>
)
}
export default UnitEdit;
