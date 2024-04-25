const farley = JSON.parse(localStorage.getItem('farley')) || [];
const coffin = JSON.parse(localStorage.getItem('coffin')) || [];
const admissions = JSON.parse(localStorage.getItem('admissions')) || [];

function spot(spot, lot) {
  if (lot === 'flot') {
    if (farley.includes(spot)) {
      localStorage.setItem("Spot", "Spot is occupied")
    }
    else {
      farley.push(spot)
      localStorage.setItem("Spot", spot)
    }
    localStorage.setItem('farley', JSON.stringify(farley))
  }
  if (lot === 'clot') {
    if (coffin.includes(spot)) {
      localStorage.setItem("Spot", "Spot is occupied")
    }
    else {
      coffin.push(spot)
      localStorage.setItem("Spot", spot)
    }
    localStorage.setItem('coffin', JSON.stringify(coffin))
  }
  if (lot === 'alot') {
    if (admissions.includes(spot)) {
      localStorage.setItem("Spot", "Spot is occupied")
    }
    else {
      admissions.push(spot)
      localStorage.setItem("Spot", spot)
    }
    localStorage.setItem('admissions', JSON.stringify(admissions))
  }
}

function unlog(spot, lot) {
  if (lot === 'flot') {
    if (!farley.includes(spot)) {
      localStorage.setItem("Spot", "Spot is already empty")
    }
    else {
      localStorage.setItem("Spot", spot)
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
      localStorage.setItem("Spot", spot)
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
      localStorage.setItem("Spot", spot)
      const index = admissions.indexOf(spot);
      admissions.splice(index, 1)
      localStorage.setItem('admissions', JSON.stringify(admissions))
    }
}
}

function setSetting(option) {
  localStorage.setItem("option", option)
}