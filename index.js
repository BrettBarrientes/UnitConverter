/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputEl = document.getElementById("inputValue")
let lengthEl = document.getElementById("length-input")
let volumeEl = document.getElementById("volume-input")
let massEl = document.getElementById("mass-input")


function btnconvert() {

    inputNum = inputEl.value * 3.281
    inputMeters = inputEl.value / 3.281
    length = inputEl.value + " meters" + " = " + inputNum + " feet" + " | " + inputEl.value + " feet " + " = " + inputMeters.toFixed(3) + " meters"
    lengthEl.innerHTML = length

    Gal = inputEl.value * 0.264
    Lit = inputEl.value / 0.264
    volume = inputEl.value + " liters" + " = " + Gal.toFixed(3) + " gallons" + " | " + inputEl.value + " gallons " + " = " + Lit.toFixed(3) + " liters"
    volumeEl.innerHTML = volume

    Pounds = inputEl.value * 2.204
    kilos = inputEl.value / 2.204
    mass = inputEl.value + " kilos" + " = " + Pounds.toFixed(3) + " pounds" + " | " + inputEl.value + " pounds " + " = " + kilos.toFixed(3) + " kilos"
    massEl.innerHTML = mass

};

