// Welcome message
/* name = window.prompt("Bonjour, comment vous appelez-vous ?");
document.querySelector("#welcome").textContent="Bonjour " + name + " et bienvenue chez PerkUus !"; */


// Display day and hour 
var jour = new Date().toLocaleString("fr-FR", {  weekday: "long" });
var dateWithouthSecond = new Date();
var heure = dateWithouthSecond.toLocaleTimeString("fr-FR", {hour: "2-digit", minute:"2-digit"});
var txt = "Nous sommes " + jour + " et il est " + heure + ".";

document.querySelector("#date").textContent=txt;

console.log(new Date().toLocaleString("fr-FR", {  hour12: "long" })); 


// Restaurant open/closed
// Ixelles schedule
var d = new Date();
var xlHour = d.getUTCHours(); // getUTC for GMT0
var xlMin = d.getUTCMinutes();
var xlDay = d.getUTCDay();

    if ((xlDay == 1 || xlDay == 2 || xlDay == 3 || xlDay == 4 || xlDay == 5)
    && (sgHour >= 7 && sgHour <= 15)){
    // it's monday to friday between 7:00 and 15:00
        if (typeof document !== 'undefined') {
            document.querySelector("#xlHorair").textContent="Le restaurant est ouvert.";
        }
    } else {
    // any other time
        if (typeof document !== 'undefined') {
            document.querySelector("#xlHorair").textContent="Le restaurant est fermé.";
        }
    }

// Saint-Gilles schedule
var d = new Date();
var sgHour = d.getUTCHours(); // getUTC for GMT0
var sgMin = d.getUTCMinutes();
var sgDay = d.getUTCDay();

    if ((sgDay == 6 || sgDay == 7 || sgDay == 1 || sgDay == 2 || sgDay == 3) 
    && (sgHour >= 7 && sgHour <= 15)){
    // it's saturday to wednesday between 7:00 and 15:00
        if (typeof document !== 'undefined') {
            document.querySelector("#sgHorair").textContent="Le restaurant est ouvert.";
        }
    } else {
        // any other time
        if (typeof document !== 'undefined') {
            document.querySelector("#sgHorair").textContent="Le restaurant est fermé.";
        }
    }

// Schaerbeek schedule
var d = new Date();
var scHour = d.getUTCHours(); // getUTC for GMT0
var scMin = d.getUTCMinutes();
var scDay = d.getUTCDay();

    if ((scDay == 2 || scDay == 3 || scDay == 4 || scDay == 5 || scDay == 6 || scDay == 7) 
    && (scHour >= 7 && scHour <= 16)){
    // it's tuesday to sunday between 7:00 and 16:00
        if (typeof document !== 'undefined') {
            document.querySelector("#scHorair").textContent="Le restaurant est ouvert.";
        }
    } else {
        // any other time
        if (typeof document !== 'undefined') {
            document.querySelector("#scHorair").textContent="Le restaurant est fermé.";
        }
    }

