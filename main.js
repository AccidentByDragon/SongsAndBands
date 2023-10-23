import MusiciansAndBandsList from "./musiciandsandbandslists.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const bandandMusicianList = new MusiciansAndBandsList();

let isRunning = true;

while (isRunning === true) {
  console.log(`Musician and Bands
  What do you want to do?:

  1. Add a new band
  2. Add a new musician
  3. Print lists
  4. Add musician to band
  5. Remove musician from band
  6. Delete a musician or band
  7. Exit
  `)
  let userInput = Number(prompt(`Please choose one of the options above: `).trim())
  switch (userInput) {
    case 1:
      addBandMenu();
      break;
    
    case 2:
      addMusicianMenu();
      break;
    
    case 3:
      bandandMusicianList.readList();
      break;
    case 4:
      MusicianToBand();
      break;
    
    case 5:
      console.log(`Please enter the following:`);
      const tempMusicianIndex = Number(prompt(`Please enter the index of the musician you want to remove from a band: `));
      if (tempMusicianIndex === NaN || tempMusicianIndex === null || tempMusicianIndex === 0) {
        console.log(`the index you tried to enter was not a valid number, please enter it as a number`);
        break;
      }
      const tempBandIndex = Number(prompt(`Please enter the index fo the band you wish to remove them from: `));
      if (tempBandIndex === NaN || tempBandIndex === null || tempBandIndex === 0) {
        console.log(`the index you tried to enter was not a valid number, please enter it as a number`);
        break;
      }
      const tempPartingDate = Number(prompt(`Please enter the year they left the band: `));
      if (tempPartingDate === NaN || tempPartingDate === null || tempPartingDate === 0) {
        console.log(`the date you tried to enter was not a valid number, please enter it as a number`);
        break;
      }
      bandandMusicianList.removeMusicanFormBand(tempMusicianIndex, tempBandIndex, tempPartingDate);
      break;
    case 6:
      console.log(`Please enter the following: `);
      const tempListName = prompt(`Please enter which list you want to remove from, musician or band: `).toLowerCase();
      if (tempListName != "band" && tempListName != "musician") {
        console.log(`you must enter either band or musician`);
        break;
      }
      const tempIndexInput = prompt(`Please enter the Index of what you wish to delete: `);
      if (tempIndexInput === NaN || tempIndexInput === null || tempIndexInput === 0) {
        console.log(`the index you tried to enter was not a valid number, please enter it as a number`);
        break;
      }
      bandandMusicianList.deleteEntry(tempListName, tempIndexInput);
      break;
    
    case 7:
      isRunning = false;
      break;
    
    default:
      console.log(`Something went worng with your input or it does not exist please try again!`);
      break;
  }
}

function addBandMenu(bandMember = []) {
  let bandName = ``;
  let bandFounding = ``;
  let bandInfo = ``;
  let bandDisband = ``;
  let bandCurMembers = bandMember;
  let isInBandMenu = true;
  while (isInBandMenu === true) {
    console.log(`
    Please fill the following:
    Note: Year of band being disbanded can be left empty:
    1. Band Name: ${bandName}
    2. Band Founded: ${bandFounding}
    3. Band Info: ${bandInfo}
    4. Band Disbanded: ${bandDisband}
    5. Band Members: ${bandCurMembers}
    6. Create Band and return to Main Menu
    7. Quit to main menu
    `);
    let bandMenuInput = Number(prompt(`Please choose an option to change: `));
    switch (bandMenuInput) {
      case 1:
        bandName = prompt(`Please enter the bands name: `);
        break;
      case 2:
        bandFounding = prompt(`Please enter the date of the bands founding either as a year or full date: `);
        break;
      case 3:
        bandInfo = prompt(`Please Enter some Info about the band`);
        break;
      case 4:
        bandDisband = prompt(`Please enter the year the band disbanded`);
        break;
      case 5:
        //addMusicianMenu();
        break;
      case 6:
        bandandMusicianList.addBand(bandName, bandFounding, bandInfo, bandDisband, bandCurMembers)
        isInBandMenu = false;
        break;
      case 7:
        isInBandMenu = false;
        break;
      default:
        console.log(`The Number you entered was not a valid option`);
        break;
    }
  }
}

function addMusicianMenu(memberOf = []) {
  let musicianName = ``;
  let musicianBirthDate = ``;
  let musicianInfo = ``;
  let musicianRoles = [];
  let musicianBands = memberOf;
  let isInMusicianMenu = true;

  while (isInMusicianMenu === true) {
    console.log(`
    Please fill the following:
    Note: band membership can be left empty
    1. Musician Name: ${musicianName}
    2. Musician Birth date: ${musicianBirthDate}
    3. Musician Info: ${musicianInfo}
    4. Musician Roles: ${musicianRoles}
    5. Member of Band(s): ${musicianBands}
    6. Create Musician and return to Main Menu
    7. Quit to main menu
    `);
    let menuMusicianInput = Number(prompt());
    switch (menuMusicianInput) {
      case 1:
        musicianName = prompt(`Please enter the musicians name: `);
        break;
      case 2:
        musicianBirthDate = prompt(`Please enter the musicans birthdate: `);
        break;
      case 3:
        musicianInfo = prompt(`Please enter some info about the musican: `);
        break;
      case 4:
        tempRole = prompt(`Please enter a role/instrument that the musician plays`)
        musicianRoles.push(tempRole);
        break;
      case 5:
        
        break;
      case 6:
        bandandMusicianList.addMusician(musicianName, musicianBirthDate, musicianInfo, musicianRoles, musicianBands);
        isInMusicianMenu = false;
        break;
      case 7:
        isInMusicianMenu = false;
        break;
      default:
        console.log(`The Number you entered was not a valid option`);
        break;
    }
  }
  
}

function MusicianToBand() {
  console.log(`Please enter the following:`);
  const tempMusicianAddIndex = Number(prompt(`Please enter the index of the musician you wish to add to a band: `));
  if (tempMusicianAddIndex === NaN || tempMusicianAddIndex === null || tempMusicianAddIndex === 0) {
    console.log(`the index you tried to enter was not a valid number, please enter it as a number higher than 0`);
  }
  const tempBandAddIndex = Number(prompt(`please enter the index of the band to add the musician too: `));
  if (tempBandAddIndex === NaN || tempBandAddIndex === null || tempBandAddIndex === 0) {
    console.log(`the index you tried to enter was not a valid number, please enter it as a number higher than 0`);
  }
  const tempBandRole = prompt(`Please enter the role the Musician had in the band: `);
  if (tempBandRole.length === 0) {
    console.log(`The name of the Role/Instrument was too short, it must be atleast 1 symbol long`);
  }
  const tempJoinYear = Number(prompt(`Please enter the year the Musician joined the band: `));
  if (tempJoinYear === NaN || tempJoinYear === null || tempJoinYear === 0) {
    console.log(`the date you tried to enter was not a valid number, please enter it as a number higher than 0`);
  }
  bandandMusicianList.addMusicianToBand(tempMusicianAddIndex, tempBandAddIndex, tempBandRole, tempJoinYear);
}