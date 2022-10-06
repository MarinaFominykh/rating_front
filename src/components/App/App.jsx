import "./App.css";
import { useEffect, useState } from "react";
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
  updateGameMaster,
  updateTitle,
  updateUnitInMatch,
} from "../../utils/Api.js";
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
import EditUnitInMatchForm from "../EditUnitInMatchForm/EditUnitInMatchForm.jsx";
function App() {
  const [units, setUnits] = useState([]);
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false);
  const [isFormWithUnitsPopupOpen, setIsFormWithUnitsPopupOpen] =
    useState(false);
  const [isFormWithUnitPopupOpen, setIsFormWithUnitPopupOpen] = useState(false);
  const [isFormWithUpdateUnit, setIsFormWithUpdateUnit] = useState(false);
  const [isFormWithConfirmation, setIsFormWithConfirmation] = useState(false);
  const [isFormWithUpdateGameMaster, setFormWithUpdateGameMaster] =
    useState(false);
  const [isFormWithUpdateTitle, setFormWithUpdateTitle] = useState(false);
  const [isFormWithReplaceUnit, setIsFormWithReplaceUnit] = useState(false);
  const [matches, setMatches] = useState([]);
  const [matches2020, setMatches2020] = useState([]);
  const [matches2021, setMatches2021] = useState([]);
  const [matches2022, setMatches2022] = useState([]);
  const [matchDelete, setMatchDelete] = useState({});
  const [editTitle, setEditTitle] = useState({});
  const [editGameMaster, setEditGameMaster] = useState({});
  const [currentUnit, setCurrentUnit] = useState({});

  function getInitialUnits() {
    getUnits().then((dataUnits) => {
      setUnits(dataUnits);
    });
  }
  function getInitialMatches() {
    getMatches().then((dataMatches) => {
      setMatches(dataMatches);
      console.log(dataMatches);
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

  function handleAddMatchClick() {
    setIsFormPopupOpen(true);
  }

  function handleDeleteMatchClick(data) {
    setMatchDelete(data);
    setIsFormWithConfirmation(true);
  }

  function handleAddUnitsClick() {
    setIsFormWithUnitsPopupOpen(true);
  }

  function handleAddUnitClick() {
    setIsFormPopupOpen(false);
    setIsFormWithUnitPopupOpen(true);
  }

  function handleUpdateUnitsClick(data) {
    setCurrentUnit(data);
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

  function handleReplaceUnitClick() {
    setIsFormWithReplaceUnit(true);
  }

  function addMatch(title, gameMaster, date, result) {
    addNewMatch(title, gameMaster, date, result)
      // Необходим рефакторинг для оптимизации, чтобы избавиться от избыточных запросов к серверу:
      .then(() => {
        getInitialMatches();
        getInitialMatches2020();
        getInitialMatches2021();
        getInitialMatches2022();
      });
    closePopup()
      // .then((newMatch) => {
      //   console.log(newMatch)
      //   setMatches([...matches, newMatch]);
      //   closePopup();
      // })

      .catch((err) => console.log(err));
  }

  function addUnits(id, array) {
    addUnitsInMatch(id, array)
      // Необходим рефакторинг для оптимизации, чтобы избавиться от избыточных запросов к серверу:
      .then(() => getInitialMatches());
    closePopup()
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
    updateUnit(currentUnit, name)
      .then(() => {
        getInitialUnits();
        closePopup();
      })
      .catch((err) => console.log(err));
  }

  function updateGameMasterName(gameMaster) {
    updateGameMaster(editGameMaster, gameMaster)
      .then(() => {
        getInitialMatches();
        setFormWithUpdateGameMaster(false);
      })
      .catch((err) => console.log(err));
  }

  function updateTitleMatch(title) {
    updateTitle(editTitle, title)
      .then(() => {
        getInitialMatches();
        setFormWithUpdateTitle(false);
        closePopup();
      })
      .catch((err) => console.log(err));
  }

  function replaceUnit(match, unit) {
    updateUnitInMatch(match, unit)
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
    removeMatch(matchDelete)
      .then(() => {
        setMatches((state) => state.filter((c) => c._id !== matchDelete._id));
        setIsFormWithConfirmation(false);
      })
      .catch((err) => console.log(err));
  }

  function closePopupAddUnit() {
    setIsFormWithUnitPopupOpen(false);
  }

  function closePopup() {
    setIsFormPopupOpen(false);
    setIsFormWithUnitsPopupOpen(false);
    setIsFormWithUpdateUnit(false);
    setIsFormWithConfirmation(false);
    setFormWithUpdateGameMaster(false);
    setFormWithUpdateTitle(false);
    setIsFormWithReplaceUnit(false);
  }

  useEffect(() => {
    getInitialMatches();
    getInitialMatches2020();
    getInitialMatches2021();
    getInitialMatches2022();
  }, []);

  useEffect(() => {
    getInitialUnits();
  }, []);

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
      <Header />
      <Switch>
        <Route exact path="/">
          <Main
            allUnits={units}
            onUpdateUnit={handleUpdateUnitsClick}
            onUnitDelete={handleUnitDelete}
            matches={matches}

            // matches={matches2022}
          />
        </Route>
        <Route path="/2020">
          <Main
            allUnits={units}
            onUpdateUnit={handleUpdateUnitsClick}
            onUnitDelete={handleUnitDelete}
            matches={matches2020}
          />
        </Route>
        <Route path="/2021">
          <Main
            allUnits={units}
            onUpdateUnit={handleUpdateUnitsClick}
            onUnitDelete={handleUnitDelete}
            matches={matches2021}
          />
        </Route>
        <Route path="/2022">
          <Main
            allUnits={units}
            onUpdateUnit={handleUpdateUnitsClick}
            onUnitDelete={handleUnitDelete}
            matches={matches2022}
          />
        </Route>

        <Route exact path="/matches">
          <Matches
            allMatches={matches}
            onClickAddMatch={handleAddMatchClick}
            onClickAddUnits={handleAddUnitsClick}
            onMatchDelete={handleDeleteMatchClick}
            onEditTitle={handleUpdateTitleClick}
            onEditGameMatch={handleUpdateGameMasterClick}
            onEditUnit={handleReplaceUnitClick}
            // onClose={closePopup}
            // units={units}
            // addUnit={handleAddUnitClick}
            // isOpenUpdateGameMasterForm={isFormWithUpdateGameMaster}
            // onReplaceUnit={replaceUnit}
            // isOpenReplaceUnit={isFormWithReplaceUnit}
          ></Matches>
        </Route>
        <Route exact path="/matches/2020">
          <Matches
            allMatches={matches2020}
            onClickAddMatch={handleAddMatchClick}
            onClickAddUnits={handleAddUnitsClick}
            onMatchDelete={handleDeleteMatchClick}
            onEditTitle={handleUpdateTitleClick}
            onEditGameMatch={handleUpdateGameMasterClick}
            onEditUnit={handleReplaceUnitClick}
          ></Matches>
        </Route>
        <Route exact path="/matches/2021">
          <Matches
            allMatches={matches2021}
            onClickAddMatch={handleAddMatchClick}
            onClickAddUnits={handleAddUnitsClick}
            onMatchDelete={handleDeleteMatchClick}
            onEditTitle={handleUpdateTitleClick}
            onEditGameMatch={handleUpdateGameMasterClick}
            onEditUnit={handleReplaceUnitClick}
          ></Matches>
        </Route>
        <Route exact path="/matches/2022">
          <Matches
            allMatches={matches2022}
            onClickAddMatch={handleAddMatchClick}
            onClickAddUnits={handleAddUnitsClick}
            onMatchDelete={handleDeleteMatchClick}
            onEditTitle={handleUpdateTitleClick}
            onEditGameMatch={handleUpdateGameMasterClick}
            onEditUnit={handleReplaceUnitClick}
          ></Matches>
        </Route>
      </Switch>

      <AddMatchesForm
        isOpen={isFormPopupOpen}
        onClose={closePopup}
        onAddMatch={addMatch}
        onClick={handleAddUnitClick}
      />
      <AddUnitsForm
        isOpen={isFormWithUnitsPopupOpen}
        onClose={closePopup}
        allMatches={matches}
        allUnits={units}
        onAddUnits={addUnits}
        onClick={handleAddUnitClick}
      />
      <AddUnitForm
        isOpen={isFormWithUnitPopupOpen}
        onClose={closePopupAddUnit}
        onAddUnit={addUnit}
      />
      {/* <UpdateUnitForm
        isOpen={isFormWithUpdateUnitPopupOpen}
        onClose={closePopup}
        onUpdateUnit={updateName}
      /> */}

      <ConfirmForm
        onMatchDelete={handleDeleteMatch}
        onClose={closePopup}
        isOpen={isFormWithConfirmation}
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
      />
      <UpdateUnitForm
        isOpen={isFormWithUpdateUnit}
        onClose={closePopup}
        onUpdateUnit={updateName}
        onClick={handleAddUnitClick}
      />
    </div>
  );
}

export default App;
