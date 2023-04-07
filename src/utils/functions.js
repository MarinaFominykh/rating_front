import {
    RED_RESULT,
    BLACK_RESULT,
   } from "./constans"

export function getBlack(array, unit) {
    return array.filter((element) => {
        return element.black.some((item) => item._id === unit._id)
    }).length
}
export function getRed(array, unit) {
    return array.filter((element) => {
        return element.red.some((item) => item._id === unit._id)
    }).length
}
export function getSheriff(array, unit) {
    return array.filter((element) => {
        return element.sheriff._id === unit._id
    }).length
}
export function getDone(array, unit) {
    return array.filter((element) => {
        return element.done._id === unit._id
    }).length
}
export function getBlackResult(array, unit, result) {
    return array.filter((element) => {
        return element.black.some((item) => item._id === unit._id) && element.result === result
    }).length
}
export function getRedResult(array, unit, result) {
    return array.filter((element) => {
        return element.red.some((item) => item._id === unit._id) && element.result === result
    }).length
}
export function getSheriffResult(array, unit, result) {
    return array.filter((element) => {
        return element.sheriff._id === unit._id && element.result === result
    }).length
}
export function getDoneResult(array, unit, result) {
    return array.filter((element) => {
        return element.done._id === unit._id && element.result === result
    }).length
}


// Количество игр за роль
export function countMatches(array, unit) {
    return getBlack(array, unit) + getRed(array, unit) + getSheriff(array, unit) + getDone(array, unit)
    // console.log("array", array)
    // console.log("unit", unit)
}
export function countBlackRole(array, unit) {
    return getBlack(array, unit) + getDone(array, unit)
}

export function countRedRole(array, unit) {
    return getRed(array, unit) + getSheriff(array, unit)
}

export function countSheriffRole(array, unit) {
    return getSheriff(array, unit)
}

export function countDonRole(array, unit) {
    return getDone(array, unit)
}
// Количество побед
export function countBlackVictory(array, unit) {
    return getBlackResult(array, unit, BLACK_RESULT) + getDoneResult(array, unit, BLACK_RESULT)
}

export function countRedVictory(array, unit) {
    return getRedResult(array, unit, RED_RESULT) + getSheriffResult(array, unit, RED_RESULT)
}


export function countSheriffVictory(array, unit) {
    return getSheriffResult(array, unit, RED_RESULT)
}

export function countDonVictory(array, unit) {
    return getDoneResult(array, unit, BLACK_RESULT)
}

export function countModKill(array, unit) {
    return array.filter((element) => {
        return element.modKill.some(
            (item) => item._id === unit._id
        );
    }).length

}

export function countBestPlayer(array, unit) {
    return array.filter((element) => {
        return element.bestPlayer.some(
            (item) => item._id === unit._id
        );
    }).length
}

//Total raiting
export function countRating(array, unit) {
    let rating = 0;
    const blackVictory = getBlackResult(array, unit, BLACK_RESULT)
    const blackLoose = getBlackResult(array, unit, RED_RESULT)
    const redVictory = getRedResult(array, unit, RED_RESULT)
    const sheriffVictory = getSheriffResult(array, unit, RED_RESULT)
    const sheriffLoose = getSheriffResult(array, unit, BLACK_RESULT)
    const doneVictory = getDoneResult(array, unit, BLACK_RESULT)
    const doneLoose = getDoneResult(array, unit, RED_RESULT)
    const best = countBestPlayer(array, unit)
    const modKill = countModKill(array, unit)

    //Если ведущему начисляются баллы в рейтинг
    // const matchesArrayMaster = array.filter((element) => {
    //   return element.gameMaster === unit._id;
    // });

    rating =
        blackVictory * 4 +
        blackLoose * -0.5 +
        redVictory * 3 +
        sheriffVictory * 5 +
        sheriffLoose * -1 +
        doneVictory * 4 +
        doneLoose * -0.5 +
        best * 2 +
        modKill * -4;
    // + matchesArrayMaster.length * 1;
    return rating;

}
export const optionsUnit = (array) => {
    return array?.map((unit) => {
        return {
            value: unit._id,
            label: unit.name
        };
    });
}
export const getIdArray = (array) => {
    return array?.map((item) => {
        return item.value
    });
}
export const idArray = (array) => {
    return array?.map((item) => {
        return item._id
    });
}
export const hasDuplicates = (arr) => {
    return new Set(arr).size !== arr.length;
  }
