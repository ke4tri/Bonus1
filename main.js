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