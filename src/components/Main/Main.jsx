import "./Main.css";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getMatches, getUnits } from "../../utils/Api.js";
import Unit from "../Unit/Unit.jsx";
import RatingTable from "../TotalRatingTable/RatingTable.jsx";
function Main({ allUnits, onUpdateUnit, sortData, matches }) {
  function filterResult(array, result) {
    const newArray = array.filter((item) => {
      return item.result === result;
    })
    return newArray.length
  }
  return (
    <main className="main">
      <nav className="main__nav-container">
        <ul className="main__nav-list">
          <NavLink
            exact
            to="/"
            activeClassName="main__link-active"
            className="main__link"
          >
            <li className="main__nav-item">Total</li>
          </NavLink>
          <NavLink
            exact
            to="/2020"
            activeClassName="main__link-active"
            className="main__link"
          >
            <li className="main__nav-item">2020</li>
          </NavLink>
          <NavLink
            exact
            to="/2021"
            activeClassName="main__link-active"
            className="main__link"
          >
            <li className="main__nav-item">2021</li>
          </NavLink>
          <NavLink
            exact
            to="/2022"
            activeClassName="main__link-active"
            className="main__link"
          >
            <li className="main__nav-item">2022</li>
          </NavLink>
        </ul>
      </nav>
      <h1>Рейтинг игроков</h1>
      <p>Количество игр: {matches.length}</p>
      <p>
        Город {filterResult(matches, "Победа города")} : {filterResult(matches, "Победа мафии")} Мафия 
      </p>
     
      <RatingTable
        allUnits={allUnits}
        onUpdateUnit={onUpdateUnit}
        sortData={sortData}
        matches={matches}
      />
    </main>
  );
}

// function Main({
//   allUnits,

//   onUpdateUnit,
//   sortData,

//   matches,
// }) {

//   const [units, setUnits] = useState([]);
//   const [rating, setRating] = useState(0);

//   function countRating(array, unit) {
//     let rating = 0;
//     const matchesArrayBlackVictory = array.filter((element) => {
//       return (
//         element.units.some(
//           (item) =>
//             item.unit._id === unit._id &&
//             (item.role === "мафия" || item.role === "дон")
//         ) && element.result === "Победа мафии"
//       );
//     });
//     const matchesArrayBlackLoose = array.filter((element) => {
//       return (
//         element.units.some(
//           (item) =>
//             item.unit._id === unit._id &&
//             (item.role === "мафия" || item.role === "дон")
//         ) && element.result === "Победа города"
//       );
//     });

//     const matchesArrayRed = array.filter((element) => {
//       return (
//         element.units.some(
//           (item) => item.unit._id === unit._id && item.role === "мирный"
//         ) && element.result === "Победа города"
//       );
//     });

//     const matchesArraySheriffVictory = array.filter((element) => {
//       return (
//         element.units.some(
//           (item) => item.unit._id === unit._id && item.role === "шериф"
//         ) && element.result === "Победа города"
//       );
//     });

//     const matchesArraySheriffLoose = array.filter((element) => {
//       return (
//         element.units.some(
//           (item) => item.unit._id === unit._id && item.role === "шериф"
//         ) && element.result === "Победа мафии"
//       );
//     });

//     const matchesArrayBestPlayer = array.filter((element) => {
//       return element.units.some(
//         (item) => item.unit._id === unit._id && item.bestPlayer
//       );
//     });

//     const matchesArrayModKill = array.filter((element) => {
//       return element.units.some(
//         (item) => item.unit._id === unit._id && item.modKill
//       );
//     });

//     //Если ведущему начисляются баллы в рейтинг
//     // const matchesArrayMaster = array.filter((element) => {
//     //   return element.gameMaster === unit._id;
//     // });

//     rating =
//       matchesArrayBlackVictory.length * 4 +
//       matchesArrayBlackLoose.length * -0.5 +
//       matchesArrayRed.length * 3 +
//       matchesArraySheriffVictory.length * 5 +
//       matchesArraySheriffLoose.length * -1 +
//       matchesArrayBestPlayer.length * 2 +
//       matchesArrayModKill.length * -4;
//     // + matchesArrayMaster.length * 1;
//     return rating;
//   }

//   function countMatches(array, unit) {
//     const matchesArray = array.filter((element) => {
//       return element.units.some((item) => item.unit._id === unit._id);
//     });

