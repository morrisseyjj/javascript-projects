
//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
// PART 1 #1
class CrewCandidate {
	constructor(name, mass, scores) {
		this.name = name; 
		this.mass = mass; 
		this.scores = scores; 
	}
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
// PART 2 -  #1 & #2
    addScore(newScore) {
        this.scores.push(newScore);
    }
// PART 3.1 - #1, #2, #3 - average test scores method
    average() {
        let sum = 0;
        for (let i=0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return Math.round(10 * sum / this.scores.length) / 10; 
    }
// PART 3.2 -  #1, #2, #3 Should candidate be admitted method
    status() {
        let avg = this.average();
        if (avg >= 90) {
            return "Accepted";
        } else if (avg >= 80) {
            return "Reserve";
        } else if (avg >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }

}

// PART 1 - #2
let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
// PART 1 -  #2.2 PRINT
console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

// PART 2 - #3
bubbaBear.addScore(83);
console.log(`\nBubba Bear new scrores are ${bubbaBear.scores}\n`);

// PART 3.1 - #3.2 PRINT - printing Merry’s average test score (92.7).
console.log(`Merry Maltese average score is ${merryMaltese.average()}\n`);

// PART 3.2 - #4 PRINT 
console.log(`- ${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`)
console.log(`- ${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`)
console.log(`- ${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.\n`)


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let reserveStatus = 0;