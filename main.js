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

let totalCount = 0
let mainCount = 0
let prisonerCount = 0
let result = ""

function riddle() {
    console.log("Riddle Starting...");
    for (let i = Math.round(Math.random() * 12); i <= prisoners.length; i = 1 * (Math.round(Math.random() * 12))) {
        if (mainCount >= 26) {
            return console.log("Please Reload...")
        }
        draw()
        prisonerCount++
        console.log("working...");
        console.log("index", i);
        console.log("prisoner count", prisonerCount);
        console.log("main count", mainCount);
        console.log("switch one", switchOne);
        console.log("switch two", switchTwo);
        console.log("first", prisoners[i].first);
        if (i == 0) {
            if (prisoners[i].first <= 1) {
                prisoners[i].first++
                mainCount++
            }
            if (switchOne == true) {
                switchTwo = !switchTwo
            }
            else {
                switchOne = !switchOne
                mainCount++
                if (mainCount == 26) {
                    console.log('I raise my hand!')
                    for (let i = 0; i < prisoners.length; i++) {
                        console.log("Prisoner", prisoners[i].id, prisoners[i].first);
                        totalCount += prisoners[i].first
                    }
                    if (totalCount >= 25) {
                        result = "You Win!!!!"
                        console.log(result);
                        draw()
                    } else {
                        result = "You Die."
                        console.log(result);
                        draw()
                    }
                    return
                }
            }
        }
        else {
            if (prisoners[i].first <= 1) {
                if (switchOne == true) {
                    switchOne = !switchOne
                    prisoners[i].first++
                }
                else {
                    switchTwo = !switchTwo
                }
            }
            else {
                switchTwo = !switchTwo
            }
        }
    }
}



function draw() {
    let template = `<div>Prisoners Sent: ${prisonerCount}</div>
                    <div>Leader's Count: ${mainCount}</div>
                    <div>First Time Enters: ${totalCount}</div>
                    <div>Results: ${result}</div>`
    let button = '<div><button onclick="riddle()">Riddle</button></div> <div><button onclick="reset()">Reset</button></div>'
    document.getElementById('riddle').innerHTML = template
    document.getElementById('button').innerHTML = button
}
function reset() {
    for (let i = 0; i < prisoners.length; i++) {
        prisoners[i].first = 0
    }
    switchOne = Math.random() < 0.5
    switchTwo = Math.random() < 0.5

    totalCount = 0
    mainCount = 0
    prisonerCount = 0
    result = "Riddle Reset"
    draw()
    return
}
function check() {
    console.log(totalCount, mainCount, prisonerCount);
}
draw()