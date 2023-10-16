import fs from "fs";
import Band from "./band.js";
import Musician from "./musician.js";

export default class ListManager {
  #bandsLista = [];
  #musiciansLista = [];


  constructor() {
    this.#fetchLists();
  }

  #fetchLists() {
    const jsonstring = fs.readFileSync("data.json");
    this.#bandsLista = JSON.parse(jsonstring.bands);
    this.#musiciansLista = JSON.parse(jsonstring.musicians);
  }
  
  addBand(nameBand, badnFounding) {
    let newBand = new Band(nameOfBand, bandFounding);
    bandsAndMusiciansData.bands[bandsAndMusiciansData.bands.length] = {
      "Band name: ": newBand.nameBand,
      "Band Founding: ": newBand.yearFounding,
      "Band Info:": newBand.infoTextBand,
    }
  }
  
  addMusician(nameOfArtist, dateOfBirth, artistsRoles) {
    let newArtist = new Musician(nameOfArtist, dateOfBirth, artistsRoles);
    bandsAndMusiciansData.musicians[bandsAndMusiciansData.musicians.length] = {
      "Musicians name: ": newArtist.nameMusician,
      "Musicians Age: ": yearForMaths - newArtist.birthYear,
      "Musician Info:": newArtist.infoTextMusician
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

  deleteEntry() {

  }

  addInfo() {
    newBandInfo = prompt(`Please enter some information about the band: `)
    newBand.addInfo(newBandInfo);
  }


  #UpdateJsonFile() {
    fs.writeFile('data.json', JSON.stringify(bandsAndMusiciansData, null, 2), (err) => {
      if (err) throw err;
      console.log(`data written to file`)
    });
  }
}

