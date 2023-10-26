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
      menuMusicianToBand();
      break;
    
    case 5:
      menuRemoveFromBand();
      break;
    case 6:
      menuDeleteBandOrMusician();
      break;
    case 7:
      isRunning = false;
      break;
    
    default:
      console.log(`Something went wrong with your input or it does not exist please try again!`);
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
    5. Band Members: ${bandCurMembers.length}
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
        bandInfo = prompt(`Please Enter some Info about the band: `);
        break;
      case 4:
        bandDisband = prompt(`Please enter the year the band disbanded: `);
        break;
      case 5:
        console.log(`Do you wish to create a new musican to add to the band or add an existing musician to the band?:
        1. Create a new musican: 
        2. Add an existing musican: 
        `);
        const choiceAddMembers = Number(prompt(`Which do you want to do?: `))
        if (choiceAddMembers == "1") {
          bandCurMembers.push(addMusicianMenu());
          console.log(`you will be able to add the muscian you created to the band upon creating the band`);
        }
        else if (choiceAddMembers == "2") {
          bandCurMembers.push(1);
          console.log(`you will be asked to fill in the necisary info to add an existing musican to the band on creating the band`);
        }
        else {
          console.log(`the choice you made was neither 1 or 2, please try again`);
        }
        break;
      case 6:       
        if (bandCurMembers.length <= 0) {
          console.log(`the band must have members to be created!`);
          break;
        }     
        if (bandName.length > 0 && bandFounding >= 4) {
          const tempBandindex = bandandMusicianList.addBand(bandName, bandFounding, bandInfo, bandDisband)
          for (let i = 0; i < bandCurMembers.length; i++) {
            menuMusicianToBand(bandCurMembers[i]+1, tempBandindex+1)
          }
          isInBandMenu = false;
          break;
        }
        else {
          console.log(`the Band must have a name, current name: ${bandName} and a founding year current:${bandFounding}`);
          isInBandMenu = true;
          break;
        }

      case 7:
        isInBandMenu = false;
        break;
      default:
        console.log(`The Number you entered was not a valid option`);
        break;
    }
  }
}

