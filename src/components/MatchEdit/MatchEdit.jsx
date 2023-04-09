import "./MatchEdit.scss";
import { useState, useEffect } from "react";
import Select from "react-select";
import moment from "moment";
import Popup from "../Popup/Popup.jsx";
import Form from "../Form/Form";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import UnitEdit from "../UnitEdit/UnitEdit";
import {
  optionsResult,
  SHERIF,
  DONE,
  BLACK,
  RED,
  DUPLICATE_ELEMENTS,
} from "../../utils/constans.js";
import {
  optionsUnit,
  hasDuplicates,
  getIdArray,
  idArray,
} from "../../utils/functions.js";
import peopleIcon from "../../image/icons/fluent_people-20-regular.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  titleInEditMatch,
  gameMasterInEditMatch,
  dateInEditMatch,
  resultInEditMatch,
  bpInEditMatch,
  mkInEditMatch,
  sheriffInEditMatch,
  doneInEditMatch,
  black1InEditMatch,
  black2InEditMatch,
  red1InEditMatch,
  red2InEditMatch,
  red3InEditMatch,
  red4InEditMatch,
  red5InEditMatch,
  red6InEditMatch,
} from "../../redux/actions";
function MatchEdit({
  isOpen,
  onClose,
  onEditMatch,
  units,
  onMatchDelete,
  isOpenCard,
}) {
  const dispatch = useDispatch();
  const currentMatch = useSelector((state) => {
    const { currentMatchReducer } = state;
    return currentMatchReducer.match;
  });
  const dataForm = useSelector((state) => {
    const { editMatchReducer } = state;
    return editMatchReducer;
  });
  const {
    title,
    gameMaster,
    date,
    result,
    bestPlayer,
    modKill,
    sheriff,
    done,
    black1,
    black2,
    red1,
    red2,
    red3,
    red4,
    red5,
    red6,
  } = dataForm;
  const [currentPoolOptions, setCurrentPoolOptions] = useState([]);
  const [message, setMessage] = useState("");

  function showInfoToolTip(error) {
    setMessage(error);
    setTimeout(() => setMessage(""), 5000);
  }

  function onChangeTitle(e) {
    dispatch(titleInEditMatch(e.target.value));
  }
  function onChangeGameMaster(newValue) {
    dispatch(gameMasterInEditMatch(newValue));
  }
  function onChangeResult(newValue) {
    dispatch(resultInEditMatch(newValue));
  }
  function onChangeDate(e) {
    dispatch(dateInEditMatch(e.target.value));
  }
  function onChangeBestPlayer(newValue) {
    dispatch(
      bpInEditMatch(
        newValue.map((item) => {
          return item;
        })
      )
    );
  }
  function onChangeMk(newValue) {
    dispatch(
      mkInEditMatch(
        newValue.map((item) => {
          return item;
        })
      )
    );
  }
  function onChangeSheriff(newValue) {
    dispatch(sheriffInEditMatch(newValue));
  }
  function onChangeDone(newValue) {
    dispatch(doneInEditMatch(newValue));
  }

  function onChangeBlack1(newValue) {
    dispatch(black1InEditMatch(newValue));
  }
  function onChangeBlack2(newValue) {
    dispatch(black2InEditMatch(newValue));
  }
  function onChangeRed1(newValue) {
    dispatch(red1InEditMatch(newValue));
  }
  function onChangeRed2(newValue) {
    dispatch(red2InEditMatch(newValue));
  }
  function onChangeRed3(newValue) {
    dispatch(red3InEditMatch(newValue));
  }
  function onChangeRed4(newValue) {
    dispatch(red4InEditMatch(newValue));
  }
  function onChangeRed5(newValue) {
    dispatch(red5InEditMatch(newValue));
  }
  function onChangeRed6(newValue) {
    dispatch(red6InEditMatch(newValue));
  }

  useEffect(() => {
    dispatch(titleInEditMatch(currentMatch.title));
    dispatch(
      gameMasterInEditMatch({
        label: currentMatch.gameMaster?.name,
        value: currentMatch.gameMaster?._id,
      })
    );
    dispatch(
      resultInEditMatch({
        label: currentMatch.result,
        value: currentMatch.result,
      })
    );
    dispatch(
      sheriffInEditMatch({
        label: currentMatch.sheriff?.name,
        value: currentMatch.sheriff?._id,
      })
    );
    dispatch(
      doneInEditMatch({
        label: currentMatch.done?.name,
        value: currentMatch.done?._id,
      })
    );
    dispatch(
      black1InEditMatch({
        label: currentMatch.black?.[0].name,
        value: currentMatch.black?.[0]._id,
      })
    );
    dispatch(
      black2InEditMatch({
        label: currentMatch.black?.[1].name,
        value: currentMatch.black?.[1]._id,
      })
    );
    dispatch(
      red1InEditMatch({
        label: currentMatch.red?.[0].name,
        value: currentMatch.red?.[0]._id,
      })
    );
    dispatch(
      red2InEditMatch({
        label: currentMatch.red?.[1].name,
        value: currentMatch.red?.[1]._id,
      })
    );
    dispatch(
      red3InEditMatch({
        label: currentMatch.red?.[2].name,
        value: currentMatch.red?.[2]._id,
      })
    );
    dispatch(
      red4InEditMatch({
        label: currentMatch.red?.[3].name,
        value: currentMatch.red?.[3]._id,
      })
    );
    dispatch(
      red5InEditMatch({
        label: currentMatch.red?.[4].name,
        value: currentMatch.red?.[4]._id,
      })
    );
    dispatch(
      red6InEditMatch({
        label: currentMatch.red?.[5].name,
        value: currentMatch.red?.[5]._id,
      })
    );
    dispatch(
      bpInEditMatch(
        currentMatch.bestPlayer?.map((item) => {
          return {
            label: item.name,
            value: item._id,
          };
        })
      )
    );
    dispatch(
      mkInEditMatch(
        currentMatch.modKill?.map((item) => {
          return {
            label: item.name,
            value: item._id,
          };
        })
      )
    );

    dispatch(dateInEditMatch(moment(currentMatch.date).format("YYYY-MM-DD")));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenCard, isOpen]);
  useEffect(() => {
    const array = [
      black1,
      black2,
      red1,
      red2,
      red3,
      red4,
      red5,
      red6,
      sheriff,
      done,
    ];
    setCurrentPoolOptions(array);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataForm]);
  function handleSubmit(e) {
    e.preventDefault();
    const data = [
      black1.value,
      black2.value,
      red1.value,
      red2.value,
      red3.value,
      red4.value,
      red5.value,
      red6.value,
      sheriff.value,
      done.value,
    ];

    const prevValues = [
      currentMatch.title,
      currentMatch.gameMaster._id,
      moment(currentMatch.date).format("YYYY-MM-DD"),
      currentMatch.result,
      ...idArray(currentMatch.bestPlayer),
      ...idArray(currentMatch.modKill),
      currentMatch.sheriff._id,
      currentMatch.done._id,
      ...idArray(currentMatch.black),
      ...idArray(currentMatch.red),
    ];
    const currentValues = [
      title,
      gameMaster.value,
      date,
      result.value,
      ...getIdArray(bestPlayer),
      ...getIdArray(modKill),
      sheriff.value,
      done.value,
      black1.value,
      black2.value,
      red1.value,
      red2.value,
      red3.value,
      red4.value,
      red5.value,
      red6.value,
    ];

    if (!title || !date) {
      showInfoToolTip("Заполните все поля");
    } else if (JSON.stringify(prevValues) === JSON.stringify(currentValues)) {
      showInfoToolTip("Измените данные");
    } else if (hasDuplicates(data)) {
      showInfoToolTip(DUPLICATE_ELEMENTS);
    } else
      onEditMatch({
        id: currentMatch._id,
        ...dataForm,
        gameMaster: gameMaster.value,
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
        modKill: getIdArray(modKill),
        bestPlayer: getIdArray(bestPlayer),
      });
  }

  return (
    <Popup isOpen={isOpen} className="match-edit">
      <article className="match-edit">
        <div className="match-edit__head"></div>
        <Form
          onSubmit={handleSubmit}
          className="match-edit"
          title="Редактирование игры"
          buttonLeftValue="Назад"
          handlerClick={onClose}
          linkClass="hidden"
          submitClass="visible"
          onClose={onClose}
          message={message}
        >
          <label className="form__label match-edit__label">Название игры</label>
          <input
            className="form__input match-edit__input"
            type="text"
            placeholder="Введите название игры"
            defaultValue={title}
            onChange={onChangeTitle}
          />
          <label
            className="form__label match-edit__label"
            htmlFor="gameMasterEditMatchForm"
          >
            Выберите ведущего
          </label>
          <Select
            options={optionsUnit(units)}
            placeholder={<div>Выберите из списка</div>}
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
                value={date}
                onChange={onChangeDate}
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
                value={result}
                onChange={onChangeResult}
                placeholder={<div>Выберите из списка</div>}
                className="select-input"
              />
            </div>
          </fieldset>
          <label className="form__label match-edit__label">Лучший игрок</label>
          <Select
            options={currentPoolOptions}
            value={bestPlayer}
            onChange={onChangeBestPlayer}
            placeholder={<div>Выберите из списка</div>}
            isClearable
            isMulti
            className="match-edit__input select-input"
          />
          <label className="form__label match-edit__label">Модкилл</label>
          <Select
            options={currentPoolOptions}
            value={modKill}
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
