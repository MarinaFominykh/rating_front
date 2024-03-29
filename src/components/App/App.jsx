import "./App.scss";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import {
  authorize,
  getMatches,
  getUnits,
  addNewMatch,
  createUnit,
  updateUnit,
  removeMatch,
  updateMatch,
} from "../../utils/Api.js";
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
import {
   CONFLICT_NAME_MESSAGE,
  AUTH_DATA_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  INVALID_TOKEN_ERROR_MESSAGE,
  INVALID_DATA_ERROR_MESSAGE,
} from "../../utils/constans";
import Login from "../Login/Login.jsx";
import Main from "../Main/Main.jsx";
import AddMatchesForm from "../AddMatchesForm/AddMatchesForm.jsx";
import AddUnitForm from "../AddUnitForm/AddUnitForm";
import UpdateUnitForm from "../UpdateUnitForm/UpdateUnitForm.jsx";
import Header from "../Header/Header.jsx";
import Matches from "../Matches/Matches.jsx";
import ConfirmForm from "../ConfirmForm/ConfirmForm.jsx";
import Profile from "../Profile/Profile.jsx";
import MatchCard from "../MatchCard/MatchCard";
import MatchEdit from "../MatchEdit/MatchEdit";
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { matchData, checkbox, unitsArray } from "../../redux/actions";

