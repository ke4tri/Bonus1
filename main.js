const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

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
            newString +=    `<h3>Title: ${people[i]["title"]}</h3>`;
            newString +=    `<h3>Name: ${people[i]["name"]}</h3>`;
            newString +=    `<h3>Bio: ${people[i].bio}</h3>`;
            newString +=    `<h3>Birth: ${people[i].lifespan.birth}</h3>`;
            newString +=    `<h3>Death: ${people[i].lifespan.death}</h3></div>`;
            // image
           
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

// need a funciton name
    for(i=0;i<people.length;i++){
        let bob = `person${i}`;
        document.getElementById(bob).addEventListener("click", function() {
            document.getElementById(bob).style.border = "dotted";
        });
        }
 
        function getFocus() {
            document.getElementById("tomtom").focus();
         }
