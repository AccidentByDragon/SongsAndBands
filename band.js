export default class Band{
  nameBand;
  infoTextBand;
  yearFounding;
  yearDisbanding = NaN;
  #listMembersCur;
  #listPrevMembers;

  constructor(name, founding, info = ``,yearDisbanded = 0) {
    this.nameBand = name;
    this.yearFounding = founding;
    this.infoTextBand = info;
    this.#listMembersCur = [];
    this.#listPrevMembers = [];
    this.yearDisbanding = yearDisbanded;
  }

  addMemberExisting(musician, role, year) {
    this.#listMembersCur.push(`${musician} was a member as a ${role}, they joined ${year}`)
  }

  findBandMember(nameToFind){
    this.#listMembersCur.indexOf(element => element.includes(nameToFind));
  }

  makeFormerMember(formerMemberIndex, yearLeft) {
    const tempString = (this.#listMembersCur.splice(formerMemberIndex - 1, 1).toString());
    this.#listPrevMembers.push(`${tempString} and left the band ${yearLeft}`);
  }

  addInfo(info) {
    this.infoTextBand = info;
  }

  fectchInfoBand() {
    return {
      "Band Name": this.nameBand,
      "Founding year": this.yearFounding,
      "Disbanding year": this.yearDisbanding,
      "Info": this.infoTextBand,
      "Current Members": this.#listMembersCur,
      "Previous Members": this.#listPrevMembers
    }
  }


}