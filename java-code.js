const farley = JSON.parse(localStorage.getItem('farley')) || [];
const coffin = JSON.parse(localStorage.getItem('coffin')) || [];
const admissions = JSON.parse(localStorage.getItem('admissions')) || [];

//log a spot
//updates a list of occoupied spots and our spot item
function spot(spot, lot) {
  if (lot === 'flot') {
    if (farley.includes(spot)) {
      localStorage.setItem("Spot", "Spot is occupied")
    }
    else {
      farley.push(spot)
      localStorage.setItem("Spot", "You have successfully logged spot: " + spot.toString())
    }
    localStorage.setItem('farley', JSON.stringify(farley))
  }
  if (lot === 'clot') {
    if (coffin.includes(spot)) {
      localStorage.setItem("Spot", "Spot is occupied")
    }
    else {
      coffin.push(spot)
      localStorage.setItem("Spot", "You have successfully logged spot: " + spot.toString())
    }
    localStorage.setItem('coffin', JSON.stringify(coffin))
  }
  if (lot === 'alot') {
    if (admissions.includes(spot)) {
      localStorage.setItem("Spot", "Spot is occupied")
    }
    else {
      admissions.push(spot)
      localStorage.setItem("Spot", "You have successfully logged spot: " + spot.toString())
    }
    localStorage.setItem('admissions', JSON.stringify(admissions))
  }
}

//unlog function
//takes in the spot number and which lot we are in and updates the spot item and list of occupied spots
function unlog(spot, lot) {
  if (lot === 'flot') {
    if (!farley.includes(spot)) {
      localStorage.setItem("Spot", "Spot is already empty")
    }
    else {
      localStorage.setItem("Spot", "You have successfully unlogged spot: " + spot.toString())
      const index = farley.indexOf(spot);
      farley.splice(index, 1)
      localStorage.setItem('farley', JSON.stringify(farley))
    }
  }

  if (lot === 'clot') {
    if (!coffin.includes(spot)) {
      localStorage.setItem("Spot", "Spot is already empty")
    }
    else {
      localStorage.setItem("Spot", "You have successfully unlogged spot: " + spot.toString())
      const index = coffin.indexOf(spot);
      coffin.splice(index, 1)
      localStorage.setItem('coffin', JSON.stringify(coffin))
    }
  }

  if (lot === 'alot') {
    if (!admissions.includes(spot)) {
      localStorage.setItem("Spot", "Spot is already empty")
    }
    else {
      localStorage.setItem("Spot", "You have successfully unlogged spot: " + spot.toString())
      const index = admissions.indexOf(spot);
      admissions.splice(index, 1)
      localStorage.setItem('admissions', JSON.stringify(admissions))
    }
}
}

//set the setting
function setSetting(option) {
  document.getElementById("profile").onchange = function() {
    let newSelected = document.getElementById("profile").value;
    localStorage.setItem('person', newSelected);
    console.log("Changing local storage to: " + newSelected + "!");
}

if (localStorage.getItem('profile')) {
    let menu = document.getElementById("profile");
    menu.value = window.localStorage.getItem('profile');
}

}

function getNumSpotsCLot() {
  var occupiedCSpots = coffin.length;
  var totalCSpots = 6 - occupiedCSpots;
  document.getElementById('cSpotsOpen').innerText = 'Spots Open: ' + totalCSpots;
}

function getNumSpotsFLot() {
  var occupiedFSpots = farley.length;
  var totalFSpots = 6 - occupiedFSpots;
  document.getElementById('fSpotsOpen').innerText = 'Spots Open: ' + totalFSpots;
}

function getNumSpotsALot() {
  var occupiedASpots = admissions.length;
  var totalASpots = 6 - occupiedASpots;
  document.getElementById('aSpotsOpen').innerText = 'Spots Open: ' + totalASpots;
}
