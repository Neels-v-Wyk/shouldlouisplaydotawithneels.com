wheel = document.getElementById("wheel")
wheel.addEventListener("click", () => { spin() })

function spin () {
  document.getElementById("yes").classList.add("clicking");
  rigged_degrees = get_rigged_degrees();
  document.documentElement.style.setProperty('--rotation', rigged_degrees + "deg");

}


function get_rigged_degrees () {
  current_deg = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--rotation'));
  new_deg = Math.floor(720 + Math.random() * 1800) + current_deg
  if ((new_deg % 360) < 90 || (new_deg % 360) > 270) {
    new_deg += 180
  }
  return new_deg + 180
}