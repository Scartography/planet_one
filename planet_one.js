(function() {
  var globe = planetaryjs.planet();
  // Load our custom `autorotate` plugin; see below.
globe.loadPlugin(autorotate(10));
// You can remove this statement if `world-110m.json`
// is in the same path as the HTML page:
globe.loadPlugin(planetaryjs.plugins.earth({
	topojson: { file: 'world-110m.json' }
	}));
// Make the planet fit well in its canvas
globe.loadPlugin(planetaryjs.plugins.drag());

globe.loadPlugin(planetaryjs.plugins.zoom({
    scaleExtent: [100, 300]
  }));
globe.loadPlugin(planetaryjs.plugins.drag({
    // Dragging the globe should pause the
    // automatic rotation until we release the mouse.
    onDragStart: function() {
      this.plugins.autorotate.pause();
    },
    onDragEnd: function() {
      this.plugins.autorotate.resume();
    }
  }));

globe.projection.scale(250).translate([250, 250]);
var canvas = document.getElementById('rotatingGlobe');
  // Special code to handle high-density displays (e.g. retina, some phones)
  // In the future, Planetary.js will handle this by itself (or via a plugin).
  if (window.devicePixelRatio == 2) {
    canvas.width = 800;
    canvas.height = 800;
    context = canvas.getContext('2d');
    context.scale(2, 2);
  }
  // Draw that globe!
globe.draw(canvas);

