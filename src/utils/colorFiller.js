const colorFiller = (fill) => {
  if (fill.length == 6) {
    return `#${fill}`;
  } else if (fill.includes("gradient")) {
    return fill;
  } else {
    return fill;
  }
};
module.exports = colorFiller;
