// Code your orbitCircumference function here: (C = 2 pie r )
// orbit = radius
//STEP 1.1
function orbitCircumference() {
orbit = 2000;
return Math.round(2 * Math.PI * orbit);
}
// STEP 1.2, 1.3 ,1.4
// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, speed = 28000) {
	let circumference = orbitCircumference(radius);
	let distance = numOrbits * circumference;
	// Rounding time
	let time = Math.round(100 * distance / speed) / 100; 
	console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
	return time;
}
console.log(missionDuration(5));

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
	let index = Math.floor(Math.random() * arr.length);
	return arr[index];
}
//avoid repeated ID numbers
let threeCrewIds = [];
let idNumbers = [291, 414, 503, 599, 796, 890];
// keeps going until there are 3 unique IDs. 
while (threeCrewIds.length < 3) {
	let randomId = selectRandomEntry(idNumbers);
	if (!threeCrewIds.includes(randomId)) {
		threeCrewIds.push(randomId);
	}
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, alt = 2000, speed = 28000) {
	let duration = missionDuration(3, alt, speed);
	let oxygen = Math.round(candidate.o2Used(duration) * 1000) / 1000;
	return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygen} kg of oxygen.\n`
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let chosenCrew = [candidateA,candidateC,candidateE];
 

 // STEP 2.4
 // Select a crew member randomly and print their oxygen expenditure
let selectedCandidate = selectRandomEntry(chosenCrew);
console.log(oxygenExpended(selectedCandidate));