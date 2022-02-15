function encenderBombilla() {
  if (document.getElementById("bombilla").checked) {
    document.getElementById("on").style.display = "inline";
    document.getElementById("off").style.display = "none";
  } else {
    document.getElementById("off").style.display = "inline";
    document.getElementById("on").style.display = "none";
  }
}
