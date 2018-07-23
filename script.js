"use strict";
let play = prompt("Do you want to play?")
if (play.toLowerCase() === "yes") {
    let name = prompt("What is your name?")
    let me = 40;
    let grant = 10;
    let wins = 0
    while (wins < 3 && me > 0) {
        if (grant > 0) {
            me -= (Math.floor(Math.random() * 2) + 1);
            grant -= (Math.floor(Math.random() * 2) + 1);
            console.log(`${name} has ${me} health left`);
            console.log(`Grant has ${grant} health left`);
        } else if (grant <= 0) {
            console.log(`Grant has no health left. ${name} has recorded a win against Grant`);
            wins++;
            console.log(`${name} has ${wins} win(s) against Grant`);
            grant = 10;
        } if (wins == 3) {
            console.log(`${name} wins!!!`);
            break;
        } else if (me <= 0) {
            console.log("Grant Wins!");
            break;
        }
    }
} else {
    console.log("Please come back next time you want to play!")
}
