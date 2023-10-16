export default class Band{
  nameBand;
  infoTextBand;
  yearFounding;
  yearDisbanding = NaN;
  listMembersCur;
  listPrevMembers;

  constructor(name, founding) {
    this.nameBand = name;
    this.yearFounding = founding;
    this.listMembersCur = {};
    this.listPrevMembers = {};
  }

  addMemberExisting(musician) {

  }

  makeFormerMember(formerMember, year) {
    this.listMembersCur.filter(musician.nameMusician === formerMember);
  }

  addInfo(info) {
    this.infoTextBand = info;
  }

}