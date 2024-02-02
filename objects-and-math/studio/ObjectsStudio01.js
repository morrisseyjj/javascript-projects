// Randomly selected ID numbers STEP 1
// Code your selectRandomEntry function here:
// Function to pick index 0-5 of idNumbers array at random
function selectRandomEntry(arr) {
	let index = Math.floor(Math.random() * arr.length);
	return arr[index];
}
// Randomly selected ID numbers STEP 2
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

// Code your buildCrewArray function here:
// Adds entire objects into selectedCrew
function buildCrewArray(candidates, selectedIds) {
	let selectedCrew = [];
	for (let i=0; i < candidates.length; i++) {
		if (selectedIds.includes(candidates[i].astronautID)) {
			selectedCrew.push(candidates[i]);
		}
	}
	return selectedCrew;
}



// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// calling the buildCrewArray function and build a crew array
let chosenCrew = buildCrewArray(animals, threeCrewIds);

// Code your template literal and console.log statements:
console.log(`${chosenCrew[0].name}, ${chosenCrew[1].name}, and ${chosenCrew[2].name} are going to space!\n`);