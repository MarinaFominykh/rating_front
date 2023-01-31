import "./MatchEdit.scss";
import { useState, useContext, useEffect } from "react";
import Select from "react-select";
import moment from "moment";
import MatchCardUsers from "../MatchCardUsers/MatchCardUsers";
import Popup from "../Popup/Popup.jsx";
import Form from "../Form/Form";
import OptionUnit from "../OptionUnit/OptionUnit";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";
import { optionsResult } from "../../utils/constans.js";
import { optionsUnit } from "../../utils/functions.js";
import peopleIcon from "../../image/icons/fluent_people-20-regular.svg";
function MatchEdit({
  isOpen,
  match,
  title,
  onClose,
  onEditMatch,
  currentTitle,
  currentGameMaster,
  units,
  handleDelete,
  onMatchDelete,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  // const options = () => {
  //   return units.map((unit) => {
  //     return { value: unit._id, label: unit.name };
  //   });
  // };

  // const [gameMaster, setGameMaster] = useState("");
  const [gameMaster, setGameMaster] = useState({});
  const [result, setResult] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  function showInfoToolTip(error) {
    setMessage(error);
    setTimeout(() => setMessage(""), 5000);
  }
  function onChangeGameMaster(newValue) {
    setGameMaster(newValue);
  }
  function onChangeResult(newValue) {
    setResult(newValue);
    // setDefaultResult(newValue);
  }
  // function getValue() {
  //   return gameMaster ? options().find((c) => c.value === gameMaster) : "";
  // }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      (gameMaster.value === match.gameMaster._id || !gameMaster.value) &&
      (values.dateEditMatchForm === match.date || !values.dateEditMatchForm) &&
      (values.titleEditMatchForm === match.title ||
        !values.titleEditMatchForm) &&
      (result.value === match.result || !result.value)
    ) {
      showInfoToolTip("Измените данные");
    } else if (
      onEditMatch({
        id: match._id,
        title: values.titleEditMatchForm,
        gameMaster: gameMaster.value,
        date: values.dateEditMatchForm,
        result: result.value,
      })
      // console.log({
      //   id: match._id,
      //   title: values.titleEditMatchForm,
      //   gameMaster: gameMaster.value,
      //   date: values.dateEditMatchForm,
      //   result: result.value,
      // })
    )
      e.target.reset();
  }
  useEffect(() => {
    // document.querySelector(".css-1dimb5e-singleValue").textContent =
    //   match?.gameMaster?.name;

    setGameMaster({
      label: match?.gameMaster?.name,
      value: match?.gameMaster?._id,
    });
    // const getGmArray = match?.red?.map((item) => {
    //   return {
    //     value: item._id,
    //     label: item.name,
    //   };
    // });
    // setGameMaster(getGmArray);

    setDate(moment(match?.date).format("YYYY-MM-DD"));
    setResult({
      label: match?.result,
      value: match?.result,
    });
  }, [isOpen]);
  // useEffect(() => {
  //   setDate(moment(match?.date).format("YYYY-MM-DD"));
  // }, [isOpen]);
  return (
    <Popup isOpen={isOpen} className="match-edit">
      <article className="match-edit">
        <div className="match-edit__head"></div>
        <Form
          onSubmit={handleSubmit}
          className="match-edit"
          title="Редактирование игры"
          buttonLeftValue="Назад"
          // isDisabled={!isValid}
          handlerClick={onClose}
          linkClass="hidden"
          submitClass="visible"
          onClose={onClose}
          message={message}
        >
          <label
            className="form__label match-edit__label"
            htmlFor="titleEditMatchForm"
          >
            Название игры
          </label>
          <input
            className="form__input match-edit__input"
            name="titleEditMatchForm"
            id="titleEditMatchForm"
            type="text"
            placeholder="Введите название игры"
            defaultValue={match.title}
            onChange={handleChange}
          />
          <label
            className="form__labe match-edit__label"
            htmlFor="gameMasterEditMatchForm"
          >
            Выберите ведущего
          </label>
          {/* <select
            name="gameMasterEditMatchForm"
            defaultValue={match.gameMaster?.name}
            onChange={handleChange}
            className="form__input"
          >
            <option></option>
            {units.map((unit) => {
              return (
                <OptionUnit name={unit.name} key={unit._id} unitId={unit._id} />
              );
            })}
            <option value="newItem">...добавить игрока</option>
          </select> */}
          <Select
            options={optionsUnit(units)}
            name="gameMasterEditMatchForm"
            placeholder={<div>Выберите из списка</div>}
            isClearable
            value={gameMaster}
            onChange={onChangeGameMaster}
            className="match-edit__input select-input"
          />
          <fieldset className="match-edit__result-container form__result-container">
            <div className="match-edit__result-item match-edit__label">
              <label className="form__label" htmlFor="dateEditMatchForm">
                Дата окончания игры
              </label>
              <input
                className="form__input"
                name="dateEditMatchForm"
                id="dateEditMatchForm"
                type="date"
                placeholder="Дата окончания игры"
                defaultValue={date}
                // value={moment(match?.date).format("YYYY-MM-DD")}
                onChange={handleChange}
              />
            </div>
            <div className="match-edit__result-item">
              <label
                className="form__label match-edit__label"
                htmlFor="resultEditMatchRorm"
              >
                Результат игры
              </label>
              <Select
                options={optionsResult}
                name="resultEditMatchRorm"
                value={result}
                onChange={onChangeResult}
                placeholder={<div>Выберите из списка</div>}
                isClearable
                className="select-input"
              />
            </div>
          </fieldset>
          <div className="match-edit__user-title user-title">
            <img
              src={peopleIcon}
              alt="Участники"
              className="match-edit__user-img user-title__img"
            />
            <p className="match-edit__user-text user-title__text">Участники</p>
          </div>
          <MatchCardUsers
            isOpen={isOpen}
            match={match}
            listClass="match-edit"
            iconClass="delete"
            tooltipClass="tooltip"
            onClick={handleDelete}
          />
          <button
            type="button"
            className="match-edit__add-unit match-edit__button"
          >
            + Добавить участника
          </button>
          <button
            type="button"
            className="match-edit__delete-match match-edit__button"
            onClick={onMatchDelete}
          >
            <p className="match-edit__delete-text">Удалить игру</p>
            <div className="match-edit__delete-img"></div>
          </button>
          <InfoTooltip message={message} />
        </Form>
      </article>
    </Popup>
  );
}
export default MatchEdit;
