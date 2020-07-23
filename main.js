// lev 1_1

let eu = {
  Belgien: "(BE)",
  Griechenland: "(EL)",
  Litauen: "(LT)",
  Portugal: "(PT)",
  Bulgarien: "(BG)",
  Spanien: "(ES)",
  Luxemburg: "(LU)",
  Rumänien: "(RO)",
  Tschechien: "(CZ)",
  Frankreich: "(FR)",
  Ungarn: "(HU)",
  Slowenien: "(SI)",
  Dänemark: "(DK)",
  Kroatien: "(HR)",
  Malta: "(MT)",
  Slowakei: "(SK)",
  Deutschland: "(DE)",
  Italien: "(IT)",
  Niederlände: "(NL)",
  Finnland: "(FI)",
  Estland: "(EE)",
  Zypern: "(CY)",
  Österreich: "(AT)",
  Schweden: "(SE)",
  Irland: "(IE)",
  Lettland: "(LV)",
  Polen: "(PL)",
};

// console.log(Object.keys(eu))
// console.log(Object.values(eu))
// console.log(Object.entries(eu))

console.log(eu.Belgien); // "(BE)"
console.log(eu.Niederlände);
console.log(eu.Luxemburg);

let beneluxUnion = {};
eu.beneluxUnion = { Belgien: "(BE)", Niederlände: "(NL)", Luxemburg: "(LU)" };
console.log(eu.beneluxUnion);
console.log(eu);

delete eu.Belgien;
delete eu.Niederlände;
delete eu.Luxemburg;
console.log(eu);

// 1_2

let person = {
  name: "Pikachu",
  alter: "33",
  sagNameAlter() {
    // alert(`My name is ${this.name} and I'm ${this.alter}`);
    // alert(`Nice to meet you`)
  },
};

person.sagNameAlter();
console.log(person.name);
console.log(person.alter);

// 1_4

var unsereHaustiere = [
  {
    tiertyp: "Katze",
    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

//array of two objects
console.log(unsereHaustiere[0]); //{tiertyp: "Katze", names: Array(3)}
console.log(unsereHaustiere[0].names); // ["Gipsy", "Nala", "Dinky"]
console.log(unsereHaustiere[0].names[1]); //Nala

console.log(unsereHaustiere[1]);
console.log(unsereHaustiere[1].names); // ["Knöpfchen", "Pinselchen", "Droopy"]
console.log(unsereHaustiere[1].names[2]); //Droopy

console.log(unsereHaustiere[0].names + "," + unsereHaustiere[1].names); //Gipsy,Nala,Dinky,Knöpfchen,Pinselchen,Droopy

console.log(unsereHaustiere[0].names);

// Erstelle eine Methode, mit der man die Hundenamen ändern kann.

// function changeDogName() {
//   unsereHaustiere[1].names = ["Lolly", "Ozzy", "Maza"]
// }
// changeDogName();
// console.log("new names" + unsereHaustiere)

function changeDogName(newNames, pets) {
  pets.forEach((x) => {
    if (x.tiertyp == "Hunde") x.names = newNames;
  });
}
changeDogName(["Bubi", "Bobi"], unsereHaustiere);
console.log(unsereHaustiere[1].names);

// lev 1_6

var myMusic = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

//Füge zu dem Objekt Deine Lieblingsmusik hinzu.
let queen = {
  kunstler: "Queen",
  title: "Bohemian Rhapsody",
  release_jahr: 1979,
  formate: ["LP", "CD", "MC", "Download"],
  gold: true,
};

myMusic.push(queen);
console.log(myMusic); //queen is added on the last place

// Greife(console.log) auf die Werte dieses Objekts zu:

// "The Beatles"
console.log(myMusic[0].kunstler); //first access first item of an array, then access value of object
// Von Pink Floyd: "Download"
console.log(myMusic[1].formate[3]);
// Von Pink Floyd: true
console.log(myMusic[1].gold);
// 1971 und 1983
console.log(myMusic[2].release_jahr);
console.log(myMusic[3].release_jahr);
// Von Metallica: "MC"
console.log(myMusic[4].formate[2]);
// Von Metallica das Wort: Ride
let toArr = myMusic[3].title.split(" ");
console.log(toArr); // ["Kill", "’Em", "All", "und", "Ride", "the", "Lightning"]
console.log(toArr[4]); //Ride
// Von Led Zeppelin das Wort: IV:
console.log(myMusic[2].title.split(" ")[2]); //IV
// Von Pink Floyd das Wort: Floyd
console.log(myMusic[1].kunstler.split(" ")[1]); //Floyd

// 1.7

var myMusic2 = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

// array myMusic2
// kunstler - element in an object

console.log(myMusic2[0].kunstler); //The Beatles
console.log(myMusic2[1].kunstler); //Pink Floyd
console.log(myMusic2[2].kunstler); //Led Zeppelin

// for each
myMusic2.forEach(function (elt) {
  document.write(`${elt.kunstler}<br>`);
  document.write(`${elt.title}<br>`);
  document.write(`${elt.formate}<br><br>`);
});

// or with map
// var kunstler = myMusic2.map(element => {
//   console.log(element.kunstler);
//   document.getElementById("result").innerHTML += element.kunstler + "<br>";
// })

// 1_8

// Greife mithilfe von forEach() und map() auf Eigenschaften dieses Objekts zu.
// Schreibe Methoden für das Objekt die im HTML folgendes ausgeben:
// name
// coop
// city
// emails

var studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

// for (let index = 0; index < studentData.length; index++) {
//   console.log(studentData[index].name)
// }

function showUserData(students) {
  students.forEach(x => {
    document.getElementById("student-data").innerHTML += "Name: " + x.name + "<br>";
    document.getElementById("student-data").innerHTML += "Coop: " + x.coop + "<br>";
    document.getElementById("student-data").innerHTML += "Address: " + x.address.city + "<br>";
    document.getElementById("student-data").innerHTML += "Email: " + x.emails + "<br><br>";
  })
}
showUserData(studentData);