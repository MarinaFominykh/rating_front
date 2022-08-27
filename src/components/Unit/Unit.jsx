import "./Unit.css";

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
}) {
  return (
    <tr className="table__row unit">
      <td className="table__cell unit__name">{name}</td>
      <td className="table__cell unit__rating">{matches}</td>
      <td className="table__cell unit__black">{black}</td>
      <td className="table__cell unit__black-victory">{blackVictory}</td>
      <td className="table__cell unit__red">{red}</td>
      <td className="table__cell unit__red-victory">{redVictory}</td>
      <td className="table__cell unit__sheriff">{sheriff}</td>
      <td className="table__cell unit__sheriff-victory">{sheriffVictory}</td>
      <td className="table__cell unit__don">{don}</td>
      <td className="table__cell unit__don-victory">{donVictory}</td>
      <td className="table__cell unit__rating">{rating}</td>
    </tr>
  );
}

export default Unit;
