import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
export default class Musician{
  nameMusician;
  infoTextMusician;
  birthYear;
  curAge;
  curBandsList;
  prevBandList;
  instruments;

  constructor(name, birthdate, roles) {
    this.nameMusician = name;
    this.birthYear = birthdate;
    this.instruments = [];
    this.instruments.push(roles);
    this.curBandsList = [];
    this.prevBandList = [];
    this.updateAge();
  }

  addInfoMusician(info) {
    this.infoTextBand = info;
  }

  updateAge() {
    let yearForMaths = new Date().getFullYear();
    this.curAge = this.yearForMaths - this.birthYear;
  }
  
}