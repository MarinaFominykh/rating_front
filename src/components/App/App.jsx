import "./App.scss";
import { useEffect, useState } from "react";
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
  updateGameMaster,
  updateTitle,
  updateResult,
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
import UpdateResultForm from "../UpdateResultForm/UpdateResultForm.jsx";
import EditUnitInMatchForm from "../EditUnitInMatchForm/EditUnitInMatchForm.jsx";

function App() {
  const { register, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
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
  const [isFormWithUpdateResult, setFormWithUpdateResult] = useState(false);
  const [isFormWithDynamicFields, setFormFormWithDynamicFields] =
    useState(false);
  const [matches, setMatches] = useState([]);
  const [matches2020, setMatches2020] = useState([]);
  const [matches2021, setMatches2021] = useState([]);
  const [matches2022, setMatches2022] = useState([]);
  const [matchDelete, setMatchDelete] = useState({});
  const [editTitle, setEditTitle] = useState({});
  const [editGameMaster, setEditGameMaster] = useState({});
  const [currentUnit, setCurrentUnit] = useState({});
  const [unitData, setUnitData] = useState({});
  const [editUnitMatch, setEditUnitMatch] = useState({});
  const [editResultMatch, setEditResultMatch] = useState({});
  const [addUnitsMatch, setAddUnitsMatch] = useState({});
  const [message, setMessage] = useState("");
  // const [stationSubmitAddUtits, setStationSubmitAddUtits] = useState(false);

  function getInitialUnits() {
    getUnits().then((dataUnits) => {
      setUnits(dataUnits);
      // console.log(dataUnits);
    });
  }
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

  const showInfoToolTip = (error) => {
    setMessage(error);
    setTimeout(() => setMessage(""), 8000);
  };

  function handleAddMatchClick() {
    setIsFormPopupOpen(true);
  }

  function handleDeleteMatchClick(data) {
    setMatchDelete(data);
    setIsFormWithConfirmation(true);
  }

  function handleAddUnitsClick(data) {
    setAddUnitsMatch(data);
    setFormFormWithDynamicFields(true);
    // setIsFormWithUnitsPopupOpen(true);
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
    const { title, gameMaster, date, result } = data;
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
    updateUnit(currentUnit, name)
      .then(() => {
        getInitialUnits();
        closePopup();
      })
      .catch((err) => console.log(err));
  }

  //Измененные данные ведущего видны только после перезагрузки. Необходим рефакторинг
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
    const { unit, role, modKill, bestPlayer } = data;
    //    const array = editUnitMatch.units.filter((el) => {
    //   return el.unit._id !== unitData.unit._id;
    // }).push(data)

    updateUnitInMatch(unit, role, modKill, bestPlayer, editUnitMatch, unitData)
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
    setFormWithUpdateResult(false);
    setFormFormWithDynamicFields(false);
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
            units={units}
            onEditResult={handleUpdateResultClick}
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
            onEditResult={handleUpdateResultClick}
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
            onEditResult={handleUpdateResultClick}
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
            onEditResult={handleUpdateResultClick}
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
      {/* <AddUnitsForm
        isOpen={isFormWithUnitsPopupOpen}
        onClose={closePopup}
        allMatches={matches}
        allUnits={units}
        onAddUnits={addUnits}
        onClick={handleAddUnitClick}
        message={message}
      /> */}
      <AddUnitForm
        isOpen={isFormWithUnitPopupOpen}
        onClose={closePopupAddUnit}
        onAddUnit={addUnit}
      />
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
      />
    </div>
  );
}

export default App;
