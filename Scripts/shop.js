// Const variables
const starterPackEl = document.getElementById("starter-pack");
const classicPackEl = document.getElementById("classic-pack");
const elitePackEl = document.getElementById("elite-pack");
const starterModal = document.getElementById("starter-modal");
const classicModal = document.getElementById("classic-modal");
const eliteModal = document.getElementById("elite-modal");
const starterImageContainer = document.getElementById("starter-image-display");
const classicImageContainer = document.getElementById("classic-image-display");
const eliteImageContainer = document.getElementById("elite-image-display");
const shopSnow = document.getElementById("shop-snow");

// Penguins
const alex = document.getElementById("alex");
const avery = document.getElementById("avery");
const caleb = document.getElementById("caleb");
const casey = document.getElementById("casey");
const harper = document.getElementById("harper");
const lucky = document.getElementById("lucky");
const sammy = document.getElementById("sammy");
const taylor = document.getElementById("taylor");
const blaze = document.getElementById("blaze")
const gabe = document.getElementById("gabe");
const leela = document.getElementById("leela");
const pebble = document.getElementById("pebble");
const riley = document.getElementById("riley");
const thomas = document.getElementById("thomas");
const adric = document.getElementById("adric");
const ralph = document.getElementById("ralph");
const sarah = document.getElementById("sarah");
const parker = document.getElementById("parker");

// Let variables
let snow = 0;

let alexUnlocked = false;
let averyUnlocked = false;
let calebUnlocked = false;
let caseyUnlocked = false;
let harperUnlocked = false;
let luckyUnlocked = false;
let sammyUnlocked = false;
let taylorUnlocked = false;
let blazeUnlocked = false;
let gabeUnlocked = false;
let leelaUnlocked = false;
let pebbleUnlocked = false;
let rileyUnlocked = false;
let thomasUnlocked = false;
let adricUnlocked = false;
let ralphUnlocked = false;
let sarahUnlocked = false;
let parkerUnlocked = false;

// Arrays
const commonPenguins = ["Alex", "Avery", "Caleb", "Casey", "Harper", "Lucky", "Sammy", "Taylor"];
const uncommonPenguins = ["Blaze", "Gabe", "Leela", "Pebble", "Riley", "Thomas"];
const rarePenguins = ["Adric", "Ralph", "Sarah"];
const secretPenguins = ["Parker"];

// Save and update function
function updateGame() {
  shopSnow.textContent = `Your Snow: ${snow}`;
  saveGameState();
  saveGameStateSnow();
  galleryUpdate();
}

// Penguin check function
function penguinCheck(penguin) {
  switch(penguin) {
    case "Alex":
      alexUnlocked = true;
      break;
    case "Avery":
      averyUnlocked = true;
      break;
    case "Caleb":
      calebUnlocked = true;
      break;
    case "Casey":
      caseyUnlocked = true;
      break;
    case "Harper":
      harperUnlocked = true;
      break;
    case "Lucky":
      luckyUnlocked = true;
      break;
    case "Sammy":
      sammyUnlocked = true;
      break;
    case "Taylor":
      taylorUnlocked = true;
      break;
    case "Blaze":
      blazeUnlocked = true;
      break;
    case "Gabe":
      gabeUnlocked = true;
      break;
    case "Leela":
      leelaUnlocked = true;
      break;
    case "Pebble":
      pebbleUnlocked = true;
      break;
    case "Riley":
      rileyUnlocked = true;
      break;
    case "Thomas":
      thomasUnlocked = true;
      break;
    case "Adric":
      adricUnlocked = true;
      break;
    case "Ralph":
      ralphUnlocked = true;
      break;
    case "Sarah":
      sarahUnlocked = true;
      break;
    case "Parker":
      parkerUnlocked = true;
      break;
  }
}

// Card functions
function commonCard() {
  let randomIndex = Math.floor(Math.random() * commonPenguins.length);
  let penguin = commonPenguins[randomIndex];
  return`Images/Penguin_Cards/Commons/${penguin}.svg`;
}

function uncommonCard() {
  let randomIndex = Math.floor(Math.random() * uncommonPenguins.length);
  let penguin = uncommonPenguins[randomIndex];
  return`Images/Penguin_Cards/Uncommons/${penguin}.svg`;
}

