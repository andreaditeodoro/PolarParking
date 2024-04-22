const occupied = [];

function spot(spot) {
    localStorage.setItem("Spot", spot)
}

function unlog(spot) {
    if (!occupied.includes(spot)) {
      localStorage.setItem("Spot", "Spot is already empty")
    }
    else {
      const index = occupied.indexOf(spot);
      occupied.splice(index, 1)
    }
}