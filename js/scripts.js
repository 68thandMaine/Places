function Place(location, landmark, timeOfYear, notes) {
  this.location = location,
  this.landmark = landmark,
  this.timeOfYear= timeOfYear,
  this.notes = notes
}
var puertorico = new Place("Puertorico", "Bars, and Strip", "never", "what a place, I've never been. I hear its nice this time of year.");
var portlandia = new Place("Portlandia", "Breweries, waterfalls, entertainment, bicycles", "2018", "Be sure to pronunce the name of the state correctly. There is not a prounounced E in Oregon");
var washingtonDC = new Place("District of Columbia", "monuments, poloticians, Chads, and Becky", "2018", "It gets hot and the traffic sucks.");
var mars = new Place("Mars", "Dust, rocks", "never", "Potential evidence of water. Also has at least three cute robots.");

$(document).ready(function() {
  $("#Puerto-Rico").click(function(event) {
    $("#puerto-rico-" + "landmark").text(puertorico.landmark);
    $("#puerto-rico-time-of-year").text(puertorico.timeOfYear);
    $("#puerto-rico-notes").text(puertorico.notes);

    event.preventDefault();


  });
  $("#Portlandia").click(function(event) {
    $("#portlandia-landmark").text(portlandia.landmark);
    $("#portlandia-time-of-year").text(portlandia.timeOfYear);
    $("#portlandia-notes").text(portlandia.notes);
    event.preventDefault();
  });
  $("#WashingtonDC").click(function(event) {
    $("#dc-landmark").text(washingtonDC.landmark);
    $("#dc-time-of-year").text(washingtonDC.timeOfYear);
    $("#dc-notes").text(washingtonDC.notes);
    event.preventDefault();
  });
  $("#Mars").click(function(event) {
    $("#mars-landmark").text(mars.landmark);
    $("#mars-time-of-year").text(mars.timeOfYear);
    $("#mars-notes").text(mars.notes);
    event.preventDefault();
  });
});
