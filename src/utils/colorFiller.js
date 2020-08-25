const colorFiller = (fill) => {
  if (fill.search(";") != -1) {
    fill = fill.substr(0, fill.search(";"));
  }
  if (fill.length == 6) {
    return `#${fill}`;
  } else if (fill.includes("gradient")) {
    return fill;
  } else {
    return fill;
  }
};
module.exports = colorFiller;
