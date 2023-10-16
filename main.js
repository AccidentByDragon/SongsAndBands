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
  
}