function rareCard() {
  let randomIndex = Math.floor(Math.random() * rarePenguins.length);
  let penguin = rarePenguins[randomIndex];
  return`Images/Penguin_Cards/Rares/${penguin}.svg`;
}

// Gallery update function
function galleryUpdate() {
  alex.src = alexUnlocked ? "Images/Penguin_Cards/Commons/Alex.svg" : "Images/Penguin_Cards/Locked_Cards/Common_Locked_Card.svg";
  avery.src = averyUnlocked ? "Images/Penguin_Cards/Commons/Avery.svg" : "Images/Penguin_Cards/Locked_Cards/Common_Locked_Card.svg";
  caleb.src = calebUnlocked ? "Images/Penguin_Cards/Commons/Caleb.svg" : "Images/Penguin_Cards/Locked_Cards/Common_Locked_Card.svg";
  casey.src = caseyUnlocked ? "Images/Penguin_Cards/Commons/Casey.svg" : "Images/Penguin_Cards/Locked_Cards/Common_Locked_Card.svg";
  harper.src = harperUnlocked ? "Images/Penguin_Cards/Commons/Harper.svg" : "Images/Penguin_Cards/Locked_Cards/Common_Locked_Card.svg";
  lucky.src = luckyUnlocked ? "Images/Penguin_Cards/Commons/Lucky.svg" : "Images/Penguin_Cards/Locked_Cards/Common_Locked_Card.svg";
  sammy.src = sammyUnlocked ? "Images/Penguin_Cards/Commons/Sammy.svg" : "Images/Penguin_Cards/Locked_Cards/Common_Locked_Card.svg";
  taylor.src = taylorUnlocked ? "Images/Penguin_Cards/Commons/Taylor.svg" : "Images/Penguin_Cards/Locked_Cards/Common_Locked_Card.svg";
  blaze.src = blazeUnlocked ? "Images/Penguin_Cards/Uncommons/Blaze.svg" : "Images/Penguin_Cards/Locked_Cards/Uncommon_Locked_Card.svg";
  gabe.src = gabeUnlocked ? "Images/Penguin_Cards/Uncommons/Gabe.svg" : "Images/Penguin_Cards/Locked_Cards/Uncommon_Locked_Card.svg";
  leela.src = leelaUnlocked ? "Images/Penguin_Cards/Uncommons/Leela.svg" : "Images/Penguin_Cards/Locked_Cards/Uncommon_Locked_Card.svg";
  pebble.src = pebbleUnlocked ? "Images/Penguin_Cards/Uncommons/Pebble.svg" : "Images/Penguin_Cards/Locked_Cards/Uncommon_Locked_Card.svg";
  riley.src = rileyUnlocked ? "Images/Penguin_Cards/Uncommons/Riley.svg" : "Images/Penguin_Cards/Locked_Cards/Uncommon_Locked_Card.svg";
  thomas.src = thomasUnlocked ? "Images/Penguin_Cards/Uncommons/Thomas.svg" : "Images/Penguin_Cards/Locked_Cards/Uncommon_Locked_Card.svg";
  adric.src = adricUnlocked ? "Images/Penguin_Cards/Rares/Adric.svg" : "Images/Penguin_Cards/Locked_Cards/Rare_Locked_Card.svg";
  ralph.src = ralphUnlocked ? "Images/Penguin_Cards/Rares/Ralph.svg" : "Images/Penguin_Cards/Locked_Cards/Rare_Locked_Card.svg";
  sarah.src = sarahUnlocked ? "Images/Penguin_Cards/Rares/Sarah.svg" : "Images/Penguin_Cards/Locked_Cards/Rare_Locked_Card.svg";
  parker.src = parkerUnlocked ? "Images/Penguin_Cards/Secrets/Parker.svg" : "Images/Penguin_Cards/Locked_Cards/Secret_Locked_Card.svg";
}

