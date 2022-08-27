import "./OptionUnit.css";
function OptionUnit({ name, unitId }) {
  return <option value={unitId}>{name}</option>;
}

export default OptionUnit;
