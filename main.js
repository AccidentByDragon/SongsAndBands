import MusiciansAndBandsList from "./musiciandsandbandslists.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const bandandMusicianList = new MusiciansAndBandsList();

let isRunning = true;

while (isRunning === true) {
  console.log(`Musician and Bands
  What do you want to do?:

  1. Add a New Band
  2. Add a New Musician
  3. Print Lists
  4. Add Musicina to band
  5. Delete an entry
  6. Exit
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
      bandandMusicianList.deleteEntry();
      break;
    
    case 6:
      isRunning = false;
      break;
    
    default:

      break;
  }
}

