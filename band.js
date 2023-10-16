import Musician from "./musician.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
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
      let newMusicianName = prompt(`What is this musicians name?: `);
      let newMusicianBirthday = prompt(`What year was this musician born: `);
      let newMusicianRoles = prompt(`What instruments/roles do they play?: `);
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