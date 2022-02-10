const prisoners = [{ 'id': 'a', 'first': 0 },
{ 'id': 'b', 'first': 0 },
{ 'id': 'c', 'first': 0 },
{ 'id': 'd', 'first': 0 },
{ 'id': 'e', 'first': 0 },
{ 'id': 'f', 'first': 0 },
{ 'id': 'g', 'first': 0 },
{ 'id': 'h', 'first': 0 },
{ 'id': 'i', 'first': 0 },
{ 'id': 'j', 'first': 0 },
{ 'id': 'k', 'first': 0 },
{ 'id': 'l', 'first': 0 },
{ 'id': 'm', 'first': 0 }]


let switchOne = true // NEED TO RANDOMIZE THESE
let switchTwo = true // NEED TO RANDOMIZE THESE

let count = 0


for (let i = Math.random * 13; i <= prisoners.length; i++) { // NEEDS TO ITERATE RANDOMLY UNTIL RETURN IS CALLED
    if (i = 0) {
        if (switchOne == true) {
            switchTwo != switchTwo // NEED TO SET THE OPPOSITE
        }
        else {
            switchOne = true
            count++
            if (count == 25) {
                console.log('I raise my hand!')
                for (let i = 0; i < prisoners.length; i++) { // NEEDS TO ITERATE THROUGH ALL 'FIRST' INDEX PROPERTIES TO CHECK IF THEY'RE AT LEAST ONE
                    const element = prisoners[i];
                    if (i >= 1) {
                        return console.log("YOU WIN!!!")
                    }
                    else {
                        return console.log("YOU DIE")
                    }

                }
            }
        }
    }
    else {
        if (prisoners.first < 2) {
            if (switchOne == true) {
                switchOne = false
                prisoners.first++
            }
            else {
                switchTwo != switchTwo // NEED TO SET THE OPPOSITE
            }

        }
        else {
            switchTwo != switchTwo // NEED TO SET THE OPPOSITE
        }
    }
}