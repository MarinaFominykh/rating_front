import React from "react";
import { useState, useContext, useEffect, useCallback } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import Select from "react-select";
import { useForm } from "react-hook-form";
import moment from "moment";
import "./EditMatchForm.scss";
import { getMatches, getUnits } from "../../utils/Api.js";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import Popup from "../Popup/Popup.jsx";
import Form from "../Form/Form.jsx";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";
import { optionsResult } from "../../utils/constans";
import { optionsUnit } from "../../utils/functions";
function EditMatchForm({
  isOpen,
  onEditMatch,
  onClose,
  onClick,
  units,
  match,
}) {
  let location = useLocation();

  const history = useHistory();
  // const {
  //   register,
  //   formState: { errors, isValid },
  //   handleSubmit,
  //   reset,
  // } = useForm({ mode: "onBlur" });
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();
  const [colourOptions, setColourOptions] = useState([]);
  // const [colourOptions, setColourOptions] = useState([
  //   { value: 'ocean', label: 'Ocean' },
  //   { value: 'blue', label: 'Blue'},
  //   { value: 'purple', label: 'Purple'},
  //   { value: 'red', label: 'Red'},
  //   { value: 'orange', label: 'Orange'},
  //   { value: 'yellow', label: 'Yellow'},
  //   { value: 'green', label: 'Green'},
  //   { value: 'forest', label: 'Forest'},
  //   { value: 'slate', label: 'Slate'},
  //   { value: 'silver', label: 'Silver'},
  // ]) ;
  const [gameMaster, setGameMaster] = useState({});
  const [result, setResult] = useState({});
  const [date, setDate] = useState("");
  const [blackUnits, setBlackUnits] = useState([]);
  const [redUnits, setRedUnits] = useState([]);
  const [sheriff, setSheriff] = useState({});
  const [done, setDone] = useState({});
  const [best, setBest] = useState([]);
  const [MK, setMK] = useState([]);
  const [bestArray, setBestArray] = useState([]);
  const [tab, setTab] = useState("1");
  const [linkText, setLinkText] = useState("");
  const [classSubmit, setСlassSubmit] = useState("");
  const [classLink, setСlassLink] = useState("");
  const [link, setLink] = useState("");
  const [linkBack, setLinkBack] = useState("");
  const [classArticle, setClassArticle] = useState("form__tabs-block-visible");
  const [classSecondArticle, setSecondArticle] = useState("form__tabs-block");
  const [classLastArticle, setClassLastArticle] = useState("form__tabs-block");
  const [message, setMessage] = useState("");
  const [isValidComposition, setIsValidComposition] = useState(false);
  const showInfoToolTip = (error) => {
    setMessage(error);
    setTimeout(() => setMessage(""), 5000);
  };
  function onChangeGameMaster(newValue) {
    setGameMaster(newValue);
  }
  function onChangeResult(newValue) {
    setResult(newValue);
  }
  // function onChangeBlack(newValue) {
  //   setBlackUnits(
  //     newValue.map((item) => {
  //       return item.value;
  //     })
  //   );
  // }
  function onChangeBlack(newValue) {
    setBlackUnits(
      newValue.map((item) => {
        return item.value;
      })
    );
  }
  function onChangeRed(newValue) {
    setRedUnits(
      newValue.map((item) => {
        return item.value;
      })
    );
  }
  function onChangeDone(newValue) {
    setDone(newValue);
  }
  function onChangeSheriff(newValue) {
    setSheriff(newValue);
  }
  function onChangeBest(newValue) {
    setBest(
      newValue.map((item) => {
        return item.value;
      })
    );
  }
  function onChangeMK(newValue) {
    setMK(
      newValue.map((item) => {
        return item.value;
      })
    );
  }
  function handleClose() {
    if (location.hash === "#tab_01" || !location.hash) {
      return onClose();
    } else return;
  }

  function getSpanMessageBlack() {
    if (blackUnits.length > 0 && blackUnits.length < 2) {
      return `Добавьте ещё ${2 - blackUnits.length} игрока`;
    } else if (blackUnits.length > 0 && blackUnits.length > 2) {
      return `Удалите ${blackUnits.length - 2} игрока`;
    } else return;
  }
  function getSpanMessageRed() {
    if (redUnits.length > 0 && redUnits.length < 6) {
      return `Добавьте ещё ${6 - redUnits.length} игрока`;
    } else if (redUnits.length > 0 && redUnits.length > 6) {
      return `Удалите ${redUnits.length - 6} игрока`;
    } else return;
  }
  useEffect(() => {
    if (
      !gameMaster?.value ||
      !result?.value ||
      !sheriff?.value ||
      !done?.value ||
      blackUnits.length !== 2 ||
      redUnits.length !== 6
    ) {
      return setIsValidComposition(false);
    } else {
      return setIsValidComposition(true);
    }
  }, [gameMaster, result, blackUnits, redUnits, sheriff, done]);

  useEffect(() => {
    setGameMaster({
      label: match?.gameMaster?.name,
      value: match?.gameMaster?._id,
    });
    setDate(moment(match?.date).format("YYYY-MM-DD"));
    setResult({
      label: match?.result,
      value: match?.result,
    });
    setDone({
      label: match?.done?.name,
      value: match?.done?._id,
    });
    setSheriff({
      label: match?.sheriff?.name,
      value: match?.sheriff?._id,
    });
    setBestArray(
      match?.red?.map((item) => {
        return {
          value: item._id,
          label: item.name,
        };
      }).concat(match?.black?.map((item) => {
        return {
          value: item._id,
          label: item.name,
        };
      }))
    );
    // setBlackUnits(match?.black?.map((item) => {
    //   return {
    //     value: item._id,
    //     label: item.name,
    //   }
    // }))
  }, [isOpen]);

  function onSubmit(e) {
    e.preventDefault();

    onEditMatch({
      id: match._id,
      title: values.titleEditMatchForm,
      gameMaster: gameMaster.value,
      date: values.dateEditMatchForm,
      result: result.value,
      black: blackUnits,
      red: redUnits,
      sheriff: sheriff.value,
      done: done.value,
      bestPlayer: best,
      modKill: MK,
    });
    history.push("/matches");
    window.location.reload();
  }
  useEffect(() => {
    if (location.hash === "#tab_02") {
      return setTab("2");
    } else if (location.hash === "#tab_03") {
      return setTab("3");
    } else {
      return setTab("1");
    }
  }, [location]);
  useEffect(() => {
    if (location.hash === "#tab_02") {
      setLinkText("Назад");
      setСlassSubmit("hidden");
      setСlassLink("visible");
      setLink("#tab_03");
      setLinkBack("#tab_01");
      setClassArticle("form__tabs-block");
      setClassLastArticle("form__tabs-block");
      setSecondArticle("form__tabs-block-visible");
    } else if (location.hash === "#tab_03") {
      setLinkText("Назад");
      setСlassSubmit("visible");
      setСlassLink("hidden");
      setLinkBack("#tab_02");
      setClassArticle("form__tabs-block");
      setSecondArticle("form__tabs-block");
      setClassLastArticle("form__tabs-block-visible");
    } else {
      setLinkText("Отменить");
      setСlassSubmit("hidden");
      setСlassLink("visible");
      setLink("#tab_02");
      setSecondArticle("form__tabs-block");
      setClassLastArticle("form__tabs-block");
      setClassArticle("form__tabs-block-visible");
    }
  }, [location, isOpen]);

  // useEffect(() => {
  //   return history.push("/");
  // }, [onSubmit]);

  return (
    <Popup isOpen={isOpen}>
      <Form
        className="add-mathes"
        onSubmit={onSubmit}
        onClose={onClose}
        title="Редактирование игры"
        button="Сохранить"
        isDisabled={!isValidComposition}
        buttonLeftValue={linkText}
        link={link}
        submitClass={classSubmit}
        linkClass={classLink}
        linkBack={linkBack}
        handlerClick={handleClose}
      >
        <div className="form__tabs">
          <nav className="form__nav">
            <a href="#tab_01" className="form__nav-item">
              <p
                className={`form__nav-paragraph form__nav-number ${
                  tab !== "1" && "form__nav-number_disabled"
                }`}
              >
                1
              </p>
              <p
                className={`form__nav-paragraph form__nav-text ${
                  tab !== "1" && "form__nav-text_disabled"
                }`}
              >
                Параметры игры
              </p>
            </a>
            <a href="#tab_02" className="form__nav-item">
              <p
                className={`form__nav-paragraph form__nav-number ${
                  tab !== "2" && "form__nav-number_disabled"
                }`}
              >
                2
              </p>
              <p
                className={`form__nav-paragraph form__nav-text ${
                  tab !== "2" && "form__nav-text_disabled"
                }`}
              >
                Участники
              </p>
            </a>
            <a href="#tab_03" className="form__nav-item">
              <p
                className={`form__nav-paragraph form__nav-number ${
                  tab !== "3" && "form__nav-number_disabled"
                }`}
              >
                2
              </p>
              <p
                className={`form__nav-paragraph form__nav-text ${
                  tab !== "3" && "form__nav-text_disabled"
                }`}
              >
                Прочее
              </p>
            </a>
          </nav>
          <div className="form__tabs-body">
            <article className={classArticle} id="tab_01">
              <label className="form__label" htmlFor="titleEditMatchForm">
                Название игры
              </label>
              <input
                className="form__input form__input-add-match"
                name="titleEditMatchForm"
                id="titleEditMatchForm"
                type="text"
                placeholder="Введите название игры"
                defaultValue={match.title}
                onChange={handleChange}
                // {...register("titleEditMatchForm")}
              ></input>
              <label className="form__label" htmlFor="gameMasterEditMatchForm">
                Выберите ведущего
              </label>
              <Select
                options={optionsUnit(units)}
                value={gameMaster}
                name="gameMasterEditMatchForm"
                placeholder={<div>Выберите из списка</div>}
                isClearable
                onChange={onChangeGameMaster}
              />

              <fieldset className="form__result-container">
                <div className="form__result-item">
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
                    // {...register("dateEditMatchForm")}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="form__result-item">
                  <label className="form__label" htmlFor="resultEditMatchForm">
                    Результат игры
                  </label>

                  <Select
                    options={optionsResult}
                    name="resultEditMatchForm"
                    value={result}
                    onChange={onChangeResult}
                    required
                    placeholder={<div>Выберите из списка</div>}
                    isClearable
                  />
                </div>
              </fieldset>
            </article>
            <article className={classSecondArticle} id="tab_02">
              <label className="form__label add-match__label">Мафия</label>
              <Select
                options={optionsUnit(units)}
                isMulti
                name="blackEditMatchRorm"
                required
                placeholder={<div>Добавьте игрока</div>}
                onChange={onChangeBlack}
                isClearable
              />
              <Error error={getSpanMessageBlack()}></Error>
              <label className="form__label add-match__label">Дон</label>
              <Select
                options={optionsUnit(units)}
                name="doneEditMatchRorm"
                value={done}
                onChange={onChangeDone}
                required
                placeholder={<div>Добавьте игрока</div>}
                isClearable
              />
              <Error error={!done && "Укажите дона мафии"}></Error>
              <label className="form__label add-match__label">Шериф</label>
              <Select
                options={optionsUnit(units)}
                name="sheriffEditMatchRorm"
                onChange={onChangeSheriff}
                value={sheriff}
                required
                placeholder={<div>Добавьте игрока</div>}
                isClearable
              />
              <Error error={!sheriff && "Укажите шерифа"}></Error>
              <label className="form__label add-match__label">
                Мирные жители
              </label>
              <Select
                options={optionsUnit(units)}
                isMulti
                name="redEditMatchRorm"
                onChange={onChangeRed}
                required
                placeholder={<div>Добавьте игрока</div>}
                className="form__input-black"
              />
              <Error error={getSpanMessageRed()}></Error>
            </article>
            <article className={classLastArticle} id="tab_03">
              <label className="form__label">Лучший игрок</label>
              <Select
                options={bestArray}
                isMulti
                name="bestEditMatchRorm"
                onChange={onChangeBest}
                placeholder={<div>Добавьте игрока</div>}
                isClearable
                className="form__input-wo-error"
              />
              <label className="form__label">МК</label>
              <Select
                options={optionsUnit(units)}
                isMulti
                name="mkEditMatchRorm"
                onChange={onChangeMK}
                placeholder={<div>Добавьте игрока</div>}
                isClearable
                className="form__input-wo-error"
              />
            </article>
          </div>
        </div>
      </Form>
    </Popup>
  );
}

export default EditMatchForm;
