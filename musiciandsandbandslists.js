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

  addMusicianToBand(indexMusician, indexBand) {
    this.#bandsList[indexBand - 1].addMemberExisting(this.#musiciansList[indexMusician-1].nameMusician, prompt(`Please enter the Role the musician had: `), prompt(`Please enter the year the musician joined the band: `));
    this.#musiciansList[indexMusician - 1].addBand(this.#bandsList[indexMusician - 1].nameBand, prompt(`Please enter the role the Musician had in the band: `), prompt(`Please enter the year the Musician joined the band`));
  }

  removeMusicanFormBand(indexMusician, indexBand, yearSplit) {
    this.#bandsList[indexBand - 1].makeFormerMember(findBandMember(this.#musiciansList[indexMusician - 1].nameMusician),yearSplit);
    this.#musiciansList[indexMusician - 1].removeBand(findBand(this.#bandsList[indexBand - 1].nameBand),yearSplit);
  }

  deleteEntry(listToDeleteFrom,indexToDelete) {
    if (listToDeleteFrom === "band") {

    }
    else if (listToDeleteFrom === "musician" || listToDeleteFrom === "artist") {

    }
    else {
      console.log(`The object you wish to enter is not a valid entry, please try again`);
      console.log(`returning to the menu`);
    }
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
    fs.writeFileSync('dataBands.json', JSON.stringify(this.#bandsList, null, 2), (err) => {
      if (err) throw err;
      console.log(`data written to file`)
    });
    fs.writeFileSync('datamusicians.json', JSON.stringify(this.#musiciansList, null, 2), (err) => {
      if (err) throw err;
      console.log(`data written to file`)
    });
  }
}

  





