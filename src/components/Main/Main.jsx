import "./Main.scss";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getMatches, getUnits } from "../../utils/Api.js";
import Unit from "../Unit/Unit.jsx";
import RatingTable from "../TotalRatingTable/RatingTable.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";
function Main({
  allUnits,
  onUpdateUnit,
  sortData,
  matches,
  matches2020,
  matches2021,
  matches2022,
}) {
  const [period, setPeriod] = useState("allTime");
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function filterResult(array, result) {
    const newArray = array.filter((item) => {
      return item.result === result;
    });
    return newArray.length;
  }
  function getPeriod() {
    setPeriod(values.period);
  }
  const matchesArray = () => {
    if (period === "2020") {
      return matches2020;
    } else if (period === "2021") {
      return matches2021;
    } else if (period === "2022") {
      return matches2022;
    }
    return matches;
  };
  useEffect(() => {
    getPeriod();
  }, [values.period]);
  console.log(period);
  return (
    <main className="main">
      <div className="main__head">
        <div className="main__title-container">
          <h1 className="main__title">Рейтинг</h1>
          <p className="main__amount">
            Количество игр: {matchesArray().length}
          </p>
        </div>
        <form>
          <select
            className="select"
            name="period"
            value={values.period}
            onChange={handleChange}
            defaultValue="allTime"
          >
            <option className="select__option" value="allTime">
              За все время
            </option>
            <option className="select__option" value="2020">
              2020
            </option>
            <option className="select__option" value="2021">
              2021
            </option>
            <option className="select__option" value="2022">
              2022
            </option>
          </select>
        </form>
      </div>
      <div className="main__count">
        <p className="main__count-text">Город</p>
        <p className="main__count-number">
          {filterResult(matchesArray(), "Победа города")}
        </p>
        <p className="main__count-separator">:</p>
        <p className="main__count-number">
          {filterResult(matchesArray(), "Победа мафии")}
        </p>

        <p className="main__count-text">Мафия</p>
      </div>

      <RatingTable
        allUnits={allUnits}
        onUpdateUnit={onUpdateUnit}
        sortData={sortData}
        matches={matchesArray()}
      />
    </main>
  );
}

export default Main;
