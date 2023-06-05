const rps = (p1, p2) => {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors';
    let draw = 'Draw!';

    if (p1 === p2) {
        return draw;
    }

    if (p1 === r && p2 === p) {
        return won(2);
    } else if (p1 === r && p2 === s) {
        return won(1);
    } else if (p1 === p && p2 === r) {
        return won(1);
    } else if (p1 === p && p2 === s) {
        return won(2);
    } else if (p1 === s && p2 === r) {
        return won(2);
    } else if (p1 === s && p2 === p) {
        return won(1);
    }
};

function won(role) {
    return `Player ${role} won!`
}

