import "./MatchEdit.scss";
import { useState, useContext, useEffect } from "react";
import Select from "react-select";
import moment from "moment";
import MatchCardUsers from "../MatchCardUsers/MatchCardUsers";
import Popup from "../Popup/Popup.jsx";
import Form from "../Form/Form";
import OptionUnit from "../OptionUnit/OptionUnit";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import UnitEdit from "../UnitEdit/UnitEdit";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";
import {
  optionsResult,
  SHERIF,
  DONE,
  BLACK,
  RED,
} from "../../utils/constans.js";
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
  onEditUnitsClick,
  unit,
  isOpenCard,
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
  const [bestPlayer, setBestPlayer] = useState([]);
  const [mk, setMk] = useState([]);
  const [sheriff, setSheriff] = useState({});
  const [done, setDone] = useState({});
  const [black1, setBlack1] = useState({});
  const [black2, setBlack2] = useState({});
  const [red1, setRed1] = useState({});
  const [red2, setRed2] = useState({});
  const [red3, setRed3] = useState({});
  const [red4, setRed4] = useState({});
  const [red5, setRed5] = useState({});
  const [red6, setRed6] = useState({});
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

  function onChangeSheriff(newValue) {
    setSheriff(newValue);
  }
  function onChangeDone(newValue) {
    setDone(newValue);
  }
  function onChangeBestPlayer(newValue) {
    setBestPlayer(newValue);
  }
  function onChangeMk(newValue) {
    setMk(newValue);
  }
  // function onChangeBlack(newValue) {
  //   setBlackArray(newValue);
  // }
  function onChangeBlack1(newValue) {
    setBlack1(newValue);
  }
  function onChangeBlack2(newValue) {
    setBlack2(newValue);
  }
  function onChangeRed1(newValue) {
    setRed1(newValue);
  }
  function onChangeRed2(newValue) {
    setRed2(newValue);
  }
  function onChangeRed3(newValue) {
    setRed3(newValue);
  }
  function onChangeRed4(newValue) {
    setRed4(newValue);
  }
  function onChangeRed5(newValue) {
    setRed5(newValue);
  }
  function onChangeRed6(newValue) {
    setRed6(newValue);
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
      (result.value === match.result || !result.value) &&
      (sheriff.value === match.sheriff._id || !sheriff.value) &&
      (done.value === match.done._id || !done.value) 
      &&
      (JSON.stringify(match.black.map((item) => {
        return item._id
      })) === JSON.stringify([black1.value, black2.value])
    )
    &&
      (JSON.stringify(match.red.map((item) => {
        return item._id
      })) === JSON.stringify([red1.value,
        red2.value,
        red3.value,
        red4.value,
        red5.value,
        red6.value,])
    )
      &&
      (JSON.stringify(mk.map((item) => {
        return {
          _id: item.value,
          name: item.label,
        };
      })) === JSON.stringify(match.modKill)
    ) &&
    (JSON.stringify(bestPlayer.map((item) => {
      return {
        _id: item.value,
        name: item.label,
      };
    })) === JSON.stringify(match.bestPlayer)
  )) {
      showInfoToolTip("Измените данные");
    } else if (
      onEditMatch({
        id: match._id,
        title: values.titleEditMatchForm,
        gameMaster: gameMaster.value,
        date: values.dateEditMatchForm,
        result: result.value,
        sheriff: sheriff.value,
        done: done.value,
        black: [black1.value, black2.value],
        red: [
          red1.value,
          red2.value,
          red3.value,
          red4.value,
          red5.value,
          red6.value,
        ],
        modKill: mk.map((item) => {
          return item.value;
        }),
        bestPlayer: bestPlayer.map((item) => {
          return item.value;
        }),
      })
      
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

    setBestPlayer(
      match?.bestPlayer?.map((item) => {
        return {
          label: item.name,
          value: item._id,
        };
      })
    );
    setMk(
      match?.modKill?.map((item) => {
        return {
          label: item.name,
          value: item._id,
        };
      })
    );
    setBlack1({
      label: match?.black?.[0].name,
      value: match?.black?.[0]._id,
    });
    setBlack2({
      label: match?.black?.[1].name,
      value: match?.black?.[1]._id,
    });
    setRed1({
      label: match?.red?.[0].name,
      value: match?.red?.[0]._id,
    });
    setRed2({
      label: match?.red?.[1].name,
      value: match?.red?.[1]._id,
    });
    setRed3({
      label: match?.red?.[2].name,
      value: match?.red?.[2]._id,
    });
    setRed4({
      label: match?.red?.[3].name,
      value: match?.red?.[3]._id,
    });
    setRed5({
      label: match?.red?.[4].name,
      value: match?.red?.[4]._id,
    });
    setRed6({
      label: match?.red?.[5].name,
      value: match?.red?.[5]._id,
    });
    setSheriff({
      label: match?.sheriff?.name,
      value: match?.sheriff?._id,
    });
    setDone({
      label: match?.done?.name,
      value: match?.done?._id,
    });
    setDate(moment(match?.date).format("YYYY-MM-DD"));
    setResult({
      label: match?.result,
      value: match?.result,
    });
  }, [isOpenCard, isOpen]);

  useEffect(() => {}, [isOpen]);
  // useEffect(() => {
  //   setDate(moment(match?.date).format("YYYY-MM-DD"));
  // }, [isOpen]);

  const handleEditUnits = () => {
    onEditUnitsClick(match, unit);
  };
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
            className="form__label match-edit__label"
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
          <label className="form__label match-edit__label">Лучший игрок</label>
          <Select
            options={optionsUnit(units)}
            value={bestPlayer}
            onChange={onChangeBestPlayer}
            placeholder={<div>Выберите из списка</div>}
            isClearable
            isMulti
            className="match-edit__input select-input"
          />
          <label className="form__label match-edit__label">Модкилл</label>
          <Select
            options={optionsUnit(units)}
            value={mk}
            onChange={onChangeMk}
            placeholder={<div>Выберите из списка</div>}
            isClearable
            isMulti
            className="match-edit__input select-input"
          />
          <div className="match-edit__user-title user-title">
            <img
              src={peopleIcon}
              alt="Участники"
              className="match-edit__user-img user-title__img"
            />
            <p className="match-edit__user-text user-title__text">Участники</p>
          </div>
          {/* <MatchCardUsers
            isOpen={isOpen}
            match={match}
            listClass="match-edit"
            iconClass="delete"
            tooltipClass="tooltip"
            onClick={handleEditUnits}
          /> */}
          <fieldset className="match-edit__users">
            <UnitEdit
              role={SHERIF}
              units={units}
              value={sheriff}
              onChange={onChangeSheriff}
            />
            <UnitEdit
              role={DONE}
              units={units}
              value={done}
              onChange={onChangeDone}
            />
            <UnitEdit
              role={BLACK}
              units={units}
              value={black1}
              onChange={onChangeBlack1}
            />
            <UnitEdit
              role={BLACK}
              units={units}
              value={black2}
              onChange={onChangeBlack2}
            />
            <UnitEdit
              role={RED}
              units={units}
              value={red1}
              onChange={onChangeRed1}
            />
            <UnitEdit
              role={RED}
              units={units}
              value={red2}
              onChange={onChangeRed2}
            />
            <UnitEdit
              role={RED}
              units={units}
              value={red3}
              onChange={onChangeRed3}
            />
            <UnitEdit
              role={RED}
              units={units}
              value={red4}
              onChange={onChangeRed4}
            />
            <UnitEdit
              role={RED}
              units={units}
              value={red5}
              onChange={onChangeRed5}
            />
            <UnitEdit
              role={RED}
              units={units}
              value={red6}
              onChange={onChangeRed6}
            />
          </fieldset>
          {/* <button
            type="button"
            className="match-edit__add-unit match-edit__button"
            onClick={handleEditUnits}
          >
            + Добавить участника
          </button> */}
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
