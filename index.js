/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
let lengthCalc = document.getElementById("length-calc");
let volumeCalc = document.getElementById("volume-calc");
let massCalc = document.getElementById("mass-calc");

convertBtn.addEventListener("click", function() {
    let inputVal = inputEl.value
    
    let metersToFeet = (inputVal * 3.28084).toFixed(3);
    let feetToMeters = (inputVal / 3.28084).toFixed(3);
    lengthCalc.innerHTML = `${inputVal} meters = ${metersToFeet} feet | ${inputVal} feet = ${feetToMeters} meters`;
    
    let litersToGallons = (inputVal * 0.26417).toFixed(3);
    let gallonsToLiters = (inputVal / 0.26417).toFixed(3);
    volumeCalc.innerHTML = `${inputVal} liters = ${litersToGallons} gallons | ${inputVal} gallons = ${gallonsToLiters} liters`;
    
    let kilosToPounds = (inputVal * 2.20462).toFixed(3);
    let poundsToKilos = (inputVal / 2.20462).toFixed(3);
    massCalc.innerHTML = `${inputVal} kilos = ${kilosToPounds} pounds | ${inputVal} pounds = ${poundsToKilos} kilos`;
})