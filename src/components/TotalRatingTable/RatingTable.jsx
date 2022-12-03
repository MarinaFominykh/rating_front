import "./RatingTable.scss";
import { useEffect, useState } from "react";
import { getMatches, getUnits } from "../../utils/Api.js";
import Unit from "../Unit/Unit.jsx";

function RatingTable({ allUnits, onUpdateUnit, sortData, matches, showUnit }) {
  const [dataUnits, setDataUnits] = useState(allUnits);
  const [order, setOrder] = useState("ASC");
  const [rating, setRating] = useState(0);

  function sorting(col) {
    if (order === "ASC") {
      const sorted = [...dataUnits].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setDataUnits(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...dataUnits].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setDataUnits(sorted);
      setOrder("ASC");
    } else {
      console.log("фиг");
    }
  }
  function countRating(array, unit) {
    let rating = 0;
    const matchesArrayBlackVictory = array.filter((element) => {
      return (
        element.units.some(
          (item) =>
            item.unit._id === unit._id &&
            (item.role === "мафия" || item.role === "дон")
        ) && element.result === "Победа мафии"
      );
    });
    const matchesArrayBlackLoose = array.filter((element) => {
      return (
        element.units.some(
          (item) =>
            item.unit._id === unit._id &&
            (item.role === "мафия" || item.role === "дон")
        ) && element.result === "Победа города"
      );
    });

    const matchesArrayRed = array.filter((element) => {
      return (
        element.units.some(
          (item) => item.unit._id === unit._id && item.role === "мирный"
        ) && element.result === "Победа города"
      );
    });

    const matchesArraySheriffVictory = array.filter((element) => {
      return (
        element.units.some(
          (item) => item.unit._id === unit._id && item.role === "шериф"
        ) && element.result === "Победа города"
      );
    });

    const matchesArraySheriffLoose = array.filter((element) => {
      return (
        element.units.some(
          (item) => item.unit._id === unit._id && item.role === "шериф"
        ) && element.result === "Победа мафии"
      );
    });

    const matchesArrayBestPlayer = array.filter((element) => {
      return element.units.some(
        (item) => item.unit._id === unit._id && item.bestPlayer
      );
    });

    const matchesArrayModKill = array.filter((element) => {
      return element.units.some(
        (item) => item.unit._id === unit._id && item.modKill
      );
    });

    //Если ведущему начисляются баллы в рейтинг
    // const matchesArrayMaster = array.filter((element) => {
    //   return element.gameMaster === unit._id;
    // });

    rating =
      matchesArrayBlackVictory.length * 4 +
      matchesArrayBlackLoose.length * -0.5 +
      matchesArrayRed.length * 3 +
      matchesArraySheriffVictory.length * 5 +
      matchesArraySheriffLoose.length * -1 +
      matchesArrayBestPlayer.length * 2 +
      matchesArrayModKill.length * -4;
    // + matchesArrayMaster.length * 1;
    return rating;
  }

  //Добавить в аргументы результат и роль, и свести все функции в одну.
  function countMatches(array, unit) {
    const matchesArray = array.filter((element) => {
      return element.units.some((item) => item.unit._id === unit._id);
    });

    return matchesArray.length;
  }

  function countBlackRole(array, unit) {
    const matchesArray = array.filter((element) => {
      return element.units.some(
        (item) =>
          item.unit._id === unit._id &&
          (item.role === "мафия" || item.role === "дон")
      );
    });
    return matchesArray.length;
  }

  function countBlackVictory(array, unit) {
    const matchesArray = array.filter((element) => {
      return (
        element.units.some(
          (item) =>
            item.unit._id === unit._id &&
            (item.role === "мафия" || item.role === "дон")
        ) && element.result === "Победа мафии"
      );
    });
    return matchesArray.length;
  }

  function countRedRole(array, unit) {
    const matchesArray = array.filter((element) => {
      return element.units.some(
        (item) =>
          item.unit._id === unit._id &&
          (item.role === "мирный" || item.role === "шериф")
      );
    });
    return matchesArray.length;
  }

  function countRedVictory(array, unit) {
    const matchesArray = array.filter((element) => {
      return (
        element.units.some(
          (item) =>
            item.unit._id === unit._id &&
            (item.role === "мирный" || item.role === "шериф")
        ) && element.result === "Победа города"
      );
    });
    return matchesArray.length;
  }
  function countSheriffRole(array, unit) {
    const matchesArray = array.filter((element) => {
      return element.units.some(
        (item) => item.unit._id === unit._id && item.role === "шериф"
      );
    });
    return matchesArray.length;
  }

  function countSheriffVictory(array, unit) {
    const matchesArray = array.filter((element) => {
      return (
        element.units.some(
          (item) => item.unit._id === unit._id && item.role === "шериф"
        ) && element.result === "Победа города"
      );
    });
    return matchesArray.length;
  }

  function countDonRole(array, unit) {
    const matchesArray = array.filter((element) => {
      return element.units.some(
        (item) => item.unit._id === unit._id && item.role === "дон"
      );
    });
    return matchesArray.length;
  }

  function countDonVictory(array, unit) {
    const matchesArray = array.filter((element) => {
      return (
        element.units.some(
          (item) => item.unit._id === unit._id && item.role === "дон"
        ) && element.result === "Победа мафии"
      );
    });
    return matchesArray.length;
  }

  function countModKill(array, unit) {
    const matchesArray = array.filter((element) => {
      return element.units.some(
        (item) => item.unit._id === unit._id && item.modKill
      );
    });
    return matchesArray.length;
  }

  function countBestPlayer(array, unit) {
    const matchesArray = array.filter((element) => {
      return element.units.some(
        (item) => item.unit._id === unit._id && item.bestPlayer
      );
    });
    return matchesArray.length;
  }

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

{
  /* <table className="table">
<thead className="table__head">
  <tr className="table__row">
    <th rowSpan="2" className="table__cell table__cell-head">
      Ник игрока
    </th>
    <th rowSpan="2" className="table__cell table__cell-head">
      Количество игр
    </th>
    <th colSpan="2" className="table__cell table__cell-head">
      Мафия
    </th>
    <th colSpan="2" className="table__cell table__cell-head">
      Мирный
    </th>
    <th colSpan="2" className="table__cell table__cell-head">
      Шериф
    </th>
    <th colSpan="2" className="table__cell table__cell-head">
      Дон
    </th>
    <th rowSpan="2" className="table__cell table__cell-head">
      МК
    </th>
    <th rowSpan="2" className="table__cell table__cell-head">
      ЛИ
    </th>
    <th rowSpan="2" className="table__cell table__cell-head">
      Рейтинг
    </th>
  </tr>
  <tr className="table__row">
    <th className="table__cell table__cell table__cell-head">
      Сыграно
    </th>
    <th className="table__cell table__cell table__cell-head">Побед</th>
    <th className="table__cell table__cell table__cell-head">
      Сыграно
    </th>
    <th className="table__cell table__cell table__cell-head">Побед</th>
    <th className="table__cell table__cell table__cell-head">
      Сыграно
    </th>
    <th className="table__cell table__cell table__cell-head">Побед</th>
    <th className="table__cell table__cell table__cell-head">
      Сыграно
    </th>
    <th className="table__cell table__cell table__cell-head">Побед</th>
  </tr>
</thead> */
}
