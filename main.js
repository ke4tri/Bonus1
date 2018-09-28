const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};
// pressedEnter()
const people = [
    {
        title: "Samurai1",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1747,
          death: 1797
        }
    },
    {
        title: "Samurai2",
        name: "Happy Taco",
        bio: "This was not a real man and there are not many people who even know the real story of him.  He is a very bad man.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1856,
          death: '?' // May want to make this a number not sure
        }
    },
    {
        title: "Samurai3",
        name: "Momo Frank",
        bio: "This guy was not a samurai but instead a ninja.  He was the best at what he did in all that ever was and could be untill.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 100,
          death: 1978
        }
    },
    {
        title: "Samurai4",
        name: "Gabe Thunder",
        bio: "There were many places for this person to take action but they never understood what it was going to be like untill his death.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1666,
          death: 1798
        }
    },
    ]
    
const createProjectCards = () => {
    let newString = '';
    for(i=0;i<people.length;i++){
        newString += `<div id="person${[i]}" class="personAll"</h3>`;
        newString +=    `<h3 class>Title: ${people[i]["title"]}</h3>`;
        newString +=    `<h3>Name: ${people[i]["name"]}</h3>`;
        newString +=    `<h3 id="bio${[i]}">Bio: ${people[i].bio}</h3>`;
        newString +=    `<h3>Birth: ${people[i].lifespan.birth}</h3>`;
        newString +=    `<h3>Death: ${people[i].lifespan.death}</h3>`;
        newString +=    `<img src="${people[i].image}">`
        newString +=  `</div>`
    };
    printToDom(newString, "containWrap")
    for(i=0;i<people.length;i++){
        let tom = `person${i}`;
        if(i % 2 === 1) {
            document.getElementById(tom).style.background = "lightblue";
        }
        else{ document.getElementById(tom).style.background = "lightyellow";
        }
};
};
createProjectCards();
//  SHOULD BE IN A FUNCTION
for(i=0;i<people.length;i++){
    let personDot = `person${i}`;
    document.getElementById(personDot).addEventListener("click", function() {
        document.getElementById(personDot).style.border = "dotted";
    });
}
// GETS FOCUS ON DIV CLICK
function getFocus() {
    document.getElementById("inputField").focus();
    }

// CHANGES THE BIO VIA THE INPUT   
function bioChange(bio) {
document.getElementById("inputField").value = '';
outputEl = document.getElementById(bio)
let fieldEl = document.getElementById("inputField");
fieldEl.addEventListener("keypress", function (event) {
    outputEl.innerHTML = event.target.value
    })
};

// CALLS THE FUNCTION OF THE BIO INPUT CHANGE
document.getElementById("bio0").addEventListener("click", function(){ bioChange("bio0")});
document.getElementById("bio1").addEventListener("click", function(){ bioChange("bio1")});
document.getElementById("bio2").addEventListener("click", function(){ bioChange("bio2")});
document.getElementById("bio3").addEventListener("click", function(){ bioChange("bio3")});

// CLEARS INPUT FIELD AFTER HITTING ENTER
// function pressedEnter() {
//     document.getElementById('inputField').addEventListener('Enter', function() {
//     event.preventDefault();
//     document.getElementById('inputField').value = '';
   
//     })
// }

document.getElementById('inputField').addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("clearBut").click();
        // document.getElementById("clearBut").form.reset();
        
    }
});


