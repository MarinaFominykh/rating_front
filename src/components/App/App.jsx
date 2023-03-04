import "./App.scss";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import {
  getMatches,
  getUnits,
  addNewMatch,
  addUnitsInMatch,
  createUnit,
  updateUnit,
  removeUnit,
  removeMatch,
  updateTitle,
  updateResult,
  updateUnitInMatch,
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
import Main from "../Main/Main.jsx";
import AddMatchesForm from "../AddMatchesForm/AddMatchesForm.jsx";
import AddUnitsForm from "../AddUnitsForm/AddUnitsForm.jsx";
import AddUnitForm from "../AddUnitForm/AddUnitForm.jsx";
import UpdateUnitForm from "../UpdateUnitForm/UpdateUnitForm.jsx";
import Header from "../Header/Header.jsx";
import Matches from "../Matches/Matches.jsx";
import UpdateGameMasterForm from "../UpdateGameMasterForm/UpdateGameMasterForm.jsx";
import ConfirmForm from "../ConfirmForm/ConfirmForm.jsx";
import UpdateTitleForm from "../UpdateTitleForm/UpdateTitleForm.jsx";
import UpdateResultForm from "../UpdateResultForm/UpdateResultForm.jsx";
import EditUnitInMatchForm from "../EditUnitInMatchForm/EditUnitInMatchForm.jsx";
import EditMatchForm from "../EditMatchForm/EditMatcForm";
import Profile from "../Profile/Profile.jsx";
import AddMatch from "../AddMatch/AddMatch";
import MatchCard from "../MatchCard/MatchCard";
import MatchEdit from "../MatchEdit/MatchEdit";
import Menu from "../Menu/Menu";
import {
  CurrentStateSelect,
  currentStateDefault,
} from "../../contexts/CurrentStateSelect.jsx";
import { selectValue } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let location = useLocation();
  const { register, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const dispatch = useDispatch();
  const period = useSelector((state) => {
    const { selectPeriodReducer } = state;
    return selectPeriodReducer.value;
  });
  const [units, setUnits] = useState([]);
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isMatchCardPopupOpen, setIsMatchCardPopupOpen] = useState(false);
  const [isMatchEditPopupOpen, setIsMatchEditPopupOpen] = useState(false);
  const [isFormWithEditMatchOpen, setIsFormWithEditMatchOpen] = useState(false);
  const [isFormWithUnitsPopupOpen, setIsFormWithUnitsPopupOpen] =
    useState(false);
  const [isFormWithUnitPopupOpen, setIsFormWithUnitPopupOpen] = useState(false);
  const [isFormWithUpdateUnit, setIsFormWithUpdateUnit] = useState(false);
  const [isFormWithConfirmation, setIsFormWithConfirmation] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormWithUpdateGameMaster, setFormWithUpdateGameMaster] =
    useState(false);
  const [isFormWithUpdateTitle, setFormWithUpdateTitle] = useState(false);
  const [isFormWithReplaceUnit, setIsFormWithReplaceUnit] = useState(false);
  const [isFormWithUpdateResult, setFormWithUpdateResult] = useState(false);
  const [isFormWithDynamicFields, setFormFormWithDynamicFields] =
    useState(false);
  const [matches, setMatches] = useState([]);
  const [matches2020, setMatches2020] = useState([]);
  const [matches2021, setMatches2021] = useState([]);
  const [matches2022, setMatches2022] = useState([]);
  const [matches2023, setMatches2023] = useState([]);
  const [matches2024, setMatches2024] = useState([]);
  const [matches2025, setMatches2025] = useState([]);
  const [allMatches, setAllMatches] = useState(matches);
  const [matchDelete, setMatchDelete] = useState({});
  const [editTitle, setEditTitle] = useState({});
  const [editGameMaster, setEditGameMaster] = useState({});
  const [currentUnit, setCurrentUnit] = useState({});
  const [unitData, setUnitData] = useState({});
  const [editUnitMatch, setEditUnitMatch] = useState({});
  const [editResultMatch, setEditResultMatch] = useState({});
  const [addUnitsMatch, setAddUnitsMatch] = useState({});
  const [message, setMessage] = useState("");
  const [currentProfile, setCurrentProfile] = useState({});
  const [currentMatch, setCurrentMatch] = useState({});
  // const [stationSubmitAddUtits, setStationSubmitAddUtits] = useState(false);

  function getInitialUnits() {
    getUnits().then((dataUnits) => {
      setUnits(dataUnits);
      // console.log(dataUnits);
    });
  }

  //Записать в localStorage
  function getInitialMatches() {
    getMatches().then((dataMatches) => {
      setMatches(dataMatches);
      // console.log(dataMatches);
    });
  }

  function getInitialMatches2020() {
    getMatches().then((dataMatches) => {
      setMatches2020(
        dataMatches.filter((match) => {
          return match.date.includes("2020");
        })
      );
    });
  }

  function getInitialMatches2021() {
    getMatches().then((dataMatches) => {
      setMatches2021(
        dataMatches.filter((match) => {
          return match.date.includes("2021");
        })
      );
    });
  }

  function getInitialMatches2022() {
    getMatches().then((dataMatches) => {
      setMatches2022(
        dataMatches.filter((match) => {
          return match.date.includes("2022");
        })
      );
    });
  }

  function getInitialMatches2023() {
    getMatches().then((dataMatches) => {
      setMatches2023(
        dataMatches.filter((match) => {
          return match.date.includes("2023");
        })
      );
    });
  }
  function getInitialMatches2024() {
    getMatches().then((dataMatches) => {
      setMatches2024(
        dataMatches.filter((match) => {
          return match.date.includes("2024");
        })
      );
    });
  }
  function getInitialMatches2025() {
    getMatches().then((dataMatches) => {
      setMatches2025(
        dataMatches.filter((match) => {
          return match.date.includes("2025");
        })
      );
    });
  }
  // function getFilterMatches(year) {
  //   getMatches().then((dataMatches) => {
  //     setAllMatches(
  //       dataMatches.filter((match) => {
  //         return match.date.includes(year);
  //       })
  //     );
  //   });
  // }
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

  // function getCurrentMatchesArray() {
  //   if (period === "2020") {
  //     return getFilterMatches("2020");
  //   } else if (period === "2021") {
  //     return getFilterMatches("2021");
  //   } else if (period === "2022") {
  //     return getFilterMatches("2022");
  //   } else if (period === "2023") {
  //     return getFilterMatches("2023");
  //   } else if (period === "2024") {
  //     return getFilterMatches("2024");
  //   } else if (period === "2025") {
  //     return getFilterMatches("2025");
  //   }

  //   return setAllMatches(matches);
  // }
  const showInfoToolTip = (error) => {
    setMessage(error);
    setTimeout(() => setMessage(""), 8000);
  };

  function closePopup() {
    setIsFormPopupOpen(false);
    setIsFormWithUnitsPopupOpen(false);
    // setIsFormWithConfirmation(false);
    setFormWithUpdateGameMaster(false);
    setFormWithUpdateTitle(false);
    setIsFormWithReplaceUnit(false);
    setFormWithUpdateResult(false);
    setFormFormWithDynamicFields(false);
    setIsProfilePopupOpen(false);
    setIsMatchCardPopupOpen(false);
    setIsFormWithEditMatchOpen(false);
  }
  function closeConfirmPopup() {
    setIsFormWithConfirmation(false);
  }
  function closeEditMatchPopup() {
    setIsMatchEditPopupOpen(false);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }
  function handleAddMatchClick() {
    setIsFormPopupOpen(true);
    closeMenu();
  }
  function handleEditUnitslick() {
    setIsFormWithReplaceUnit(true);
    // setIsFormWithEditMatchOpen(true);
    console.log("current match =>", currentMatch);
    // console.log("current profile =>", currentProfile);
  }
  function handleBurgerClick() {
    setIsMenuOpen(true);
  }
  function handleProfileClick(data) {
    setIsProfilePopupOpen(true);
    setCurrentProfile(data);
  }
  function handleDetailMatchClick(data) {
    setCurrentMatch(data);
    setIsMatchCardPopupOpen(true);
  }
  function handleEditMatchClick() {
    setIsMatchEditPopupOpen(true);
    // setIsFormWithEditMatchOpen(true);
  }
  function handleDeleteMatchClick() {
    // setMatchDelete(data);
    setIsFormWithConfirmation(true);
      }

  function handleAddUnitsClick(data) {
    setAddUnitsMatch(data);
    setFormFormWithDynamicFields(true);
    // setIsFormWithUnitsPopupOpen(true);
  }

  function handleAddUnitClick() {
    // setIsFormPopupOpen(false);
    setIsFormWithUnitPopupOpen(true);
  }

  function handleUpdateUnitsClick(data) {
    // setCurrentUnit(data);
    setIsFormWithUpdateUnit(true);
  }

  function handleUpdateGameMasterClick(data) {
    setEditGameMaster(data);
    setFormWithUpdateGameMaster(true);
  }

  function handleUpdateTitleClick(data) {
    setEditTitle(data);
    setFormWithUpdateTitle(true);
  }

  function handleUpdateResultClick(data) {
    setEditResultMatch(data);
    setFormWithUpdateResult(true);
  }

  function handleReplaceUnitClick(unit, match) {
    setUnitData(unit);
    setEditUnitMatch(match);
    setIsFormWithReplaceUnit(true);
  }

  function addMatch(data) {
    // const { title, gameMaster, date, result, black, red, sheriff, done } = data;
    addNewMatch(data)
      // Необходим рефакторинг для оптимизации, чтобы избавиться от избыточных запросов к серверу:
      .then(() => {
        getInitialMatches();
        getInitialMatches2020();
        getInitialMatches2021();
        getInitialMatches2022();
        getInitialMatches2023();
        getInitialMatches2024();
        getInitialMatches2025();
      })
      .then(() => {
        closePopup();
      })
      // .then((newMatch) => {
      //   console.log(newMatch)
      //   setMatches([...matches, newMatch]);
      //   closePopup();
      // })

      .catch((err) => console.log(err));
  }
  function editMatch(data) {
    const { id, title, gameMaster, date, result } = data;
    console.log("data=>", data)
    updateMatch(data)
      .then(() => {
        getInitialMatches();
        getInitialMatches2020();
        getInitialMatches2021();
        getInitialMatches2022();
        getInitialMatches2023();
        getInitialMatches2024();
        getInitialMatches2025();
      })
    //   .then(() => closeEditMatchPopup())
    //   .catch((err) => console.log(err));
  }
  function addUnits(array) {
    if (addUnitsMatch.units.length >= 10) {
      showInfoToolTip(
        "В этой игре уже есть данные по всем игрокам. Воспользуйтесь формой редактирования отдельного игрока, если необходимо изменить данные этого игрока"
      );
      return;
    } else if (array.length !== 10) {
      showInfoToolTip("Количество игроков должно быть 10");
      return;
    }
    addUnitsInMatch(addUnitsMatch, array)
      // Необходим рефакторинг для оптимизации, чтобы избавиться от избыточных запросов к серверу:
      .then(() => {
        getInitialMatches();
        // setStationSubmitAddUtits(true);
        closePopup();
      })

      // .then(() => closePopup())
      .catch((err) => console.log(err));
  }

  function addUnit(name) {
    createUnit(name)
      .then((newUnit) => {
        setUnits([...units, newUnit]);
        console.log(newUnit);
        closePopupAddUnit();
      })

      .then(() => console.log(units))
      .catch((err) => console.log(err));
  }

  function updateName(name) {
    updateUnit(currentProfile, name)
      .then(() => {
        getInitialUnits();
        closeUpdateUnitPopup();
      })
      .catch((err) => console.log(err));
  }

  //Измененные данные ведущего видны только после перезагрузки. Необходим рефакторинг
  // function updateGameMasterName(gameMaster) {
  //   updateGameMaster(editGameMaster, gameMaster)
  //     .then(() => {
  //       getInitialMatches();
  //       setFormWithUpdateGameMaster(false);
  //     })
  //     .catch((err) => console.log(err));
  // }

  function updateTitleMatch(title) {
    updateTitle(editTitle, title)
      .then(() => {
        getInitialMatches();
        setFormWithUpdateTitle(false);
        closePopup();
      })
      .catch((err) => console.log(err));
  }

  function updateResultMatch(result) {
    updateResult(editResultMatch, result)
      .then(() => {
        getInitialMatches();
        setFormWithUpdateResult(false);
        closePopup();
      })
      .catch((err) => console.log(err));
  }

  function replaceUnit(data) {
    const { unit, role } = data;
    //    const array = editUnitMatch.units.filter((el) => {
    //   return el.unit._id !== unitData.unit._id;
    // }).push(data)

    updateUnitInMatch(unit, role, currentMatch, unitData)
      .then(() => {
        getInitialMatches();
        setIsFormWithReplaceUnit(false);
        closePopup();
      })
      .catch((err) => console.log(err));
  }

  function handleUnitDelete(unit) {
    removeUnit(unit._id)
      .then(() => {
        setUnits((state) => state.filter((c) => c._id !== unit._id));
      })
      .catch((err) => console.log(err));
  }

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

  function closePopupAddUnit() {
    setIsFormWithUnitPopupOpen(false);
  }

  function closeUpdateUnitPopup() {
    setIsFormWithUpdateUnit(false);
  }

  useEffect(() => {
    getInitialMatches();
    getInitialMatches2020();
    getInitialMatches2021();
    getInitialMatches2022();
    getInitialMatches2023();
    getInitialMatches2024();
    getInitialMatches2025();
  }, [location]);

  useEffect(() => {
    getInitialUnits();
  }, []);
  useEffect(() => {
    getCurrentMatchesArray();
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
        onClickBurger={handleBurgerClick}
        onClose={closeMenu}
      />
      {/* <AddMatch /> */}
      {/* <CurrentStateSelect.Provider value={stateSelect}> */}
      <Switch>
        <Route exact path="/">
          <Main
            allUnits={units}
            // onUpdateUnit={handleUpdateUnitsClick}
            // onUnitDelete={handleUnitDelete}
            matches={allMatches}
            // matches={matches}
            // matches2020={matches2020}
            // matches2021={matches2021}
            // matches2022={matches2022}
            showUnit={handleProfileClick}
            handleAddUnit={handleAddUnitClick}
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
            matches2025={matches2024}
            // matches={allMatches}
            onClickAddMatch={handleAddMatchClick}
            onClickAddUnits={handleAddUnitsClick}
            // onMatchDelete={handleDeleteMatchClick}
            onEditTitle={handleUpdateTitleClick}
            onEditGameMatch={handleUpdateGameMasterClick}
            onEditUnit={handleReplaceUnitClick}
            units={units}
            onEditResult={handleUpdateResultClick}
            showUnit={handleProfileClick}
            showMatch={handleDetailMatchClick}
          ></Matches>
        </Route>
      </Switch>

      <AddMatchesForm
        isOpen={isFormPopupOpen}
        onClose={closePopup}
        units={units}
        onAddMatch={addMatch}
        onClick={handleAddUnitClick}
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
      />
      <UpdateUnitForm
        isOpen={isFormWithUpdateUnit}
        onClose={closeUpdateUnitPopup}
        onUpdateUnit={updateName}
        onClick={handleAddUnitClick}
        currentName={currentProfile.name}
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
        onMatchDelete={handleDeleteMatchClick}
        // name={currentProfile.name}
        // amount={countMatches(allMatches, currentProfile)}
        // blackCompletion={countBlackRole(allMatches, currentProfile)}
        // blackVictory={countBlackVictory(allMatches, currentProfile)}
        // redCompletion={countRedRole(allMatches, currentProfile)}
        // redVictory={countRedVictory(allMatches, currentProfile)}
        // sheriffCompletion={countSheriffRole(allMatches, currentProfile)}
        // sheriffVictory={countSheriffVictory(allMatches, currentProfile)}
        // donCompletion={countDonRole(allMatches, currentProfile)}
        // donVictory={countDonVictory(allMatches, currentProfile)}
        // modKill={countModKill(allMatches, currentProfile)}
        // best={countBestPlayer(allMatches, currentProfile)}
        // raiting={countRating(allMatches, currentProfile)}
        // onUpdateUnit={handleUpdateUnitsClick}
        // unit={currentProfile}
      />
      <MatchEdit
        isOpen={isMatchEditPopupOpen}
        match={currentMatch}
        onClose={closeEditMatchPopup}
        units={units}
        onEditMatch={editMatch}
        handleDelete={handleUnitDelete}
        onMatchDelete={handleDeleteMatchClick}
        onEditUnitsClick={handleEditUnitslick}
        isOpenCard={isMatchCardPopupOpen}
      />
      {/* <EditMatchForm
        isOpen={isFormWithEditMatchOpen}
        onClose={closePopup}
        units={units}
        onEditMatch={editMatch}
        match={currentMatch}
      /> */}
      <ConfirmForm
        onMatchDelete={handleDeleteMatch}
        onClose={closeConfirmPopup}
        isOpen={isFormWithConfirmation}
      />
      <Menu
        onClickAddMatch={handleAddMatchClick}
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />

      <EditUnitInMatchForm
        isOpen={isFormWithReplaceUnit}
        onClose={closePopup}
        units={units}
        onClick={handleAddUnitClick}
        onEditUnitInMatch={replaceUnit}
      />
      {/* <AddUnitForm
        isOpen={isFormWithUnitPopupOpen}
        onClose={closePopupAddUnit}
        onAddUnit={addUnit}
      /> */}
      {/* </CurrentStateSelect.Provider> */}

      {/* <AddUnitForm
        isOpen={isFormWithUnitPopupOpen}
        onClose={closePopupAddUnit}
        onAddUnit={addUnit}
      />
   
      <UpdateTitleForm
        onUpdateTitle={updateTitleMatch}
        onClose={closePopup}
        isOpen={isFormWithUpdateTitle}
      />
      <UpdateGameMasterForm
        onUpdateGameMaster={updateGameMasterName}
        isOpen={isFormWithUpdateGameMaster}
        onClose={closePopup}
        units={units}
        onClick={handleAddUnitClick}
      />
      <EditUnitInMatchForm
        isOpen={isFormWithReplaceUnit}
        onClose={closePopup}
        units={units}
        onClick={handleAddUnitClick}
        onEditUnitInMatch={replaceUnit}
      />
      <UpdateUnitForm
        isOpen={isFormWithUpdateUnit}
        onClose={closePopup}
        onUpdateUnit={updateName}
        onClick={handleAddUnitClick}
      />

      <UpdateResultForm
        isOpen={isFormWithUpdateResult}
        onClose={closePopup}
        onUpdateResult={updateResultMatch}
      />
      <AddUnitsForm
        isOpen={isFormWithDynamicFields}
        onClose={closePopup}
        allUnits={units}
        onAddUnits={addUnits}
        message={message}
        onClick={handleAddUnitClick}
      /> */}
    </div>
  );
}

export default App;
