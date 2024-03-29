import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Select from 'react-select';
// import CreatableSelect from "react-select/creatable";
import { useForm } from 'react-hook-form';
import './AddMatchesForm.scss';
import Popup from '../Popup/Popup.jsx';
import Form from '../Form/Form.jsx';
import Error from '../Error/Error.jsx';
import {
  optionsResult,
  DUPLICATE_ELEMENTS,
  HOMEPAGE_ROOT,
  HOMEPAGE_MATCHES,
} from '../../utils/constans';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { hasDuplicates, optionsUnit, getIdArray } from '../../utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import {
  newGameMaster,
  sheriffInAddMatch,
  doneInAddMatch,
  redArrayInAddMatch,
  blackArrayInAddMatch,
  bestPlayerArrayInAddMatch,
  modKillArrayInAddMatch,
} from '../../redux/actions';

function AddMatchesForm({ isOpen, onAddMatch, onClose, units }) {
  let location = useLocation();
  const history = useHistory();

  const path = () => {
    if (location.pathname === '/matches') {
      return HOMEPAGE_MATCHES;
    } else {
      return HOMEPAGE_ROOT;
    }
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => {
    const { newMatchReducer } = state;
    return newMatchReducer;
  });
  const { gameMaster, sheriff, done, red, black } = dataForm;
  const [result, setResult] = useState({});
  const [currentPoolOptions, setCurrentPoolOptions] = useState([]);
  const [tab, setTab] = useState('1');
  const [linkText, setLinkText] = useState('');
  const [classSubmit, setСlassSubmit] = useState('');
  const [classLink, setСlassLink] = useState('');
  const [link, setLink] = useState('');
  const [linkBack, setLinkBack] = useState('');
  const [classArticle, setClassArticle] = useState('form__tabs-block-visible');
  const [classSecondArticle, setSecondArticle] = useState('form__tabs-block');
  const [classLastArticle, setClassLastArticle] = useState('form__tabs-block');
  const [message, setMessage] = useState('');
  const [isValidComposition, setIsValidComposition] = useState(false);
  const showInfoToolTip = (error) => {
    setMessage(error);
    setTimeout(() => setMessage(''), 5000);
  };

  function onChangeNewGm(newValue) {
    dispatch(newGameMaster(newValue));
  }
  function onChangeSheriff(newValue) {
    dispatch(sheriffInAddMatch(newValue));
  }
  function onChangeDone(newValue) {
    dispatch(doneInAddMatch(newValue));
  }
  function onChangeRed(newValue) {
    dispatch(
      redArrayInAddMatch(
        newValue.map((item) => {
          return item;
        })
      )
    );
  }
  function onChangeBlack(newValue) {
    dispatch(
      blackArrayInAddMatch(
        newValue.map((item) => {
          return item;
        })
      )
    );
  }
  function onChangeBest(newValue) {
    dispatch(
      bestPlayerArrayInAddMatch(
        newValue.map((item) => {
          return item.value;
        })
      )
    );
  }
  function onChangeMK(newValue) {
    dispatch(
      modKillArrayInAddMatch(
        newValue.map((item) => {
          return item.value;
        })
      )
    );
  }
  function onChangeResult(newValue) {
    setResult(newValue);
  }

  function handleClose() {
    if (location.hash === '#tab_01' || !location.hash) {
      return onClose();
    } else return;
  }

  function getSpanMessageBlack() {
    if (black.length > 0 && black.length < 2) {
      return `Добавьте ещё ${2 - black.length} игрока`;
    } else if (black.length > 0 && black.length > 2) {
      return `Удалите ${black.length - 2} игрока`;
    } else return;
  }
  function getSpanMessageRed() {
    if (red.length > 0 && red.length < 6) {
      return `Добавьте ещё ${6 - red.length} игрока`;
    } else if (red.length > 0 && red.length > 6) {
      return `Удалите ${red.length - 6} игрока`;
    } else return;
  }

  useEffect(() => {
    if (
      !gameMaster?.value ||
      !result?.value ||
      !done?.value ||
      black.length !== 2 ||
      red.length !== 6
    ) {
      return setIsValidComposition(false);
    } else {
      return setIsValidComposition(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataForm, result]);

  useEffect(() => {
    const array = [...black, ...red, sheriff, done];
    const filterArray = array.filter((item) => item !== null);
    setCurrentPoolOptions(filterArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataForm]);

  function onSubmit(e) {
    const data = [...black, ...red, sheriff.value, done.value];

    if (hasDuplicates(data)) {
      showInfoToolTip(DUPLICATE_ELEMENTS);
      return;
    }
    onAddMatch({
      ...dataForm,
      title: e.titleAddMatchForm,
      date: e.dateMasterAddMatchForm,
      result: result.value,
      gameMaster: gameMaster.value,
      sheriff: sheriff.value,
      done: done.value,
      black: getIdArray(black),
      red: getIdArray(red),
    });

    history.push('/matches');
    window.location.reload();
    reset();
  }

  useEffect(() => {
    if (location.hash === '#tab_02') {
      return setTab('2');
    } else if (location.hash === '#tab_03') {
      return setTab('3');
    } else {
      return setTab('1');
    }
  }, [location]);
  useEffect(() => {
    if (location.hash === '#tab_02') {
      setLinkText('Назад');
      setСlassSubmit('hidden');
      setСlassLink('visible');
      setLink(`${path()}#tab_03`);
      setLinkBack(`${path()}#tab_01`);
      setClassArticle('form__tabs-block');
      setClassLastArticle('form__tabs-block');
      setSecondArticle('form__tabs-block-visible');
    } else if (location.hash === '#tab_03') {
      setLinkText('Назад');
      setСlassSubmit('visible');
      setСlassLink('hidden');
      setLinkBack(`${path()}#tab_02`);
      setClassArticle('form__tabs-block');
      setSecondArticle('form__tabs-block');
      setClassLastArticle('form__tabs-block-visible');
    } else {
      setLinkText('Отменить');
      setСlassSubmit('hidden');
      setСlassLink('visible');
      setLink(`${path()}#tab_02`);
      setSecondArticle('form__tabs-block');
      setClassLastArticle('form__tabs-block');
      setClassArticle('form__tabs-block-visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, isOpen]);

  // useEffect(() => {
  //   return history.push("/");
  // }, [onSubmit]);

  return (
    <Popup isOpen={isOpen}>
      <Form
        className='add-mathes'
        onSubmit={handleSubmit(onSubmit)}
        onClose={onClose}
        title='Создание игры'
        button='Сохранить'
        isDisabled={!isValid || !isValidComposition}
        buttonLeftValue={linkText}
        link={link}
        submitClass={classSubmit}
        linkClass={classLink}
        linkBack={linkBack}
        handlerClick={handleClose}
      >
        <div className='form__tabs'>
          <nav className='form__nav'>
            <a href={`${path()}#tab_01`} className='form__nav-item'>
              <p
                className={`form__nav-paragraph form__nav-number ${
                  tab !== '1' && 'form__nav-number_disabled'
                }`}
              >
                1
              </p>
              <p
                className={`form__nav-paragraph form__nav-text ${
                  tab !== '1' && 'form__nav-text_disabled'
                }`}
              >
                Параметры игры
              </p>
            </a>
            <a href={`${path()}#tab_02`} className='form__nav-item'>
              <p
                className={`form__nav-paragraph form__nav-number ${
                  tab !== '2' && 'form__nav-number_disabled'
                }`}
              >
                2
              </p>
              <p
                className={`form__nav-paragraph form__nav-text ${
                  tab !== '2' && 'form__nav-text_disabled'
                }`}
              >
                Участники
              </p>
            </a>
            <a href={`${path()}#tab_03`} className='form__nav-item'>
              <p
                className={`form__nav-paragraph form__nav-number ${
                  tab !== '3' && 'form__nav-number_disabled'
                }`}
              >
                3
              </p>
              <p
                className={`form__nav-paragraph form__nav-text ${
                  tab !== '3' && 'form__nav-text_disabled'
                }`}
              >
                Прочее
              </p>
            </a>
          </nav>
          <div className='form__tabs-body'>
            <article className={classArticle} id='tab_01'>
              <label
                className='form__label add-match__label'
                htmlFor='titleAddMatchForm'
              >
                Название игры
              </label>
              <input
                className='form__input form__input-add-match'
                name='titleAddMatchForm'
                id='titleAddMatchForm'
                type='text'
                placeholder='Введите название игры'
                required
                {...register('titleAddMatchForm', {
                  required: 'Поле обязательно для заполнения',
                })}
              ></input>
              <Error error={errors?.titleAddMatchForm?.message} />

              <label
                className='form__label add-match__label'
                htmlFor='gameMasterAddMatchForm'
              >
                Выберите ведущего
              </label>
              <Select
                // formatCreateLabel={(value) =>
                //   `Не найдено совпадений. Создать: ${value}`
                // }
                options={optionsUnit(units)}
                name='gameMasterAddMatchForm'
                required
                placeholder={<div>Выберите из списка</div>}
                isClearable
                // onChange={onChangeGameMaster}
                onChange={onChangeNewGm}
              />
              <Error
                error={!gameMaster && 'Поле обязательно для заполнения'}
              ></Error>

              <fieldset className='form__result-container'>
                <div className='form__result-item'>
                  <label
                    className='form__label add-match__label'
                    htmlFor='dateMasterAddMatchForm'
                  >
                    Дата окончания игры
                  </label>
                  <input
                    className='form__input'
                    name='dateMasterAddMatchForm'
                    id='dateMasterAddMatchForm'
                    type='date'
                    placeholder='Дата окончания игры'
                    required
                    {...register('dateMasterAddMatchForm', {
                      required: 'Поле обязательно для заполнения',
                    })}
                  ></input>
                  <Error error={errors?.dateMasterAddMatchForm?.message} />
                </div>

                <div className='form__result-item'>
                  <label
                    className='form__label add-match__label'
                    htmlFor='resultAddMatchForm'
                  >
                    Результат игры
                  </label>

                  <Select
                    options={optionsResult}
                    name='resultAddMatchRorm'
                    onChange={onChangeResult}
                    required
                    placeholder={<div>Выберите из списка</div>}
                    isClearable
                  />
                  <Error
                    error={!result && 'Поле обязательно для заполнения'}
                  ></Error>
                </div>
              </fieldset>
            </article>
            <article className={classSecondArticle} id='tab_02'>
              <label className='form__label add-match__label'>Мафия</label>
              <Select
                options={optionsUnit(units)}
                isMulti
                name='blackAddMatchRorm'
                onChange={onChangeBlack}
                required
                placeholder={<div>Добавьте игрока</div>}
              />
              <Error error={getSpanMessageBlack()}></Error>
              <label className='form__label add-match__label'>Дон</label>
              <Select
                options={optionsUnit(units)}
                name='doneAddMatchRorm'
                onChange={onChangeDone}
                required
                placeholder={<div>Добавьте игрока</div>}
                isClearable
              />
              <Error error={!done && 'Укажите дона мафии'}></Error>
              <label className='form__label add-match__label'>Шериф</label>
              <Select
                // formatCreateLabel={(value) =>
                //   `Не найдено совпадений. Создать: ${value}`
                // }
                options={optionsUnit(units)}
                name='sheriffAddMatchRorm'
                onChange={onChangeSheriff}
                required
                placeholder={<div>Добавьте игрока</div>}
                isClearable
              />
              <Error error={!sheriff && 'Укажите шерифа'}></Error>
              <label className='form__label add-match__label'>
                Мирные жители
              </label>
              <Select
                options={optionsUnit(units)}
                isMulti
                name='redAddMatchRorm'
                onChange={onChangeRed}
                required
                placeholder={<div>Добавьте игрока</div>}
                className='form__input-black'
              />
              <Error error={getSpanMessageRed()}></Error>
            </article>
            <article className={classLastArticle} id='tab_03'>
              <label className='form__label add-match__label'>
                Лучший игрок
              </label>
              <Select
                options={currentPoolOptions}
                isMulti
                name='bestAddMatchRorm'
                onChange={onChangeBest}
                placeholder={<div>Добавьте игрока</div>}
                isClearable
                className='form__input-wo-error'
              />
              <label className='form__label add-match__label'>МК</label>
              <Select
                options={currentPoolOptions}
                isMulti
                name='mkAddMatchRorm'
                onChange={onChangeMK}
                placeholder={<div>Добавьте игрока</div>}
                isClearable
                className='form__input-wo-error'
              />
            </article>
          </div>
        </div>
        <InfoTooltip message={message} />
      </Form>
    </Popup>
  );
}

export default AddMatchesForm;
