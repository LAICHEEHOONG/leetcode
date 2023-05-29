function countSmileys(arr) {
    return findTrue(arr);
}

// return it to true false
function smileyDetect(smile) {
    let length = smile.length;
    let eye = true;
    let nose = true;
    let mouth = true;

    if (length === 2) {
        nose = true;
        if (smile[0] === ':' || smile[0] === ';') {
            eye = true
        } else {
            eye = false;
        }
        if(smile[1] === ')' || smile[1] === 'D') {
            mouth = true;
        } else {
            mouth = false;
        }
    } else if (length === 3) {
        if (smile[0] === ':' || smile[0] === ';') {
            eye = true
        } else {
            eye = false;
        }
        if (smile[1] === '-' || smile[1] === '~') {
            nose = true;
        } else {
            nose = false;
        }
        if (smile[2] === ')' || smile[2] === 'D') {
            mouth = true;
        } else {
            mouth = false;
        }
    } else if (length > 3 || length <= 1) {
        eye = false;
        nose = false;
        mouth = false;
    }

    if (eye && nose && mouth) {
        return true;
    } else {
        return false;
    }
}

// find the smile array how many true
function findTrue(smiles) {
    let smile = [];
    smiles.forEach(face => {
        smile.push(smileyDetect(face))
    })
    
    smile = smile.filter(face => face === true);
    return smile.length;
}

countSmileys([';]', ':[', ';*', ':$', ';-D'])