function App() {
  let location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const period = useSelector((state) => {
    const { selectPeriodReducer } = state;
    return selectPeriodReducer.value;
  });
  const currentMatch = useSelector((state) => {
    const { currentMatchReducer } = state;
    return currentMatchReducer.match;
  });
  // const unitsData = useSelector((state) => {
  //   const {unitsReducer} = state;
  //   return unitsReducer.units
  // })
  const [loggedIn, setLoggedIn] = useState(false);
  const [preloaderMatches, setPreloaderMatches] = useState(false);
  const [preloaderUnits, setPreloaderUnits] = useState(true);
  const [units, setUnits] = useState([]);
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isMatchCardPopupOpen, setIsMatchCardPopupOpen] = useState(false);
  const [isMatchEditPopupOpen, setIsMatchEditPopupOpen] = useState(false);
  const [isFormWithUpdateUnit, setIsFormWithUpdateUnit] = useState(false);
  const [isFormWithConfirmation, setIsFormWithConfirmation] = useState(false);
  const [isAddUnitPopupOpen, setIsAddUnitPopupOpen] = useState(false);
  const [matches, setMatches] = useState([]);
  const [matches2020, setMatches2020] = useState([]);
  const [matches2021, setMatches2021] = useState([]);
  const [matches2022, setMatches2022] = useState([]);
  const [matches2023, setMatches2023] = useState([]);
  const [matches2024, setMatches2024] = useState([]);
  const [matches2025, setMatches2025] = useState([]);
  const [allMatches, setAllMatches] = useState(matches);
  const [message, setMessage] = useState("");
  const [currentProfile, setCurrentProfile] = useState({});

  const showInfoToolTip = (error) => {
    setMessage(error);
    setTimeout(() => setMessage(""), 8000);
  };

  // Авторизация
  function handleLogin({ login, password }) {
    authorize(login, password)
      .then((jwt) => {
        if (jwt.token) {
          localStorage.setItem("token", jwt.token);
          setLoggedIn(true);
          history.push("/");
        }
        showInfoToolTip(INVALID_TOKEN_ERROR_MESSAGE);
      })
      .catch((error) => {
        if (error === 400) {
          showInfoToolTip(INVALID_DATA_ERROR_MESSAGE);
        } else if (error === 401) {
          showInfoToolTip(AUTH_DATA_ERROR_MESSAGE);
        } else {
          showInfoToolTip(SERVER_ERROR_MESSAGE);
        }
      });
  }

  function handleSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  //Получаем массив игроков
  function getInitialUnits() {
    setPreloaderUnits(true);
    getUnits()
      .then((dataUnits) => {
        setUnits(dataUnits);
        dispatch(unitsArray(dataUnits))
      })
      .then(() => setPreloaderUnits(false))
      .catch((error) => console.log(error))
      .finally(() => setPreloaderUnits(false));
  }

  // Получаем массив игр
  function getInitialMatches() {
    setPreloaderMatches(true);
    getMatches()
      .then((dataMatches) => {
        setMatches(dataMatches);
        setMatches2020(filterMatches(dataMatches, "2020"));
        setMatches2021(filterMatches(dataMatches, "2021"));
        setMatches2022(filterMatches(dataMatches, "2022"));
        setMatches2023(filterMatches(dataMatches, "2023"));
        setMatches2024(filterMatches(dataMatches, "2024"));
        setMatches2025(filterMatches(dataMatches, "2025"));
      })
      .then(() => setPreloaderMatches(false))
      .catch((error) => console.log(error))
      .finally(() => {
        setPreloaderMatches(false);
      });
  }
  // Вынести в utils/functions
  function filterMatches(matchArray, period) {
    return matchArray.filter((match) => {
      return match.date.includes(period);
    });
  }

  function getCurrentMatchesArray() {
    if (period === "2020") {
      return setAllMatches(matches2020);
    } else if (period === "2021") {
      return setAllMatches(matches2021);
    } else if (period === "2022") {
      return setAllMatches(matches2022);
    } else if (period === "2023") {
      return setAllMatches(matches2023);
    } else if (period === "2024") {
      return setAllMatches(matches2024);
    } else if (period === "2025") {
      return setAllMatches(matches2025);
    }

    return setAllMatches(matches);
  }

  function closePopup() {
    setIsFormPopupOpen(false);
    setIsProfilePopupOpen(false);
    setIsMatchCardPopupOpen(false);
    setIsAddUnitPopupOpen(false);
  }
  function closeConfirmPopup() {
    setIsFormWithConfirmation(false);
  }
  function closeEditMatchPopup() {
    setIsMatchEditPopupOpen(false);
  }
  function closeMenu() {
    dispatch(checkbox(false));
  }
  function closeUpdateUnitPopup() {
    setIsFormWithUpdateUnit(false);
  }

  // Обработчики кликов
  function handleAddMatchClick() {
    setIsFormPopupOpen(true);
    closeMenu();
  }

  function handleProfileClick(data) {
    setIsProfilePopupOpen(true);
    setCurrentProfile(data);
  }
  function handlerAddUnitClick() {
    setIsAddUnitPopupOpen(true);
    closeMenu();
  }
  function handleDetailMatchClick(data) {
    dispatch(matchData(data));
    setIsMatchCardPopupOpen(true);
  }

  function handleEditMatchClick() {
    setIsMatchEditPopupOpen(true);
  }
  function handleDeleteMatchClick() {
    setIsFormWithConfirmation(true);
  }

  function handleUpdateUnitsClick(data) {
    setIsFormWithUpdateUnit(true);
  }

  // запросы к серверу
  function addMatch(data) {
    addNewMatch(data)
      .then((newMatch) => {
        setMatches([...matches, newMatch]);
      })
      .then(() => {
        closePopup();
      })
      .catch((err) => console.log(err));
  }
  // function addMatch(data) {
  //   const {
  //     title,
  //     gameMaster,
  //     date,
  //     result,
  //     black,
  //     red,
  //     sheriff,
  //     done,
  //     modKill,
  //     bestPlayer,
  //   } = data;
  //   if (gameMaster.__isNew__) {
  //     createUnit(gameMaster.value).then((newGameMaster) => {
  //       addNewMatch({ ...data, gameMaster: newGameMaster._id });
  //     });

  //     // createUnits([gameMaster.__isNew__ && {name: gameMaster.value}, sheriff.__isNew__ && {name: sheriff.value}])
  //   } else {
  //     addNewMatch(data)
  //       // Необходим рефакторинг для оптимизации, чтобы избавиться от избыточных запросов к серверу:
  //       .then(() => {
  //         getInitialMatches();
  //         getInitialMatches2020();
  //         getInitialMatches2021();
  //         getInitialMatches2022();
  //         getInitialMatches2023();
  //         getInitialMatches2024();
  //         getInitialMatches2025();
  //       })
  //       .then(() => {
  //         closePopup();
  //       })
  //       .catch((err) => console.log(err));
  //   }

  //   // .then((newMatch) => {
  //   //   console.log(newMatch)
  //   //   setMatches([...matches, newMatch]);
  //   //   closePopup();
  //   // })
  // }
  function editMatch(data) {
    updateMatch(data)
      .then(() => {
        getInitialMatches();
      })
      .then(() => closeEditMatchPopup())
      .catch((err) => console.log(err));
  }
  function addUnit(name) {
    createUnit(name)
      .then((newUnit) => {
        setUnits([...units, newUnit]);
      })
      .then(() => closePopup())
      .catch((err) => {
        if (err === 409) {
          showInfoToolTip(CONFLICT_NAME_MESSAGE);
        }
        console.log(err);
      });
  }
  function updateName(name) {
    updateUnit(currentProfile._id, name)
      .then(() => {
        getInitialUnits();
        closeUpdateUnitPopup();
      })
      // .catch((err) => err.text().then((resText) => showInfoToolTip(resText)));
      .catch((err) => {
        if (err === 409) {
          showInfoToolTip(CONFLICT_NAME_MESSAGE);
        }
        console.log(err);
      });
  }

  // function handleUnitDelete(unit) {
  //   removeUnit(unit._id)
  //     .then(() => {
  //       setUnits((state) => state.filter((c) => c._id !== unit._id));
  //     })
  //     .catch((err) => console.log(err));
  // }

  function handleDeleteMatch() {
    removeMatch(currentMatch)
      .then(() => {
        setMatches((state) => state.filter((c) => c._id !== currentMatch._id));
        setIsFormWithConfirmation(false);
        closeEditMatchPopup();
        closePopup();
      })
      .catch((err) => console.log(err));
  }

  // Эффекты

  // проверка токена и получение данных текущего пользователя
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
      // history.push("/");
    }
  }, [history, loggedIn]);

  useEffect(() => {
    getInitialMatches();
    getInitialUnits();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCurrentMatchesArray();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches, period, location]);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return (
    <div className="page">
      <Header
        onClickAddMatch={handleAddMatchClick}
        loggedIn={loggedIn}
        handleSignOut={handleSignOut}
      />
      <Switch>
        <Route exact path="/">
          <Main
            matches={allMatches}
            showUnit={handleProfileClick}
            handleAddUnit={handlerAddUnitClick}
            preloader={preloaderUnits}
            
          />
        </Route>

        <Route exact path="/matches">
          <Matches
            matches={matches}
            matches2020={matches2020}
            matches2021={matches2021}
            matches2022={matches2022}
            matches2023={matches2023}
            matches2024={matches2024}
            matches2025={matches2025}
            onClickAddMatch={handleAddMatchClick}
            units={units}
            showUnit={handleProfileClick}
            showMatch={handleDetailMatchClick}
            preloader={preloaderMatches}
          ></Matches>
        </Route>
        <Route exact path="/sign-in">
          <Login onLogin={handleLogin} message={message} />
        </Route>
      </Switch>

      <AddMatchesForm
        isOpen={isFormPopupOpen}
        onClose={closePopup}
        units={units}
        onAddMatch={addMatch}
      />
      <AddUnitForm
        isOpen={isAddUnitPopupOpen}
        onClose={closePopup}
        onAddUnit={addUnit}
        message={message}
      />
      <Profile
        isOpen={isProfilePopupOpen}
        onClose={closePopup}
        name={currentProfile.name}
        amount={countMatches(allMatches, currentProfile)}
        blackCompletion={countBlackRole(allMatches, currentProfile)}
        blackVictory={countBlackVictory(allMatches, currentProfile)}
        redCompletion={countRedRole(allMatches, currentProfile)}
        redVictory={countRedVictory(allMatches, currentProfile)}
        sheriffCompletion={countSheriffRole(allMatches, currentProfile)}
        sheriffVictory={countSheriffVictory(allMatches, currentProfile)}
        donCompletion={countDonRole(allMatches, currentProfile)}
        donVictory={countDonVictory(allMatches, currentProfile)}
        modKill={countModKill(allMatches, currentProfile)}
        best={countBestPlayer(allMatches, currentProfile)}
        raiting={countRating(allMatches, currentProfile)}
        onUpdateUnit={handleUpdateUnitsClick}
        unit={currentProfile}
        logged={loggedIn}
      />
      <UpdateUnitForm
        isOpen={isFormWithUpdateUnit}
        onClose={closeUpdateUnitPopup}
        onUpdateUnit={updateName}
        currentName={currentProfile.name}
        message={message}
      />
      <MatchCard
        isOpen={isMatchCardPopupOpen}
        onClose={closePopup}
        onEdit={handleEditMatchClick}
        match={currentMatch}
        title={currentMatch.title}
        result={currentMatch.result}
        gameMaster={currentMatch.gameMaster?.name}
        date={currentMatch.date}
        loggedIn={loggedIn}
      />
      <MatchEdit
        isOpen={isMatchEditPopupOpen}
        onClose={closeEditMatchPopup}
        units={units}
        onEditMatch={editMatch}
        onMatchDelete={handleDeleteMatchClick}
        isOpenCard={isMatchCardPopupOpen}
      />

      <ConfirmForm
        onMatchDelete={handleDeleteMatch}
        onClose={closeConfirmPopup}
        isOpen={isFormWithConfirmation}
      />
      <Menu
        onClickAddMatch={handleAddMatchClick}
        onClose={closeMenu}
        onClickAddUnit={handlerAddUnitClick}
      />
    </div>
  );
}

export default App;
