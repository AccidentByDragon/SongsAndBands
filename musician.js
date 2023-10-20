import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
export default class Musician{
  nameMusician;
  infoTextMusician;
  birthYear;
  #curAge;
  #curBandsList;
  #prevBandList;
  instruments;

  constructor(name, birthdate, roles = [], info = "", curBands = [], preBands = []) {
    this.nameMusician = name;
    this.birthYear = birthdate;
    this.instruments = [];
    this.infoTextMusician = info;
    this.#curBandsList = curBands;
    this.#prevBandList = preBands;
    this.updateAge();
  }

  addInfo(info) {
    this.infoTextMusician = info;
  }

  updateAge() {
    let yearForMaths = new Date().getFullYear();
    this.curAge = this.yearForMaths - this.birthYear;
  }

  findBand(searchString) {
    this.#curBandsList.indexOf(element => element.includes(searchString));
  }

  addRole(inputRole) {
    this.instruments.push(inputRole);    
  }
  
  addBand(bandName, roleInband, year) {
    this.#curBandsList.push(`was a member of ${bandName} as a ${roleInband}, they joined ${year}`)
  }

  removeBand(formerBandIndex, yearLeft) {
    const tempString = (this.#curBandsList.splice(formerBandIndex - 1, 1).toString());
    this.#prevBandList.push(`${tempString} and left the band ${yearLeft}`);
  }

  readBandsList() {
    for (let i = 0; i < this.#curBandsList.length; i++) {
      console.log(`${i+1}: ${this.#curBandsList[i]}`);
    }
  }

  fetchInfo() {
    return {
      "name": this.nameMusician,
      "info": this.infoTextMusician,
      "birthdate": this.birthYear,
      "roles": this.instruments,
      "currentBands": this.#curBandsList,
      "previousBands": this.#prevBandList
    }
  }


}