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

  addMemberExisting(musician, role, year) {

  }

  makeFormerMember(formerMemberIndex, yearLeft) {
    
  }

  addInfo(info) {
    this.infoTextBand = info;
  }

}