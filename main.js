import ListManager from "./listManager";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });


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
      addBand(prompt(`the name of the band: `), prompt(`the year the band was formed: `));
      break;
    
    case 2:
      console.log(`Please enter the following pieces of data:`);
      addMusician(prompt(`the name of the musician: `), Number(prompt(`the year the artist was born as a number: `), prompt(`the roles/instruments the musician plays: `)));
      break;
    
    case 3:
      let editObject = prompt(`Please enter one fo the following to edit: Band or Musician`).trim().toLowerCase();
      let editIndex = Number(prompt(`Please enter the Index you wish to edit`));
      EditingEntry(editObject);
      break;
    
    case 4:
      deleteEntry();
      break;
    
    case 5:
      isRunning = false;
      break;
    
    default:

      break;
  }
}

