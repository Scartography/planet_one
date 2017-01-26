var planet = planetaryjs.planet();

planet.loadPlugin(planetaryjs.plugins.oceans({
  fill: 'cyan'
}));

planet.loadPlugin(planetaryjs.plugins.drag());

planet.loadPlugin(function(planet) {
  planet.onDraw(function () {
    planet.withSavedContext(function (context) {
      var arc = {type: "LineString", coordinates: [[40, 30], [40, -50]]};
      context.beginPath();
      planet.path.context(context)(arc);
      context.stroke();
      context.closePath();
    });
  });
});

planet.projection.scale(250).translate([250, 250]);
var canvas = document.getElementById('globe');
planet.draw(canvas);