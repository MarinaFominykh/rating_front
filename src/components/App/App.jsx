import "./App.css";
import { useEffect, useState } from "react";
import {
  getMatches,
  getUnits,
  addNewMatch,
  addUnitsInMatch,
} from "../../utils/Api.js";
import Main from "../Main/Main.jsx";
import AddMatchesForm from "../AddMatchesForm/AddMatchesForm.jsx";
import AddUnitsForm from "../AddUnitsForm/AddUnitsForm.jsx";

function App() {
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false);
  const [isFormWithUnitsPopupOpen, setIsFormWithUnitsPopupOpen] =
    useState(false);
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

  function addMatch(title, gameMaster, date, result) {
    addNewMatch(title, gameMaster, date, result)
      .then(() => closePopup())
      .catch((err) => console.log(err));
  }

  function addUnits(id, array) {
    console.log(id);
    addUnitsInMatch(id, array)
      .then(() => closePopup())
      .catch((err) => console.log(err));
  }

  function closePopup() {
    setIsFormPopupOpen(false);
    setIsFormWithUnitsPopupOpen(false);
  }

  useEffect(() => {
    getInitialMatches();
  }, []);
  return (
    <div className="App">
      <Main
        onClickAddMatch={handleAddMatchClick}
        onClickAddUnits={handleAddUnitsClick}
      />
      <AddMatchesForm
        isOpen={isFormPopupOpen}
        onClose={closePopup}
        onAddMatch={addMatch}
      />
      <AddUnitsForm
        isOpen={isFormWithUnitsPopupOpen}
        onClose={closePopup}
        allMatches={matches}
        onAddUnits={addUnits}
      />
    </div>
  );
}

export default App;