function addMusicianMenu() {
  let musicianName = ``;
  let musicianBirthDate = ``;
  let musicianInfo = ``;
  let musicianRoles = [];
  let isInMusicianMenu = true;
  let indexMusician = -1
  while (isInMusicianMenu === true) {    
    console.log(`
    Please fill the following:
    Note: band membership can be left empty
    1. Musician Name: ${musicianName}
    2. Musician Birth date: ${musicianBirthDate}
    3. Musician Info: ${musicianInfo}
    4. Musician Roles: ${musicianRoles}
    5. Create Musician and return to Main Menu
    6. Quit to main menu
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
        const tempRole = prompt(`Please enter a role/instrument that the musician plays: `)
        musicianRoles.push(tempRole);
        break;
      case 5:
        if (musicianName.length>0 && musicianBirthDate.length >=4 &&musicianRoles.length >0) {
          isInMusicianMenu = false;
          indexMusician = bandandMusicianList.addMusician(musicianName, musicianBirthDate, musicianInfo, musicianRoles);        
          break;
        } else {
          console.log(
          `the musician must have a name current:${musicianName}
          the musican must have a valid year of birth current:${musicianBirthDate}
          the musician must have has atleast a role curretn number of roles: ${musicianRoles.length}`);
          isInMusicianMenu = true;
          break;
        }
      case 6:
        isInMusicianMenu = false;
        break;
      default:
        console.log(`The Number you entered was not a valid option`);
        break;
    }
  }
  return indexMusician;
  
}

function menuMusicianToBand(inputmusicianIndex = 0, inputBandIndex = 0) {
  let isMenuMusician = true;
  let tempMusicianAddIndex = inputmusicianIndex;
  let tempBandAddIndex = inputBandIndex;
  let tempBandRole = ``
  let tempJoinYear = new Date().getFullYear();
  const tempMaxIndexBands = bandandMusicianList.listLengthBands;
  const tempMaxIndexMusicans = bandandMusicianList.listLengthMusicians;
  if (tempMaxIndexMusicans == 0 || tempMaxIndexBands == 0) {
    console.log(`One of the lsits is empty, Band List indexes ${tempMaxIndexBands}, Musician list indexes ${tempMaxIndexMusicans}`);
    return;
  }    
  while (isMenuMusician == true) {
    console.log(`
    1: musician index = ${tempMusicianAddIndex}
    2: band Index = ${tempBandAddIndex}    
    3: Role in Band = ${tempBandRole}
    4: Year joined = ${tempJoinYear}
    5: check indexes
    6: Proceed to add band
    7: Quit
    `);
    let menuChoicesBandMusician = Number(prompt(`Please choose one of the above:
    ` ))
    switch (menuChoicesBandMusician) {
      case 1:
        tempMusicianAddIndex = Number(prompt(`please enter the index of the musician you want to add: `))
        break;
      case 2:
        tempBandAddIndex = Number(prompt(`please enter the band to add to index: `))
        break;
      case 3:
        tempBandRole = prompt(`please enter the musicians role in the band: `)
        break;
      case 4:
        tempJoinYear = Number(prompt(`please enter the year the musican joined the band: `))
        break;
      case 5:
        bandandMusicianList.readSpecifiedIndexBand(tempBandAddIndex-1);
        bandandMusicianList.readSpecifiedIndexMusician(tempMusicianAddIndex-1);
        break;
      case 6:
       
        if (tempMusicianAddIndex === NaN || tempMusicianAddIndex === null || tempMusicianAddIndex === 0 || tempMusicianAddIndex > tempMaxIndexMusicans) {
          console.log(`the musician index you tried to enter was not a valid number, please enter it as a number higher than 0 but less than or equal to ${tempMaxIndexMusicans}`);
          break;
        }
        if (tempBandAddIndex === NaN || tempBandAddIndex === null || tempBandAddIndex === 0 || tempMaxIndexBands > tempMaxIndexBands) {
          console.log(`the band index you tried to enter was not a valid number, please enter it as a number higher than 0 but less than or equal to ${tempMaxIndexBands}`);
          break;
        }
        if (tempBandRole.length === 0) {
          console.log(`The name of the Role/Instrument was too short, it must be atleast 1 symbol long`);
          break;
        }
        if (tempJoinYear === NaN || tempJoinYear === null || tempJoinYear === 0) {
          console.log(`the date you tried to enter was not a valid number, please enter it as a number higher than 0`);
          break;
        }
        bandandMusicianList.addMusicianToBand(tempMusicianAddIndex, tempBandAddIndex, tempBandRole, tempJoinYear);
        isMenuMusician = false
        break;
      case 7:
        isMenuMusician = false
        bandandMusicianList.bandMemberCheck();
        break;
      default:
        console.log(`the choice you made was not a valid entry: `);
        break;
    }
  } 
}

function menuRemoveFromBand() {
  const tempMaxIndexBands = bandandMusicianList.listLengthBands;
  const tempMaxIndexMusicans = bandandMusicianList.listLengthMusicians;
  if (tempMaxIndexMusicans == 0 || tempMaxIndexBands == 0) {
    console.log(`One of the lsits is empty, Band List indexes ${tempMaxIndexBands}, Musician list indexes ${tempMaxIndexMusicans}`);
    return;
  }    
  console.log(`Please enter the following:`);
  const tempMusicianIndex = Number(prompt(`Please enter the index of the musician you want to remove from a band: `));
  if (tempMusicianIndex === NaN || tempMusicianIndex === null || tempMusicianIndex === 0 || tempMusicianIndex > tempMaxIndexMusicans) {
    console.log(`the index you tried to enter was not a valid number, please enter it as a number greater than 0 but less than or equal to ${tempMaxIndexMusicans}`);
    return;
  }
  const tempBandIndex = Number(prompt(`Please enter the index fo the band you wish to remove them from: `));
  if (tempBandIndex === NaN || tempBandIndex === null || tempBandIndex === 0 || tempBandIndex > tempMaxIndexBands) {
    console.log(`the index you tried to enter was not a valid number, please enter it as a number greater than 0 but less than or equal to ${tempMaxIndexBands}`);
    return;
  }
  const tempPartingDate = Number(prompt(`Please enter the year they left the band: `));
  if (tempPartingDate === NaN || tempPartingDate === null || tempPartingDate === 0) {
    console.log(`the date you tried to enter was not a valid number, please enter it as a number`);
  }
  let isChoosing = true
  while (isChoosing == true) {    
    let deleteChoice = prompt(`you have chosen to delete ${tempMusicianIndex} from ${tempBandIndex} are you sure? Y/N:`).toLowerCase();
    switch (deleteChoice) {
      case "y":
        if ((tempBandIndex <= tempMaxIndexBands) && (tempMusicianIndex <= tempMaxIndexMusicans)) {
          bandandMusicianList.removeMusicanFormBand(tempMusicianIndex, tempBandIndex, tempPartingDate);
          bandandMusicianList.bandMemberCheck();
          isChoosing = false;
        }
        break;
      case "n":
        isChoosing = false;
        break;
      default:
        console.log(`you must enter either Y or N`);
        break;
    }
  }  
}

function menuDeleteBandOrMusician() {
  console.log(`Please enter the following: `);
  const tempMaxIndexBands = bandandMusicianList.listLengthBands;
  const tempMaxIndexMusicans = bandandMusicianList.listLengthMusicians;
  if (tempMaxIndexMusicans == 0 || tempMaxIndexBands == 0) {
    console.log(`One of the lsits is empty, Band List indexes ${tempMaxIndexBands}, Musician list indexes ${tempMaxIndexMusicans}`);
    return;
  }    
  const tempListName = prompt(`Please enter which list you want to remove from, musician or band: `).toLowerCase();
  if (tempListName != "band" && tempListName != "musician") {
    console.log(`you must enter either band or musician`);
    return;
  }
  const tempIndexInput = prompt(`Please enter the Index of what you wish to delete: `);
  if (tempListName === "band") {
    if (tempIndexInput === NaN || tempIndexInput === null || tempIndexInput === 0 || tempIndexInput > tempMaxIndexBands)
    {
      console.log(`the index you tried to enter was not a valid number or does not exist in the list, please enter it as a number less than or equal to ${tempMaxIndexBands}`);
      return;
    }
  }
  if (tempListName === "musician") {
    if (tempIndexInput === NaN || tempIndexInput === null || tempIndexInput === 0 || tempIndexInput > tempMaxIndexMusicans)
    {
      console.log(`the index you tried to enter was not a valid number or does not exist in the list, please enter it as a number less than or equal to ${tempMaxIndexMusicans}`);
      return;
    }
  }    
  let isChoosing = true
  while (isChoosing == true) {
    let deleteChoice = prompt(`You have chosen to remove ${tempIndexInput} from ${tempListName} are you sure? Y/N: `).toLowerCase();
    switch (deleteChoice) {
      case "y":
        bandandMusicianList.deleteEntry(tempListName, tempIndexInput);
        isChoosing = false;
        break;
      case "n":
        isChoosing = false;
        break;
      default:
        console.log(`you must enter either Y or N`);
        break;
    }
  }  
  
}