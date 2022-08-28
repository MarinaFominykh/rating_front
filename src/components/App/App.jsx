import "./App.css";
import { useEffect, useState } from "react";
import {
  getMatches,
  getUnits,
  addNewMatch,
  addUnitsInMatch,
  createUnit
} from "../../utils/Api.js";
import Main from "../Main/Main.jsx";
import AddMatchesForm from "../AddMatchesForm/AddMatchesForm.jsx";
import AddUnitsForm from "../AddUnitsForm/AddUnitsForm.jsx";
import AddUnitForm from "../AddUnitForm/AddUnitForm.jsx";

function App() {
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false);
  const [isFormWithUnitsPopupOpen, setIsFormWithUnitsPopupOpen] =
    useState(false);
    const [isFormWithUnitPopupOpen, setIsFormWithUnitPopupOpen] = useState(false);
  const [matches, setMatches] = useState([]);

  function getInitialMatches() {
    getMatches().then((dataMatches) => {
      setMatches(dataMatches);
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
      .then(() => closePopup())
      .catch((err) => console.log(err));
  }

  function closePopup() {
    setIsFormPopupOpen(false);
    setIsFormWithUnitsPopupOpen(false);
    setIsFormWithUnitPopupOpen(false)
  }

  useEffect(() => {
    getInitialMatches();
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
      <Main
        onClickAddMatch={handleAddMatchClick}
        onClickAddUnits={handleAddUnitsClick}
      />
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
        onAddUnits={addUnits}
      />
      <AddUnitForm isOpen={isFormWithUnitPopupOpen} onClose={closePopup} onAddUnit={addUnit} />
        
    </div>
  );
}

export default App;
