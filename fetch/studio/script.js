//TODO: Add Your Code Below
window.addEventListener("load", function(){
    //create object for <div> element - id "container"
    const container = document.getElementById("container");

    // FETCH Traditional Way - From Book
    // this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(apiResponse){
    // apiResponse.json().then(function(astronautData){
    //     console.log(astronautData);
    // // Loop through each astronaut in the json file to create html to present on page
    //     for(let i = 0; i < astronautData.length; i++) {
    //         let astronaut = astronautData[i];
    //         container.innerHTML += `
    //         <div class="astronaut">
    //             <div class="bio">
    //                 <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
    //                 <ul>
    //                     <li>Hours in space: ${astronaut.hoursInSpace}</li>
    //                     <li>Active: ${astronaut.active}</li>
    //                     <li>Skills: ${astronaut.skills.join(", ")}</li>
    //                 </ul>
    //             </div>
    //             <img class="avatar" src=${astronaut.picture}>
    //         </div> 
    //         `;
    //         }
    //     });
    // });

// FETCH Modern Way (async/await) from MDN web docs
    async function fetchAstronautData() {
        let responseFromApi = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        let dataAstronaut = await responseFromApi.json();
        // BONUS MISSION 1

        for(let i = 0; i < dataAstronaut.length; i++) {
            let astronaut = dataAstronaut[i];
            //BONUS MISSION 2 Conditional (ternary) operator
            let activeColor = astronaut.active ? "active" : "";
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li class="${activeColor}">Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
            </div> 
            `;
     
        }
    }
// NEED TO CALL ASYNC FUNCTION for it to work
fetchAstronautData();
});