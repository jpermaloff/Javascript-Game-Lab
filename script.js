"use strict";
let startGame = () => {
    let play = prompt("Do you want to play?")
    if (play.toLowerCase() === "yes") {
        let name = prompt("What is your name?")
        let me = 40;
        let grant = 10;
        let wins = 0
        let heal = 1
        let getDamage = () => {
            let myblock = (Math.floor(Math.random() * 4));
            let grantblock = (Math.floor(Math.random() * 3));
            if (myblock == 3) {
                me -= 0;
                console.log(`${name} blocked Grant's attack!`)
            }
            if (myblock < 3) {
                me -= (Math.floor(Math.random() * 5) + 1);
            }
            console.log(`${name} has ${me} health left`);
            if (me > 0) {
                if (grantblock == 2) {
                    grant -= 0;
                    console.log(`Oh No! Grant has blocked ${name}'s attack!`)
                }
                if (grantblock < 2) {
                    grant -= (Math.floor(Math.random() * 5) + 1);
                }
                console.log(`Grant has ${grant} health left`);
            }
        }
        let startCombat = () => {
            while (play) {
                if (grant > 0) {
                    let move = prompt("Would you like to attack or quit?");
                    if (move.toLowerCase() === "attack") {
                        getDamage();
                    }
                        if (heal > 0 && me < 35) {
                            let medic = prompt("Would you like to be healed by a medic?");
                            if (medic.toLowerCase() == "yes") {
                                me += 5
                                heal--
                                console.log(`${name} has been healed by a medic. ${name} now has ${me} health left`)
                            }
                        }                
                    if (move.toLowerCase() === "quit") {
                        console.log("Thanks for playing! Come back soon!!!")
                        break;
                    }
                }
                if (grant <= 0) {
                    console.log(`Grant has no health left. ${name} has recorded a win against Grant`);
                    wins++;
                    console.log(`${name} has ${wins} win(s) against Grant.`)
                    if (wins < 3) console.log(`${name} only needs ${3 - wins} more win(s) to save the world!`);
                    grant = 10;
                }
                if (wins == 3) {
                    console.log(`${name} wins!!! The world is safe!!!`);
                    break;
                }
                if (me <= 0) {
                    console.log(`${name} has no health left, Grant Wins!!!`);
                    break;
                }
            }
        }
        startCombat();
    } else {
        console.log("Thanks for visiting! Please come back when you're ready to play!")
    }
}
startGame();
