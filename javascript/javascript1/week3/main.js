// Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";
for (let i = 0; i < names.length; i++) {

  if (names[i] === nameToRemove) {

    names.splice(i, 1);
  }
}
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']




//  When will we be there

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getTravelTime(object) {
  let arrivalTime = (object.destinationDistance / object.speed) * 60;
  let hours = Math.floor(arrivalTime / 60);
  let minutes = Math.floor(arrivalTime % 60);
  return hours + " hours and " + minutes + " minutes";
}

const travelTime = getTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes





// Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
 
function logOutSeriesText() {
let lifeSpan = 80 * 365 * 24 * 60;
let totalDuration = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    let duration = ((seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60 + seriesDurations[i].minutes) / lifeSpan) * 100;
    console.log(seriesDurations[i].title + " took " + duration.toFixed(3) + "% of my life");
    totalDuration += duration;
  }
  console.log("In total that is" + totalDuration.toFixed(2) + "% in my life");
}
  logOutSeriesText(seriesDurations);




// Save a note

const notes = [];
function saveNote (content, id) {
  const note = {
    content: content,
    id: id,
  };
notes.push(note);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Send an email", 3);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]



// Get a note

function getNote(id) {
  for(let i=0; i < getNote.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    } else {
      return "You entered wrong id";
    }
  }
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}



// Logout notes

function logOutNotesFormatted() {
  for (let i=0; i<notes.length; i++) {
    console.log("The note with id: " + notes[i].id + ", has the following note text: " + notes[i].content);
  }
}
logOutNotesFormatted();