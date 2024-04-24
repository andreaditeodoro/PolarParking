const occupied = JSON.parse(localStorage.getItem('occupied')) || [];

function spot(spot) {
    if (occupied.includes(spot)) {
        localStorage.setItem("Spot", "Spot is occupied")
    }
    else {
        occupied.push(spot)
        if (spot%6 === 0) {
          localStorage.setItem("Spot", 6)
        }
        else {
          localStorage.setItem("Spot", spot%6)
        }
    }
    localStorage.setItem('occupied', JSON.stringify(occupied));
}

function unlog(spot) {
    if (!occupied.includes(spot)) {
      localStorage.setItem("Spot", "Spot is already empty")
    }
    else {
      const index = occupied.indexOf(spot);
      occupied.splice(index, 1)
      localStorage.setItem('occupied', JSON.stringify(occupied))
    }
}

function setSetting(option) {
  localStorage.setItem("option", option)
}