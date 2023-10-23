import fs from "fs";
import Band from "./band.js";
import Musician from "./musician.js";
import PromptSync from "prompt-sync";
import { log } from "console";
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
      this.#bandsList.push(new Band(dataBandsList[i].name, dataBandsList[i].founded, dataBandsList[i].info, dataBandsList[i].disbanded, dataBandsList[i].currentMembers, dataBandsList[i].previousMembers));      
    }
    const dataMusiciansList = JSON.parse(jsonstringMusicians);
    for (let i = 0; i < dataMusiciansList.length; i++) {
      this.#musiciansList.push(new Musician(dataMusiciansList[i].name, dataMusiciansList[i].birthdate, dataMusiciansList[i].roles, dataMusiciansList[i].info, dataMusiciansList[i].currentBands, dataMusiciansList[i].previousBands));
    }
  }
  
  addBand(bandName, bandFounding, bandInfo, bandDisband, bandCurMembers) {
    let tempBand = new Band(bandName, bandFounding, bandInfo, bandDisband, bandCurMembers);
    this.#bandsList.push(tempBand);
    this.#UpdateJsonFiles();
  }
  addMusician(musicianName, musicianBirthDate, musicianInfo, musicianRoles, musicianBands) {
    let tempMusician = new Musician(musicianName, musicianBirthDate, musicianRoles, musicianInfo, musicianBands);
    this.#musiciansList.push(tempMusician);
    this.#UpdateJsonFiles();
  }

  readList() {
    console.log(`Here are the currently stored Bands`)
    for (let i = 0; i < this.#bandsList.length; i++) {
      console.log(`${i+1}: ${this.#bandsList[i].nameBand}`);
      this.#bandsList[i].printInfoBand();   
    }
    console.log(`Here are the currently stored Artists and Musicians`)
    for (let i = 0; i < this.#musiciansList.length; i++) {
      console.log(`${i + 1}: ${this.#musiciansList[i].nameMusician}`);
      this.#musiciansList[i].printInfoMusician();
    }
  }

  addMusicianToBand(indexMusician, indexBand, bandRole, joinedYear) {
    if (indexBand <= this.#bandsList.length && indexMusician <= this.#musiciansList && indexBand >= 1 && indexMusician >= 1) {
      this.#bandsList[indexBand - 1].addMemberExisting(this.#musiciansList[indexMusician - 1].nameMusician, bandRole, joinedYear);
      this.#musiciansList[indexMusician - 1].addBand(this.#bandsList[indexMusician - 1].nameBand, bandRole, joinedYear);
      this.#UpdateJsonFiles();
    }
    else {
      console.log(`One or more of the indexes you entered to add to a band does not exist in the list, please try again`);
    }

  }

  removeMusicanFormBand(indexMusician, indexBand, yearSplit) {
    if (indexBand <= this.#bandsList.length && indexMusician <= this.#musiciansList && indexBand >= 1 && indexMusician >= 1) {
      this.#bandsList[indexBand - 1].makeFormerMember(this.#bandsList[indexBand - 1].findBandMember(this.#musiciansList[indexMusician - 1].nameMusician),yearSplit);
      this.#musiciansList[indexMusician - 1].removeBand(this.#musiciansList[indexMusician - 1].findBand(this.#bandsList[indexBand - 1].nameBand), yearSplit);
      this.#UpdateJsonFiles();
    }
    else {
      console.log(`One or more of the indexes you entered to remove form a band does not exist in the list, please try again`);
    }

  }

  deleteEntry(listToDeleteFrom,indexToDelete) {
    if (listToDeleteFrom === "band") {
      if (indexToDelete <= this.#bandsList.length && indexToDelete >= 1) {
        this.#bandsList.splice(indexToDelete -1, 1)
        this.#UpdateJsonFiles();
      }
      else {
        console.log(`The index you entered to delete does not exist in the list, please try again`);
      }
    }
    else if (listToDeleteFrom === "musician") {
      if (indexToDelete <= this.#musiciansList.length && indexToDelete >= 1){
        this.#musiciansList.splice(indexToDelete -1, 1)
        this.#UpdateJsonFiles();
      }
      else {
        console.log(`The index you entered to delete does not exist in the list, please try again`);
      }
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