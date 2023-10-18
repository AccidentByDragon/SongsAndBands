export default class Band{
  nameBand;
  infoTextBand;
  yearFounding;
  yearDisbanding = NaN;
  #listMembersCur;
  #listPrevMembers;

  constructor(name, founding, info = ``) {
    this.nameBand = name;
    this.yearFounding = founding;
    this.infoTextBand = info;
    this.#listMembersCur = [];
    this.#listPrevMembers = [];
  }

  addMemberExisting(musician, role, year) {
    this.#listMembersCur.push(`${musician} was a member as a ${role}, they joined ${year}`)
  }

  findBandMember(nameToFind){
    
  }

  makeFormerMember(formerMemberIndex, yearLeft) {
    const tempString = (this.#listMembersCur.splice(formerMemberIndex - 1, 1).toString());
    this.#listPrevMembers.push(`${tempString} and left the band ${yearLeft}`);
  }

  addInfo(info) {
    this.infoTextBand = info;
  }



}