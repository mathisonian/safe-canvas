
module.exports = function (w, h) {
  canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  return canvas;
}
