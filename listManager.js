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
  
  addBand() {
    console.log(`Please enter the following pieces of data:`);
    let nameOfBand = prompt(`the name of the band: `);
    let bandFounding = prompt(`the year the band was formed: `);
    let newBand = new Band(nameOfBand, bandFounding);
    let newBandInfo = prompt(`Please enter some information about the band: `)
    newBand.addInfo(newBandInfo);
    bandsAndMusiciansData.bands[bandsAndMusiciansData.bands.length] = {
      "Band name: ": newBand.nameBand,
      "Band Founding: ": newBand.yearFounding,
      "Band Info:": newBand.infoTextBand,
    }
    fs.writeFile('data.json', JSON.stringify(bandsAndMusiciansData, null, 2), (err) => {
      if (err) throw err;
      console.log(`data written to file`)
    });
  }
  
  addMusician() {
    console.log(`Please enter the following pieces of data:`);
    let nameOfArtist = prompt(`the name of the musician: `);
    let dateOfBirt = Number(prompt(`the year the artist was born as a number: `));
    let artistsRoles = prompt(`the roles/instruments the musician plays: `);
    let newArtist = new Musician(nameOfArtist, dateOfBirt, artistsRoles);
    let newMusicianInfo = prompt(`Please enter some information about the musician: `);
    newArtist.addInfoMusician(newMusicianInfo);
    let yearForMaths = new Date().getFullYear();
    bandsAndMusiciansData.musicians[bandsAndMusiciansData.musicians.length] = {
      "Musicians name: ": newArtist.nameMusician,
      "Musicians Age: ": yearForMaths - newArtist.birthYear,
      "Musician Info:": newArtist.infoTextMusician
    }
    fs.writeFile('data.json', JSON.stringify(bandsAndMusiciansData, null, 2), (err) => {
      if (err) throw err;
      console.log(`data written to file`)
    });
  }

  EditingEntry(thingToEdit) {
    if (thingToEdit === "band") {

    }
    else if (thingToEdit === "musician" || thingToEdit === "artist") {

    }
    else {
      console.log(`The object you wish to enter is not a valid entry, please try again`);
      console.log(`returning to the menu`);
    }
  }

  deleteEntry() {

  }
}

