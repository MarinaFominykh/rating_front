import "./Unit.scss";
import React from "react";

function Unit({
  name,
  matches,
  rating,
  black,
  red,
  sheriff,
  don,
  blackVictory,
  redVictory,
  sheriffVictory,
  donVictory,
  modKill,
  bestPlayer,
  onUpdateUnit,
  unit,
  victory,
  order,
  showUnit,
}) {
  const screenWidth = window.screen.width;

  // function handleUpdateUnith() {
  //   onUpdateUnit(unit);
  // }
  function handleProfile() {
    showUnit(unit);
  }

  return (
    <tr
      style={{ height: 62 }}
      className="table__row unit"
      onClick={screenWidth < 769 ? handleProfile : undefined}
    >
      <td className="table__cell unit__order">{order}</td>
      <td className="table__cell unit__name">{name}</td>
      <td className="table__cell unit__amount">{matches}</td>
      <td className="table__cell unit__victory">{victory}</td>
      <td className="table__cell unit__bestPlayer">{bestPlayer}</td>
      <td className="table__cell unit__rating">{rating}</td>
      <td className="table__cell unit__profile">
        {" "}
        {/* <button className="table__profile-btn" onClick={handleUpdateUnith}> */}
        <button className="table__profile-btn" onClick={handleProfile}>
          Профиль
        </button>
      </td>
    </tr>
  );
}

export default Unit;
