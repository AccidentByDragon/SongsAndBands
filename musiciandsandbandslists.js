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
      this.#bandsList.push(new Band(dataBandsList[i].name, dataBandsList[i].founded, dataBandsList[i].infoTextBand, dataBandsList[i].disbanded, dataBandsList[i].currentMembers, dataBandsList[i].previousMembers));      
    }
    const dataMusiciansList = JSON.parse(jsonstringMusicians);
    for (let i = 0; i < dataMusiciansList.length; i++) {
      this.#musiciansList.push(new Musician(dataMusiciansList[i].name, dataMusiciansList[i].birthYear, dataMusiciansList[i].instruments, dataMusiciansList[i].info, dataMusiciansList[i].currentBands, dataMusiciansList[i].previousBands));
    }
  }
  
  addBand(nameBand, bandFounding) {
    let tempBand = new Band(nameBand, bandFounding);
    this.addInfoBand(tempBand);
    this.#bandsList.push(tempBand);
    this.#UpdateJsonFiles();
  }
  addMusician(nameOfArtist, dateOfBirth, artistsRoles) {
    let tempMusician = new Musician(nameOfArtist, dateOfBirth);
    this.addInfoMusician(tempMusician);
    this.addRolesMusician(tempMusician, artistsRoles);
    this.#musiciansList.push(tempMusician);
    this.#UpdateJsonFiles();
  }

  readList() {
    console.log(`Here are the currently stored Bands`)
    for (let i = 0; i < this.#bandsList.length; i++) {
      console.log(`${i+1}: ${this.#bandsList[i].nameBand}`);
      //console.log(`${i+1}: ${this.#bandsList[i].fetchInfoBand()}`);
    }
    console.log(`Here are the currently stored Artists and Musicians`)
    for (let i = 0; i < this.#musiciansList.length; i++) {
      console.log(`${i + 1}: ${this.#musiciansList[i].nameMusician}`);
      //console.log(`${i+1}: ${this.#musiciansList[i].fetchInfo()}`);   
    }
  }

  addMusicianToBand(indexMusician, indexBand) {
    let tempRole = prompt(`Please enter the role the Musician had in the band: `);
    let tempYear = prompt(`Please enter the year the Musician joined the band`);
    this.#bandsList[indexBand - 1].addMemberExisting(this.#musiciansList[indexMusician-1].nameMusician, tempRole, tempYear);
    this.#musiciansList[indexMusician - 1].addBand(this.#bandsList[indexMusician - 1].nameBand, tempRole, tempYear);
    this.#UpdateJsonFiles();
  }

  removeMusicanFormBand(indexMusician, indexBand, yearSplit) {
    this.#bandsList[indexBand - 1].makeFormerMember(this.#bandsList[indexBand - 1].findBandMember(this.#musiciansList[indexMusician - 1].nameMusician),yearSplit);
    this.#musiciansList[indexMusician - 1].removeBand(this.#musiciansList[indexMusician - 1].findBand(this.#bandsList[indexBand - 1].nameBand), yearSplit);
    this.#UpdateJsonFiles();
  }

  deleteEntry(listToDeleteFrom,indexToDelete) {
    if (listToDeleteFrom === "band") {
      this.#bandsList.splice(indexToDelete -1, 1)
      this.#UpdateJsonFiles();
    }
    else if (listToDeleteFrom === "musician" || listToDeleteFrom === "artist") {
      this.#musiciansList.splice(indexToDelete -1, 1)
      this.#UpdateJsonFiles();
    }
    else {
      console.log(`The object you wish to enter is not a valid entry, please try again`);
      console.log(`returning to the menu`);
    }
  }

  addRolesMusician(musician, inputRoles) {
    musician.addRole(inputRoles);
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
    let tempBandList = [];
    for (let i = 0; i < this.#bandsList.length; i++) {
      tempBandList.push(this.#bandsList[i].fetchInfoBand());      
    }
    let tempMusicianList = [];
    for (let i = 0; i < this.#musiciansList.length; i++) {
      tempMusicianList.push(this.#musiciansList[i].fetchInfo());        
    }
    fs.writeFileSync('dataBands.json', JSON.stringify(tempBandList, null, 2), (err) => {
      if (err) throw err;
      console.log(`data written to file`)
    });
    fs.writeFileSync('datamusicians.json', JSON.stringify(tempMusicianList, null, 2), (err) => {
      if (err) throw err;
      console.log(`data written to file`)
    });
  }
}

  





