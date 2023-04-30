import "./RatingTable.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unitsTransformArray } from "../../redux/actions";
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

function RatingTable({
  onUpdateUnit,
  matches,
  showUnit,
  handleAddUnit,
}) {
  const dispatch = useDispatch();
  const [directionSort, setDirectionSort] = useState(true);

  const unitsData = useSelector((state) => {
    const { unitsReducer } = state;
    return unitsReducer.units
  })

  const unitsArray = useSelector((state) => {
    const { transformUnitsReducer } = state;
    return transformUnitsReducer.units
  })
  const sortData = (field) => {
    const copyArray = unitsArray.concat();
    dispatch(unitsTransformArray(copyArray.sort((a, b) => {
      if (directionSort) { return a[field] < b[field] ? 1 : -1 }
      else { return a[field] < b[field] ? -1 : 1 }

    })));
    setDirectionSort(!directionSort)

  };
  useEffect(() => {

    dispatch(unitsTransformArray(unitsData.map((unit) => {
      return {
        id: unit._id,
        name: unit.name,
        victory: countBlackVictory(matches, unit) +
          countRedVictory(matches, unit),

        matches: countMatches(matches, unit),
        rating: countRating(matches, unit),
        black: countBlackRole(matches, unit),
        blackVictory: countBlackVictory(matches, unit),
        red: countRedRole(matches, unit),
        redVictory: countRedVictory(matches, unit),
        sheriff: countSheriffRole(matches, unit),
        sheriffVictory: countSheriffVictory(matches, unit),
        don: countDonRole(matches, unit),
        donVictory: countDonVictory(matches, unit),
        modKill: countModKill(matches, unit),
        bestPlayer: countBestPlayer(matches, unit),
      };
    }).sort(function (a, b) {
      return a.rating < b.rating ? 1 : -1;
    })
    ))

  }, [matches, unitsData, dispatch]);
  return (
    <div className="wrapper">
      <table className="table">
        <thead className="table__head">
          <tr className="table__row table__row-head">
            <th className="table__cell table__cell-head">№</th>
            <th className="table__cell table__cell-head name__head"
              onClick={() => sortData("name")}>Ник игрока</th>
            <th className="table__cell table__cell-head amount__head"
              onClick={() => sortData("matches")}>Количество игр</th>
            <th className="table__cell table__cell-head victory__head"
              onClick={() => sortData("victory")}>Побед</th>
            <th className="table__cell table__cell-head best__head"
              onClick={() => sortData("bestPlayer")}>Лучший игрок</th>
            <th className="table__cell table__cell-head raiting__head-cell"
              onClick={() => sortData("rating")}
            >Рейтинг</th>
            <th className="table__cell table__cell-head unit__head">
              <button onClick={handleAddUnit} className="button">
                Новый игрок +
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {unitsArray
            .map((unit, index) => {
              return (
                <Unit
                  key={unit.id}
                  name={unit.name}
                  victory={unit.victory}
                  matches={unit.matches}
                  rating={unit.rating}
                  black={unit.black}
                  blackVictory={unit.blackVictory}
                  red={unit.red}
                  redVictory={unit.redVictory}
                  sheriff={unit.sheriff}
                  sheriffVictory={unit.sheriffVictory}
                  don={unit.don}
                  donVictory={unit.donVictory}
                  modKill={unit.modKill}
                  bestPlayer={unit.bestPlayer}
                  unit={{ _id: unit.id, name: unit.name }}
                  onUpdateUnit={onUpdateUnit}
                  showUnit={showUnit}
                ></Unit>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default RatingTable;
