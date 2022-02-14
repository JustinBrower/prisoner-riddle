let prisoners = [
    { id: 'a', first: 0 },
    { id: 'b', first: 0 },
    { id: 'c', first: 0 },
    { id: 'd', first: 0 },
    { id: 'e', first: 0 },
    { id: 'f', first: 0 },
    { id: 'g', first: 0 },
    { id: 'h', first: 0 },
    { id: 'i', first: 0 },
    { id: 'j', first: 0 },
    { id: 'k', first: 0 },
    { id: 'l', first: 0 },
    { id: 'm', first: 0 }
]

let switchOne = Math.random() < 0.5
let switchTwo = Math.random() < 0.5

let mainCount = 0
let prisonerCount = 0

function test() {
    let test = Math.round(Math.random() * 12)
    console.log(test)
}

function riddle() {
    console.log("Here we go!");
    for (let i = Math.round(Math.random() * 12); i <= prisoners.length; i = 1 * (Math.round(Math.random() * 12))) {
        prisonerCount++
        console.log("working...");
        console.log("index ", i);
        console.log("prisoner count ", prisonerCount);
        console.log("main count ", mainCount);
        console.log(switchOne);
        console.log(switchTwo);
        console.log("First", prisoners[i].first);
        if (i == 0) {
            if (prisoners[i].first <= 1) {
                prisoners[i].first++
                mainCount++
            }
            if (switchOne == true) {
                if (switchTwo == true) {
                    switchTwo = false
                } else {
                    switchTwo = true
                }
            }
            else {
                switchOne = true
                mainCount++
                if (mainCount == 26) {
                    console.log('I raise my hand!')
                    for (let i = 0; i <= prisoners.length; i++) {
                        console.log("Prisoner", prisoners[i].id, prisoners[i].first);
                    }
                }
            }
        }
        else {
            if (prisoners[i].first <= 1) {
                if (switchOne == true) {
                    switchOne = false
                    prisoners[i].first++
                }
                else {
                    if (switchTwo == true) {
                        switchTwo = false
                    } else {
                        switchTwo = true
                    }
                }

            }
            else {
                if (switchTwo == true) {
                    switchTwo = false
                } else {
                    switchTwo = true
                }
            }
        }
    }
}