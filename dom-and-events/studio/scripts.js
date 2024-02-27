// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    console.log("page is fully loaded");

  const takeOffButton = this.document.getElementById("takeoff")
  const flightStatusId = document.getElementById("flightStatus");
  const shuttleBackgroundId = document.getElementById("shuttleBackground")
  const spaceShuttleHeightId = document.getElementById("spaceShuttleHeight")

 // #2 TAKE OFF BUTTON 
takeOffButton.addEventListener("click", function(){
   const takeOffClick = window.confirm("Confirm that the shuttle is ready for takeoff.")
    if (takeOffClick === true) {
        flightStatusId.innerHTML = "SHUTTLE IN FLIGHT!!!";
        shuttleBackgroundId.style.background = "blue";
        spaceShuttleHeightId.innerHTML = 10000;
    } else {
        console.log ("no change to flight status");
     }
 })
 
// #3 LAND BUTTON
const landButton = this.document.getElementById("landing");
landButton.addEventListener("click", function(){
    const landButton = window.confirm("The shutlle is landing. Landing gear engaged.");
        if (landButton === true) {
            flightStatusId.innerHTML = "THE SHUTTLE HAS LANDED";
            shuttleBackgroundId.style.background = "green";
            spaceShuttleHeightId.innerHTML = 0;
        } else {
            console.log("Shuttle has not landed")
        }
})

// #4 ABORT MISSION
const abortButton = this.document.getElementById("missionAbort");
abortButton.addEventListener("click", function(){
    const abortButton = window.confirm("Confirm you want to abort the mission. ")
    if (abortButton === true) {
        flightStatusId.innerHTML = "!!! MISSION ABORTED !!!";
        shuttleBackgroundId.style.background = "green";
        spaceShuttleHeightId.innerHTML = 0;
    } else {
        console.log("mission was not aborted")
    }
})

// #5 UP, DOWN , RIGHT, LEFT
 // Get reference to the rocket image and the buttons
const rocketImage = document.getElementById("rocket")
const moveUpButton = document.getElementById("up");
const moveDownButton = document.getElementById("down");
const moveRightButton = document.getElementById("right");
const moveLeftButton = document.getElementById("left");

rocketImage.style.position = "relative";


    // Function to move the rocket left by 10px
    function moveRocketLeft() {
        // Extract the numerical value of the left CSS property
        let currentLeft = parseInt(rocketImage.style.left) || 0;
        // Subtract 10 from the current left position
        let newLeft = currentLeft - 10;
        // Update the left CSS property of the rocketImage element 
        rocketImage.style.left = newLeft + "px";
    }

    // Function to move the rocket right by 10px
    function moveRocketRight() {
        let currentLeft = parseInt(rocketImage.style.left) || 0;
        let newLeft = currentLeft + 10;
        rocketImage.style.left = newLeft + "px";
    }

    // Function to move the rocket up by 10px
    function moveRocketUp() {
        let currentTop = parseInt(rocketImage.style.top) || 0;
        let newTop = currentTop - 10;
        rocketImage.style.top = newTop + "px";
    }

    // Function to move the rocket down by 10px
    function moveRocketDown() {
        let currentTop = parseInt(rocketImage.style.top) || 0;
        let newTop = currentTop + 10;
        rocketImage.style.top = newTop + "px";
    }

    // Add event listeners to the buttons
    moveLeftButton.addEventListener("click", moveRocketLeft);
    moveRightButton.addEventListener("click", moveRocketRight);
    moveUpButton.addEventListener("click", moveRocketUp);
    moveDownButton.addEventListener("click", moveRocketDown);



});