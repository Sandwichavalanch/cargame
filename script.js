const WIDTH = 400;
const HEIGHT = 870;
let draw = SVG().addTo('#game').size(WIDTH,HEIGHT);
let background = draw.rect(WIDTH,HEIGHT).fill('#202124')