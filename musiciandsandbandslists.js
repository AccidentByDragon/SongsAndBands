import fs from "fs";
import Band from "./band.js";
import Musician from "./musician.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

export default class MusiciansAndBandsList {
  #bandsList = [];
  #musiciansList = [];

  constructor() {
    this.#fetchLists();
  }

  #fetchLists() {
    const jsonstringBands = fs.readFileSync("dataBands.json");
    const jsonstringMusicians = fs.readFileSync("datamusicians.json")
    const dataBandsList = JSON.parse(jsonstringBands);    
    for (let i = 0; i < dataBandsList.length; i++) {
      this.#bandsList.push(new Band(dataBandsList[i].nameBand, dataBandsList[i].yearFounding, dataBandsList[i].infoTextBand));      
    }
    const dataMusiciansList = JSON.parse(jsonstringMusicians);
    for (let i = 0; i < dataMusiciansList.length; i++) {
      this.#musiciansList.push(new Musician(dataMusiciansList[i].nameMusician, dataMusiciansList[i].birthYear, dataMusiciansList[i].instruments, dataMusiciansList[i].infoTextMusician));
    }
  }
  
  addBand(nameBand, bandFounding) {
    let tempBand = new Band(nameBand, bandFounding);
    this.addInfoBand(tempBand);
    this.#bandsList.push(tempBand);
    this.#UpdateJsonFiles();
  }
  addMusician(nameOfArtist, dateOfBirth, artistsRoles) {
    let tempMusician = new Musician(nameOfArtist, dateOfBirth, artistsRoles);
    this.addInfoMusician(tempMusician);
    this.#musiciansList.push(tempMusician);
    this.#UpdateJsonFiles();
  }

  readList() {
    console.log(`Here are the currently stored Bands`)
    for (let i = 0; i < this.#bandsList.length; i++) {
      console.log(`${i + 1}: ${this.#bandsList[i].nameBand}`);      
    }
    console.log(`Here are the currently stored Artists and Musicians`)
    for (let i = 0; i < this.#musiciansList.length; i++) {
      console.log(`${i+1}: ${this.#musiciansList[i].nameMusician}`);   
    }
  }
  EditingEntry(listToEdit, indexToEdit) {
    if (listToEdit === "band") {

    }
    else if (listToEdit === "musician" || listToEdit === "artist") {

    }
    else {
      console.log(`The object you wish to enter is not a valid entry, please try again`);
      console.log(`returning to the menu`);
    }
  }

  deleteEntry(listToDeleteFrom,indexToDelete) {

  }

  addInfoBand(band) {
    const newBandInfo = prompt(`Please enter some information about the band: `)
    band.addInfo(newBandInfo);
  }

  addInfoMusician(musician) {
    const newMusicianInfo = prompt(`Please enter some information about the musician: `)
    musician.addInfo(newMusicianInfo);
  }


  #UpdateJsonFiles() {
    fs.writeFile('dataBands.json', JSON.stringify(this.#bandsList, null, 2), (err) => {
      if (err) throw err;
      console.log(`data written to file`)
    });
    fs.writeFile('datamusicians.json', JSON.stringify(this.#musiciansList, null, 2), (err) => {
      if (err) throw err;
      console.log(`data written to file`)
    });
  }
}

  





