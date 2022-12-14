import "./RatingTable.scss";
import { useEffect, useState } from "react";
import { getMatches, getUnits } from "../../utils/Api.js";
import Unit from "../Unit/Unit.jsx";
import {
  countMatches,
  countBlackRole,
  countBlackVictory,
  countRedRole,
  countRedVictory,
  countSheriffRole,
  countSheriffVictory,
  countDonRole,
  countDonVictory,
  countModKill,
  countBestPlayer,
  countRating,
} from "../../utils/functions";

function RatingTable({ allUnits, onUpdateUnit, sortData, matches, showUnit }) {
  const [dataUnits, setDataUnits] = useState(allUnits);
  const [order, setOrder] = useState("ASC");
  const [rating, setRating] = useState(0);

  return (
    <div className="wrapper" style={{ height: 62 * 10 + 1, overflow: "auto" }}>
      <table className="table">
        <thead className="table__head">
          <tr className="table__row table__row-head">
            <th className="table__cell table__cell-head">№</th>
            <th className="table__cell table__cell-head table__cell-name">
              Ник игрока
            </th>
            <th className="table__cell table__cell-head">Количество игр</th>
            <th className="table__cell table__cell-head">Побед</th>
            <th className="table__cell table__cell-head">Лучший игрок</th>
            <th className="table__cell table__cell-head">Рейтинг</th>
            <th className="table__cell table__cell-head"></th>
          </tr>
        </thead>
        <tbody>
          {allUnits
            .map((unit, index) => {
              return (
                <Unit
                  key={unit._id}
                  victory={
                    countBlackVictory(matches, unit) +
                    countRedVictory(matches, unit)
                  }
                  name={unit.name}
                  matches={countMatches(matches, unit)}
                  rating={countRating(matches, unit)}
                  black={countBlackRole(matches, unit)}
                  blackVictory={countBlackVictory(matches, unit)}
                  red={countRedRole(matches, unit)}
                  redVictory={countRedVictory(matches, unit)}
                  sheriff={countSheriffRole(matches, unit)}
                  sheriffVictory={countSheriffVictory(matches, unit)}
                  don={countDonRole(matches, unit)}
                  donVictory={countDonVictory(matches, unit)}
                  modKill={countModKill(matches, unit)}
                  bestPlayer={countBestPlayer(matches, unit)}
                  unit={unit}
                  onUpdateUnit={onUpdateUnit}
                  showUnit={showUnit}
                ></Unit>
              );
            })
            .sort(function (a, b) {
              return a.props.rating < b.props.rating ? 1 : -1;
            })}
        </tbody>
      </table>
    </div>
  );
}

export default RatingTable;
