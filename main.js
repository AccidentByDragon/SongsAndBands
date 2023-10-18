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
  4. Add Mmsician to band
  5. Remove musician from band
  6. Delete a musician or band
  7. Exit
  `)
  let userInput = Number(prompt(`Please choose one of the options above: `).trim())
  switch (userInput) {
    case 1:
      console.log(`Please enter the following pieces of data:`);
      bandandMusicianList.addBand(prompt(`the name of the band: `), Number(prompt(`the year the band was formed: `)));
      break;
    
    case 2:
      console.log(`Please enter the following pieces of data:`);
      bandandMusicianList.addMusician(prompt(`the name of the musician: `), Number(prompt(`the year the artist was born as a number: `), prompt(`the roles/instruments the musician plays: `)));
      bandandMusicianList.addInfo()
      break;
    
    case 3:
      bandandMusicianList.readList();
      break;
    case 4:
      console.log(`Please enter the following:`)
      bandandMusicianList.AddMusicianToBand(prompt(`Please enter the index of the musician you wish to add to a band: `), prompt(`please enter the idnex of the band to add the musician too: `));
      break;
    
    case 5:
      console.log(`Please enter the following:`)
      bandandMusicianList.removeMusicanFormBand(prompt(`Please enter the index of the musician you want to remove from a band: `), prompt(`Please enter the index fo the band you wish to remove them from: `), prompt(`Please enter the year they left the band: `))
      break;
    case 6:
      bandandMusicianList.deleteEntry();
      break;
    
    case 7:
      isRunning = false;
      break;
    
    default:

      break;
  }
}

