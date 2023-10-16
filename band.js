import Musician from "./musician";

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
    this.listMembersCur = [];
    this.listPrevMembers = [];
  }

  addMemberExisting(musician) {
    if (musician === undefined) {
      newMusicianName = prompt(`What is this musicians name?: `);
      newMusicianBirthday = prompt(`What year was this musician born: `);
      newMusicianRoles = prompt(`What instruments/roles do they play?: `);
      this.musician = new Musician(newMusicianName, newMusicianBirthday, newMusicianRoles);

    }
    else {
      this.listMembersCur.push(musician);
    }    
  }

  makeFormerMember(formerMember, year) {
    this.listMembersCur.filter(musician.nameMusician === formerMember);
  }

}