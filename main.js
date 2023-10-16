import Band from "./band.js";
import Musician from "./musician.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
import fs from "fs";
const jsonstring = fs.readFileSync("data.json");
const data = JSON.parse(jsonstring);
console.log(data);

let isRunning = true;

while (isRunning === true) {
  console.log(`Musician and Bands
  What do you want to do?:

  1. Add a New Band
  2. Add a New Musician
  3. 
  4. Delete and entry
  5. Exit
  `)
  let userInput = Number(prompt().trim())
  switch (userInput) {
    case 1:

      break;
    
    case 2:

      break;
    
    default:

      break;
  }
}