//     return matchesArray.length;
//   }

//   function countBlackRole(array, unit) {
//     const matchesArray = array.filter((element) => {
//       return element.units.some(
//         (item) =>
//           item.unit._id === unit._id &&
//           (item.role === "мафия" || item.role === "дон")
//       );
//     });
//     return matchesArray.length;
//   }

//   function countBlackVictory(array, unit) {
//     const matchesArray = array.filter((element) => {
//       return (
//         element.units.some(
//           (item) =>
//             item.unit._id === unit._id &&
//             (item.role === "мафия" || item.role === "дон")
//         ) && element.result === "Победа мафии"
//       );
//     });
//     return matchesArray.length;
//   }

//   function countRedRole(array, unit) {
//     const matchesArray = array.filter((element) => {
//       return element.units.some(
//         (item) =>
//           item.unit._id === unit._id &&
//           (item.role === "мирный" || item.role === "шериф")
//       );
//     });
//     return matchesArray.length;
//   }

//   function countRedVictory(array, unit) {
//     const matchesArray = array.filter((element) => {
//       return (
//         element.units.some(
//           (item) =>
//             item.unit._id === unit._id &&
//             (item.role === "мирный" || item.role === "шериф")
//         ) && element.result === "Победа города"
//       );
//     });
//     return matchesArray.length;
//   }

//   function countSheriffRole(array, unit) {
//     const matchesArray = array.filter((element) => {
//       return element.units.some(
//         (item) => item.unit._id === unit._id && item.role === "шериф"
//       );
//     });
//     return matchesArray.length;
//   }

//   function countSheriffVictory(array, unit) {
//     const matchesArray = array.filter((element) => {
//       return (
//         element.units.some(
//           (item) => item.unit._id === unit._id && item.role === "шериф"
//         ) && element.result === "Победа города"
//       );
//     });
//     return matchesArray.length;
//   }

//   function countDonRole(array, unit) {
//     const matchesArray = array.filter((element) => {
//       return element.units.some(
//         (item) => item.unit._id === unit._id && item.role === "дон"
//       );
//     });
//     return matchesArray.length;
//   }

//   function countDonVictory(array, unit) {
//     const matchesArray = array.filter((element) => {
//       return (
//         element.units.some(
//           (item) => item.unit._id === unit._id && item.role === "дон"
//         ) && element.result === "Победа мафии"
//       );
//     });
//     return matchesArray.length;
//   }

//   return (
//     <main className="main">
//       <h1>Рейтинг игроков</h1>
//       <table className="table">
//         <thead>
//           <tr className="table__row">
//             <th className="table__cell">Ник игрока</th>
//             <th className="table__cell">Количество игр</th>
//             <th className="table__cell">Количество игр за мафию</th>
//             <th className="table__cell">Побед за мафию</th>
//             <th className="table__cell">Количество игр за мирного </th>
//             <th className="table__cell">Побед за мирного</th>
//             <th className="table__cell">Количество игр за шерифа</th>
//             <th className="table__cell">Побед за шерифа</th>
//             <th className="table__cell">Количество игр за дона</th>
//             <th className="table__cell">Побед за дона</th>
//             <th
//               className="table__cell"
//               onClick={() => {
//                 sortData("");
//               }}
//             >
//               Рейтинг
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {allUnits
//             .map((unit) => {
//               return (
//                 <Unit
//                   key={unit._id}
//                   name={unit.name}
//                   matches={countMatches(matches, unit)}
//                   rating={countRating(matches, unit)}
//                   black={countBlackRole(matches, unit)}
//                   blackVictory={countBlackVictory(matches, unit)}
//                   red={countRedRole(matches, unit)}
//                   redVictory={countRedVictory(matches, unit)}
//                   sheriff={countSheriffRole(matches, unit)}
//                   sheriffVictory={countSheriffVictory(matches, unit)}
//                   don={countDonRole(matches, unit)}
//                   donVictory={countDonVictory(matches, unit)}
//                   unit={unit}
//                   onUpdateUnit={onUpdateUnit}
//                 ></Unit>
//               );
//             })
//             .sort((a, b) => {
//               return b - a;
//             })}
//         </tbody>
//       </table>
//     </main>
//   );
// }
export default Main;
