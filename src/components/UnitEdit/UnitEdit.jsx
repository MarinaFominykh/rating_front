import "./UnitEdit.scss";
import { useEffect, useState } from "react";
import Select from "react-select";
function UnitEdit({units, role, sheriff, onChange}) {
return (
    <div className="unit-edit">
    <Select
      options={units.map((unit) => {
        return { value: unit._id, label: unit.name };
      })}
      value={sheriff}
      onChange={onChange}
      required
      placeholder={<div>{role}</div>}
      // isClearable
      // unstyled
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: 0,
          width: "50%",
          padding: "0px",
          margin: "0px",
          cursor: "text"
         
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
