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
      const tempBandDate = Number(prompt(`the year the band was formed: `));
      bandandMusicianList.addBand( tempBandName, tempBandDate);
      break;
    
    case 2:
      console.log(`Please enter the following pieces of data:`);
      const tempName = prompt(`the name of the musician: `);
      const tempDate = Number(prompt(`the year the artist was born as a number: `));
      const tempRole = prompt(`the roles/instruments the musician plays: `);
      bandandMusicianList.addMusician(tempName, tempDate, tempRole);      
      break;
    
    case 3:
      bandandMusicianList.readList();
      break;
    case 4:
      console.log(`Please enter the following:`)
      bandandMusicianList.addMusicianToBand(prompt(`Please enter the index of the musician you wish to add to a band: `), prompt(`please enter the idnex of the band to add the musician too: `));
      break;
    
    case 5:
      console.log(`Please enter the following:`)
      bandandMusicianList.removeMusicanFormBand(prompt(`Please enter the index of the musician you want to remove from a band: `), prompt(`Please enter the index fo the band you wish to remove them from: `), prompt(`Please enter the year they left the band: `))
      break;
    case 6:
      bandandMusicianList.deleteEntry(prompt(`Please enter which lsit you want to remove from, musician or band:`), prompt(`Please enter the Index of what you wish to delete`));
      break;
    
    case 7:
      isRunning = false;
      break;
    
    default:
      console.log(``);
      break;
  }
}

