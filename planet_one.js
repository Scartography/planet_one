var planet = planetaryjs.planet();


planet.loadPlugin(planetaryjs.plugins.earth({
    topojson: { file: '/world-110m.json' }
  }));
  // Scale the planet's radius to half the canvas' size
  // and move it to the center of the canvas.
  planet.projection
    .scale(canvas.width / 2)
    .translate([canvas.width / 2, canvas.height / 2]);
  planet.draw(canvas);