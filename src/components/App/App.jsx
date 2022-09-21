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
} from "../../utils/Api.js";
import Main from "../Main/Main.jsx";
import AddMatchesForm from "../AddMatchesForm/AddMatchesForm.jsx";
import AddUnitsForm from "../AddUnitsForm/AddUnitsForm.jsx";
import AddUnitForm from "../AddUnitForm/AddUnitForm.jsx";
import UpdateUnitForm from "../UpdateUnitForm/UpdateUnitForm.jsx";
import Header from "../Header/Header.jsx";
import Matches from "../Matches/Matches.jsx";
function App() {
  const [units, setUnits] = useState([]);
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false);
  const [isFormWithUnitsPopupOpen, setIsFormWithUnitsPopupOpen] =
    useState(false);
  const [isFormWithUnitPopupOpen, setIsFormWithUnitPopupOpen] = useState(false);
  const [isFormWithUpdateUnitPopupOpen, setIsFormWithUpdateUnitPopupOpen] =
    useState(false);
  const [matches, setMatches] = useState([]);

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
  function handleAddMatchClick() {
    setIsFormPopupOpen(true);
  }

  function handleAddUnitsClick() {
    setIsFormWithUnitsPopupOpen(true);
  }

  function handleAddUnitClick() {
    setIsFormPopupOpen(false);
    setIsFormWithUnitPopupOpen(true);
  }

  function handleUpdateUnitsClick() {
    setIsFormWithUpdateUnitPopupOpen(true);
  }

  function addMatch(title, gameMaster, date, result) {
    addNewMatch(title, gameMaster, date, result)
      .then(() => closePopup())
      .catch((err) => console.log(err));
  }

  function addUnits(id, array) {
    addUnitsInMatch(id, array)
      .then(() => closePopup())
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

  function updateName(unit, newUnit) {
    console.log(unit, newUnit);
    updateUnit(unit, newUnit).catch((err) => console.log(err));
  }

  function handleUnitDelete(unit) {
    removeUnit(unit._id)
      .then(() => {
        setUnits((state) => state.filter((c) => c._id !== unit._id));
      })
      .catch((err) => console.log(err));
  }

  function closePopupAddUnit() {
    setIsFormWithUnitPopupOpen(false);
  }

  function closePopup() {
    setIsFormPopupOpen(false);
    setIsFormWithUnitsPopupOpen(false);
    setIsFormWithUpdateUnitPopupOpen(false);
  }

  useEffect(() => {
    getInitialMatches();
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
            onClickAddMatch={handleAddMatchClick}
            onClickAddUnits={handleAddUnitsClick}
            allUnits={units}
            onClickDeleteUnitButton={handleUpdateUnitsClick}
            // onClickEditUnitButton={handleUpdateUnitsClick}
            onClickEditUnitButton={handleUpdateUnitsClick}
            onUpdateUnit={updateName}
            onUnitDelete={handleUnitDelete}
            matches={matches}
          />
        </Route>
        <Route exact path="/matches">
          <Matches allMatches={matches}></Matches>
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
      <UpdateUnitForm
        isOpen={isFormWithUpdateUnitPopupOpen}
        onClose={closePopup}
        onUpdateUnit={updateName}
      />
    </div>
  );
}

export default App;
