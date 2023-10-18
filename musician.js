import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
export default class Musician{
  nameMusician;
  #infoTextMusician;
  birthYear;
  curAge;
  #curBandsList;
  #prevBandList;
  #instruments;

  constructor(name, birthdate, roles, info = "") {
    this.nameMusician = name;
    this.birthYear = birthdate;
    this.#instruments = [];
    this.#instruments.push(roles);
    this.#infoTextMusician = info;
    this.#curBandsList = [];
    this.#prevBandList = [];
    this.updateAge();
  }

  addInfo(info) {
    this.#infoTextMusician = info;
  }

  updateAge() {
    let yearForMaths = new Date().getFullYear();
    this.curAge = this.yearForMaths - this.birthYear;
  }

  addRole(inputRole) {
    this.#instruments.push(inputRole);    
  }
  
  addBand(bandName, roleInband, year) {
    this.#curBandsList.push(`was a member of${bandName} as a ${roleInband}, they joined ${year}`)
  }

  readBandsList() {
    
  }
}