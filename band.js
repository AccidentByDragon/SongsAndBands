export default class Band{
  nameBand;
  infoTextBand;
  yearFounding;
  yearDisbanding = NaN;
  listMembersCur;
  listPrevMembers;

  constructor(name, founding, info = ``, yearDisbanded = new Date(), curMembers=[], preMembers=[]) {
    this.nameBand = name;
    this.yearFounding = founding;
    this.infoTextBand = info;
    this.listMembersCur = curMembers;
    this.listPrevMembers = preMembers;
    this.yearDisbanding = yearDisbanded;
  }

  addMemberExisting(musician, role, year) {
    this.listMembersCur.push(`${musician} was a member as a ${role}, they joined ${year}`)
  }

  findBandMember(nameToFind){
    this.listMembersCur.indexOf(element => element.includes(nameToFind));
  }

  makeFormerMember(formerMemberIndex, yearLeft) {
    const tempString = (this.listMembersCur.splice(formerMemberIndex - 1, 1).toString());
    this.listPrevMembers.push(`${tempString} and left the band, ${yearLeft}`);
  }

  addInfo(info) {
    this.infoTextBand = info;
  }

  fetchInfoBand() {
    return {
      "name": this.nameBand,
      "founded": this.yearFounding,
      "disbanded": this.yearDisbanding,
      "info": this.infoTextBand,
      "currentMembers": this.listMembersCur,
      "id": this.ID,
      "previousMembers": this.listPrevMembers
    }
  }

  printInfoBand() {
    console.log(`
    Band name: ${this.nameBand},
    Founded in the year: ${this.yearFounding}
    Active till: ${this.yearDisbanding}
    Current Members: ${this.listMembersCur}
    Previous members: ${this.listPrevMembers}
    other info: ${this.infoTextBand}
    `)
  }
}