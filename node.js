var canvas;
try {
  canvas = require('canvas');
} catch (e) {
  canvas = null;
}

module.exports = canvas;
