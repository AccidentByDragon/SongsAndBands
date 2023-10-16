import Band from "./band.js";
import Musician from "./musician.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
import fs from "fs";
const jsonstring = fs.readFileSync("data.json");
const bandsAndMusiciansData = JSON.parse(jsonstring);
console.log(bandsAndMusiciansData);

let isRunning = true;

while (isRunning === true) {
  console.log(`Musician and Bands
  What do you want to do?:

  1. Add a New Band
  2. Add a New Musician
  3. 
  4. Delete an entry
  5. Exit
  `)
  let userInput = Number(prompt(`Please choose one of the options above: `).trim())
  switch (userInput) {
    case 1:
      console.log(`Please enter the following pieces of data:`);
      let nameOfBand = prompt(`the name of the band: `);
      let bandFounding = prompt(`the year the band was formed: `);
      let newBand = new Band(nameOfBand, bandFounding);
      let newBandInfo = prompt(`Please enter some information about the band: `)
      newBand.addInfo(newBandInfo);
      bandsAndMusiciansData.bands[bandsAndMusiciansData.bands.length] = {
        "Band name: ": newBand.nameBand,
        "Band Founding: ": newBand.yearFounding,
        "Band Info:": newBand.infoTextBand,
      }
      fs.writeFile('data.json', JSON.stringify(bandsAndMusiciansData, null, 2), (err) => {
        if (err) throw err;
        console.log(`data written to file`)
      });
      break;
    
    case 2:
      console.log(`Please enter the following pieces of data:`);
      let nameOfArtist = prompt(`the name of the musician: `);
      let dateOfBirt = Number(prompt(`the year the artist was born as a number: `));
      let artistsRoles = prompt(`the roles/instruments the musician plays: `);
      let newArtist = new Musician(nameOfArtist, dateOfBirt, artistsRoles);
      let newMusicianInfo = prompt(`Please enter some information about the musician: `);
      newArtist.addInfoMusician(newMusicianInfo);
      let yearForMaths = new Date().getFullYear();
      bandsAndMusiciansData.musicians[bandsAndMusiciansData.musicians.length] = {
        "Musicians name: ": newArtist.nameMusician,
        "Musicians Age: ": yearForMaths - newArtist.birthYear,
        "Musician Info:": newArtist.infoTextMusician
      }
      fs.writeFile('data.json', JSON.stringify(bandsAndMusiciansData, null, 2), (err) => {
        if (err) throw err;
        console.log(`data written to file`)
      });
      break;
    
    case 3:
      let editObject = prompt(`Please enter one fo the following to edit: Band or Musician`).trim().toLocaleLowerCase();
      EditingEntry(editObject);
      break;
    
    case 4:

      break;
    
    case 5:
      isRunning = false;
      break;
    
    default:

      break;
  }
}

function EditingEntry(thingToEdit) {
  if (thingToEdit === "band") {
    
  }
  else if (thingToEdit === "musician" || thingToEdit === "artist") {
    
  }
  else {
    console.log(`The object you wish to enter is not a valid entry, please try again`);
    console.log(`returning to the menu`);
  }
}

