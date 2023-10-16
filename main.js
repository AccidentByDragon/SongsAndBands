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
      addBand();
      break;
    
    case 2:
      addMusician();
      break;
    
    case 3:
      let editObject = prompt(`Please enter one fo the following to edit: Band or Musician`).trim().toLowerCase();
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

