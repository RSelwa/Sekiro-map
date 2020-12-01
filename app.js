const dilapidedTemple = document.getElementById("aTemple");
const hirataEstate = document.getElementById("hEst");
const lines = document.getElementById("lines");
const l = document.getElementById("line1");
function x(e) {
  var n = window.getComputedStyle(e).left;
  return n.replace("px", "");
}
function y(e) {
  var n = window.getComputedStyle(e).top.replace("px", "");
  return n.replace("px", "");
  // return(window.getComputedStyle(e).top);
}

function line(from, to) {
  var newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  newLine.setAttribute("class", "line");
  newLine.setAttribute("x1", x(from));
  newLine.setAttribute("y1", y(from));
  newLine.setAttribute("x2", x(to));
  newLine.setAttribute("y2", y(to));
  newLine.setAttribute("stroke", "black");
  $("svg").append(newLine);
}
function linee() {
  var newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  newLine.setAttribute("class", "line");
  newLine.setAttribute("x1", "0");
  newLine.setAttribute("y1", "0");
  newLine.setAttribute("x2", "200");
  newLine.setAttribute("y2", "200");
  newLine.setAttribute("stroke", "black");
  $("svg").append(newLine);
}
linee();
line(dilapidedTemple, hirataEstate);
