import MusiciansAndBandsList from "./musiciandsandbandslists.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const bandandMusicianList = new MusiciansAndBandsList();

let isRunning = true;

while (isRunning === true) {
  console.log(`Musician and Bands
  What do you want to do?:

  1. Add a new band
  2. Add a new musician
  3. Print lists
  4. Add musician to band
  5. Remove musician from band
  6. Delete a musician or band
  7. Exit
  `)
  let userInput = Number(prompt(`Please choose one of the options above: `).trim())
  switch (userInput) {
    case 1:
      console.log(`Please enter the following pieces of data:`);
      const tempBandName = prompt(`the name of the band: `);
      if (tempBandName.length === 0) {
        console.log(`the Name you entered was too short, it must be atleast 1 symbol in length`);
        break;
      }
      const tempBandDate = Number(prompt(`the year the band was formed: `));
      if (tempBandDate === NaN || tempBandDate === null || tempBandDate === 0) {
        console.log(`the Date you tried to enter was not a valid number, please enter it as a number higher than 0`);
        break;
      }
      bandandMusicianList.addBand( tempBandName, tempBandDate);
      break;
    
    case 2:
      console.log(`Please enter the following pieces of data:`);
      const tempName = prompt(`the name of the musician: `);
      if (tempName.length === 0) {
        console.log(`the Name you entered was too short, it must be atleast 1 symbol in length`);
        break;
      }
      const tempDate = Number(prompt(`the year the artist was born as a number: `));
      if (tempDate == NaN || tempDate == null || tempDate == 0) {
        console.log(`The date you tried to enter was not a valid number, please enter it as a number higher than 0`);
        break;
      }
      const tempRole = prompt(`the roles/instruments the musician plays: `);
      if (tempRole.length === 0) {
        console.log(`The name of the Role/Instrument was too short, it must be atleast 1 symbol long`);
        break;
      }
      bandandMusicianList.addMusician(tempName, tempDate, tempRole);      
      break;
    
    case 3:
      bandandMusicianList.readList();
      break;
    case 4:
      console.log(`Please enter the following:`);
      const tempMusicianAddIndex = Number(prompt(`Please enter the index of the musician you wish to add to a band: `));
      if (tempMusicianAddIndex === NaN || tempMusicianAddIndex === null || tempMusicianAddIndex === 0) {
        console.log(`the index you tried to enter was not a valid number, please enter it as a number higher than 0`);
        break;
      }
      const tempBandAddIndex = Number(prompt(`please enter the index of the band to add the musician too: `));
      if (tempBandAddIndex === NaN || tempBandAddIndex === null || tempBandAddIndex === 0) {
        console.log(`the index you tried to enter was not a valid number, please enter it as a number higher than 0`);
        break;
      }
      const tempBandRole = prompt(`Please enter the role the Musician had in the band: `);
      if (tempBandRole.length === 0) {
        console.log(`The name of the Role/Instrument was too short, it must be atleast 1 symbol long`);
        break;
      }
      const tempJoinYear = Number(prompt(`Please enter the year the Musician joined the band: `));
      if (tempJoinYear === NaN || tempJoinYear === null || tempJoinYear === 0) {
        console.log(`the date you tried to enter was not a valid number, please enter it as a number higher than 0`);
        break;
      }
      bandandMusicianList.addMusicianToBand(tempMusicianAddIndex,tempBandAddIndex, tempBandRole, tempJoinYear );
      break;
    
    case 5:
      console.log(`Please enter the following:`);
      const tempMusicianIndex = Number(prompt(`Please enter the index of the musician you want to remove from a band: `));
      if (tempMusicianIndex === NaN || tempMusicianIndex === null || tempMusicianIndex === 0) {
        console.log(`the index you tried to enter was not a valid number, please enter it as a number`);
        break;
      }
      const tempBandIndex = Number(prompt(`Please enter the index fo the band you wish to remove them from: `));
      if (tempBandIndex === NaN || tempBandIndex === null || tempBandIndex === 0) {
        console.log(`the index you tried to enter was not a valid number, please enter it as a number`);
        break;
      }
      const tempPartingDate = Number(prompt(`Please enter the year they left the band: `));
      if (tempPartingDate === NaN || tempPartingDate === null || tempPartingDate === 0) {
        console.log(`the date you tried to enter was not a valid number, please enter it as a number`);
        break;
      }
      bandandMusicianList.removeMusicanFormBand(tempMusicianIndex, tempBandIndex, tempPartingDate);
      break;
    case 6:
      console.log(`Please enter the following: `);
      const tempListName = prompt(`Please enter which list you want to remove from, musician or band: `).toLowerCase();
      if (tempListName != "band" && tempListName != "musician") {
        console.log(`you must enter either band or musician`);
        break;
      }
      const tempIndexInput = prompt(`Please enter the Index of what you wish to delete: `);
      if (tempIndexInput === NaN || tempIndexInput === null || tempIndexInput === 0) {
        console.log(`the index you tried to enter was not a valid number, please enter it as a number`);
        break;
      }
      bandandMusicianList.deleteEntry(tempListName, tempIndexInput);
      break;
    
    case 7:
      isRunning = false;
      break;
    
    default:
      console.log(`Something went worng with your input or it does not exist please try again!`);
      break;
  }
}

function addBandMenu() {
  let isInBandMenu = true;

}

function addMusicianMenu() {
  let isInMusicianMenu = true;
  
}
