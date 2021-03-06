var Canvas = function (w, h) {
  canvas = document.createElement('canvas');
  if (w && h) {
    canvas.width = w;
    canvas.height = h;
  } else if (w) {
    canvas.width = w;
    canvas.height = w;
  }
  return canvas;
}

Canvas.prototype.Image = function () {
  return (new Image).apply(null, arguments);
}


module.exports = Canvas;
