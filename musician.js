export default class Musician{
  nameMusician;
  infoTextMusician;
  birthYear;
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
  }
  
}