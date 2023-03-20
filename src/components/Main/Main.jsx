import "./Main.scss";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getMatches, getUnits } from "../../utils/Api.js";
import Unit from "../Unit/Unit.jsx";
import RatingTable from "../TotalRatingTable/RatingTable.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";
import {
  CurrentStateSelect,
  currentStateDefault,
} from "../../contexts/CurrentStateSelect.jsx";
import { addTest, removeTest, selectValue } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function Main({
  allUnits,
  onUpdateUnit,
  sortData,
  matches,
  showUnit,

}) {
  const dispatch = useDispatch();
  const period = useSelector((state) => {
    const { selectPeriodReducer } = state;
    return selectPeriodReducer.value;
  });
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  function handleSelectChange(e) {
    dispatch(selectValue(e.target.value));
  }
  function filterResult(array, result) {
    const newArray = array.filter((item) => {
      return item.result === result;
    });
    return newArray.length;
  }
  // const matchesArray = () => {
  //   if (period === "2020") {
  //     return matches2020;
  //   } else if (period === "2021") {
  //     return matches2021;
  //   } else if (period === "2022") {
  //     return matches2022;
  //   }
  //   return matches;
  // };
  return (
    <main className="main">
      <section className="raiting">
        <div className="raiting__head">
          <div className="raiting__title-container">
            <h1 className="raiting__title">Рейтинг</h1>
            <p className="raiting__amount">Количество игр: {matches.length}</p>
          </div>
          <form className="main__select">
            <select
              className="select"
              name="period"
              // value={values.period}
              onChange={handleSelectChange}
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
              <option className="select__option" value="2023">
                2023
              </option>
              <option className="select__option" value="2024">
                2024
              </option>
              <option className="select__option" value="2025">
                2025
              </option>
            </select>
          </form>
        </div>
        <div className="raiting__count">
          <p className="raiting__count-text">Город</p>
          <p className="raiting__count-number">
            {filterResult(matches, "Победа города")}
          </p>
          <p className="raiting__count-separator">:</p>
          <p className="raiting__count-number">
            {filterResult(matches, "Победа мафии")}
          </p>

          <p className="raiting__count-text">Мафия</p>
        </div>

        <RatingTable
          allUnits={allUnits}
          onUpdateUnit={onUpdateUnit}
          sortData={sortData}
          matches={matches}
          showUnit={showUnit}
         
        />
      </section>
    </main>
  );
}
function mapStateToProps(state) {
  const { testReducer } = state;
  return {
    test: testReducer.test,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(addTest()),
    onRemove: () => dispatch(removeTest()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
