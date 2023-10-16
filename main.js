import Band from "./band.js";
import Musician from "./musician.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
import fs from "fs";
const jsonstring = fs.readFileSync("data.json");
const bandsAndMusiciansData = JSON.parse(jsonstring);
console.log(bandsAndMusiciansData);

console.log(`Please enter the following pieces of data:`);
let nameOfBand = prompt(`the name of the band: `);
let bandFounding = prompt(`the year the band was formed: `);
let newBand = new Band(nameOfBand, bandFounding);
let newBandInfo = prompt(`Please enter some information about the band: `)
newBand.addInfo(newBandInfo);
bandsAndMusiciansData.bands[bands.length] = {
  "Band name: ": newBand.nameBand,
  "Band Founding: ": newBand.yearFounding,
  "Band Info:": newBand.infoTextBand
}

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
      bandsAndMusiciansData.bands[bands.length] = {
        "Band name: ": newBand.nameBand,
        "Band Founding: ": newBand.yearFounding,
        "Band Info:": newBand.infoTextBand,
      }
      break;
    
    case 2:
      console.log(`Please enter the following pieces of data:`);
      let nameOfArtist = prompt(`the name of the musician: `);
      let dateOfBirt = prompt(`the year the artist was born: `);
      let artistsRoles = prompt(`the roles/instruments the musician plays: `);
      let newArtist = new Musician(nameOfArtist, dateOfBirt, artistsRoles);
      let newMusicianInfo = prompt(`Please enter some information about the musician: `);
      newArtist.addInfoMusician(newMusicianInfo);
      break;
    
    case 3:

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

function EditingEntry() {
  
}

