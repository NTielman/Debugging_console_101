const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    // console.log("Dit is de gehele persoon:", person);
    // console.log("dit is naam:", person.name);
    // console.log("dit is geboortejaar", 2020 - person.age);
    // console.log(`${person.name} is een ${person.profession}`);
    if (person.age >= 50) {
        console.log(`${person.name} is ouder dan 50, hij is ${person.age}`);
    }
}