// Save game state function
function saveGameState() {
  const gameStatePenguins = {
    snow: snow,
    alexUnlocked: alexUnlocked,
    averyUnlocked: averyUnlocked,
    calebUnlocked: calebUnlocked,
    caseyUnlocked: caseyUnlocked,
    harperUnlocked: harperUnlocked,
    luckyUnlocked: luckyUnlocked,
    sammyUnlocked: sammyUnlocked,
    taylorUnlocked: taylorUnlocked,
    blazeUnlocked: blazeUnlocked,
    gabeUnlocked: gabeUnlocked,
    leelaUnlocked: leelaUnlocked,
    pebbleUnlocked: pebbleUnlocked,
    rileyUnlocked: rileyUnlocked,
    thomasUnlocked: thomasUnlocked,
    adricUnlocked: adricUnlocked,
    ralphUnlocked: ralphUnlocked,
    sarahUnlocked: sarahUnlocked,
    parkerUnlocked: parkerUnlocked
  };
  sessionStorage.setItem('gameStatePenguins', JSON.stringify(gameStatePenguins));
}

// Load game state function
function loadGameState() {
  const gameStatePenguins = JSON.parse(sessionStorage.getItem('gameStatePenguins'));
  const gameState= JSON.parse(sessionStorage.getItem('gameState'));

  if (gameStatePenguins) {
    alexUnlocked = gameStatePenguins.alexUnlocked;
    averyUnlocked = gameStatePenguins.averyUnlocked;
    calebUnlocked = gameStatePenguins.calebUnlocked;
    caseyUnlocked = gameStatePenguins.caseyUnlocked;
    harperUnlocked = gameStatePenguins.harperUnlocked;
    luckyUnlocked = gameStatePenguins.luckyUnlocked;
    sammyUnlocked = gameStatePenguins.sammyUnlocked;
    taylorUnlocked = gameStatePenguins.taylorUnlocked;
    blazeUnlocked = gameStatePenguins.blazeUnlocked;
    gabeUnlocked = gameStatePenguins.gabeUnlocked;
    leelaUnlocked = gameStatePenguins.leelaUnlocked;
    pebbleUnlocked = gameStatePenguins.pebbleUnlocked;
    rileyUnlocked = gameStatePenguins.rileyUnlocked;
    thomasUnlocked = gameStatePenguins.thomasUnlocked;
    adricUnlocked = gameStatePenguins.adricUnlocked;
    ralphUnlocked = gameStatePenguins.ralphUnlocked;
    sarahUnlocked = gameStatePenguins.sarahUnlocked;
    parkerUnlocked = gameStatePenguins.parkerUnlocked;
  }

  if (gameState) {
    snow = gameState.snow;
    shopSnow.textContent = `Your Snow: ${snow}`;
  }
}

// Save snow function
function saveGameStateSnow() {
    const gameState = JSON.parse(sessionStorage.getItem('gameState')) || {};
    gameState.snow = snow;
    sessionStorage.setItem('gameState', JSON.stringify(gameState));
}

// Opening pack functions
function starterPackOpen() {
  if (snow >= 75) {
    snow -= 75;
    starterImageContainer.innerHTML = ''; // Clear previous images
    
    for (let i = 0; i < 2; i++) {
      let penguin;
      let imageUrl;
      
      if (i === 0) {
        penguin = commonCard().split('/').pop().split('.')[0]; // Get the penguin name from the image URL
        imageUrl = `Images/Penguin_Cards/Commons/${penguin}.svg`;
      } else {
        if (Math.random() < 0.5) {
          penguin = commonPenguins[Math.floor(Math.random() * commonPenguins.length)];
          imageUrl = `Images/Penguin_Cards/Commons/${penguin}.svg`;
        } else {
          penguin = uncommonPenguins[Math.floor(Math.random() * uncommonPenguins.length)];
          imageUrl = `Images/Penguin_Cards/Uncommons/${penguin}.svg`;
        }
      }
      starterImageContainer.innerHTML += `<img src="${imageUrl}" alt="Penguin card" class="pack-penguin penguin-img">`;
      
      // Update unlock status based on the penguin
      penguinCheck(penguin);
    }
    
    updateGame();
    starterModal.style.display = "flex";
    setTimeout(function() {
      starterModal.style.display = "none";
    }, 4000);
  }
}

function classicPackOpen() {
  if (snow >= 150) {
    snow -= 150;
    classicImageContainer.innerHTML = ''; // Clear previous images
    
    for (let i = 0; i < 3; i++) {
      let penguin;
      let imageUrl;
      
      if (i === 0) {
        penguin = commonCard().split('/').pop().split('.')[0]; // Get the penguin name from the image URL
        imageUrl = `Images/Penguin_Cards/Commons/${penguin}.svg`;
      } else if (i === 1) {
        penguin = uncommonCard().split('/').pop().split('.')[0]; // Get the penguin name from the image URL
        imageUrl = `Images/Penguin_Cards/Uncommons/${penguin}.svg`;
      } else {
        let randomNum = Math.random();
        if (randomNum < 0.35) {
          penguin = commonPenguins[Math.floor(Math.random() * commonPenguins.length)];
          imageUrl = `Images/Penguin_Cards/Commons/${penguin}.svg`;
        } else if (randomNum < 0.85) {
          penguin = uncommonPenguins[Math.floor(Math.random() * uncommonPenguins.length)];
          imageUrl = `Images/Penguin_Cards/Uncommons/${penguin}.svg`;
        } else {
          penguin = rarePenguins[Math.floor(Math.random() * rarePenguins.length)];
          imageUrl = `Images/Penguin_Cards/Rares/${penguin}.svg`;
        }
      }
      classicImageContainer.innerHTML += `<img src="${imageUrl}" alt="Penguin card" class="pack-penguin penguin-img">`;
      
      // Update unlock status based on the penguin
      penguinCheck(penguin);
    }
    
    updateGame();
    classicModal.style.display = "flex";
    setTimeout(function() {
      classicModal.style.display = "none";
    }, 6000);
  }
}

function elitePackOpen() {
  if (snow >= 250) {
    snow -= 250;
    eliteImageContainer.innerHTML = ''; // Clear previous images
    
    for (let i = 0; i < 5; i++) {
      let penguin;
      let imageUrl;
      
      if (i === 0 || i === 1) {
        penguin = commonCard().split('/').pop().split('.')[0]; // Get the penguin name from the image URL
        imageUrl = `Images/Penguin_Cards/Commons/${penguin}.svg`;
      } else if (i === 2) {
        penguin = uncommonCard().split('/').pop().split('.')[0]; // Get the penguin name from the image URL
        imageUrl = `Images/Penguin_Cards/Uncommons/${penguin}.svg`;
      } else if (i === 3) {
        penguin = rareCard().split('/').pop().split('.')[0]; // Get the penguin name from the image URL
        imageUrl = `Images/Penguin_Cards/Rares/${penguin}.svg`;
      } else {
        let randomNum = Math.random();
        if (randomNum < 0.1) {
          penguin = commonPenguins[Math.floor(Math.random() * commonPenguins.length)];
          imageUrl = `Images/Penguin_Cards/Commons/${penguin}.svg`;
        } else if (randomNum < 0.45) {
          penguin = uncommonPenguins[Math.floor(Math.random() * uncommonPenguins.length)];
          imageUrl = `Images/Penguin_Cards/Uncommons/${penguin}.svg`;
        } else if (randomNum < 0.80) {
          penguin = rarePenguins[Math.floor(Math.random() * rarePenguins.length)];
          imageUrl = `Images/Penguin_Cards/Rares/${penguin}.svg`;
        } else {
          penguin = secretPenguins[Math.floor(Math.random() * secretPenguins.length)];
          imageUrl = `Images/Penguin_Cards/Secrets/${penguin}.svg`;
        }
      }
      eliteImageContainer.innerHTML += `<img src="${imageUrl}" alt="Penguin card" class="pack-penguin penguin-img">`;
      
      // Update unlock status based on the penguin
      penguinCheck(penguin);
    }
    
    updateGame();
    eliteModal.style.display = "flex";
    setTimeout(function() {
      eliteModal.style.display = "none";
    }, 8000);
  }
}

// Event listeners
starterPackEl.addEventListener('click', starterPackOpen);
classicPackEl.addEventListener('click', classicPackOpen);
elitePackEl.addEventListener('click', elitePackOpen);

loadGameState();
galleryUpdate();