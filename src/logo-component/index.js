const logoComponentStyles = require("./index.style");
const simpleIcons = require("simple-icons");

const logoComponent = (logo, fill,text) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100">
    <style>
    ${logoComponentStyles(fill)}
    </style>
      <foreignObject  width="150" height="100">
      <div class="gradient-btn btn-color" xmlns="http://www.w3.org/1999/xhtml">
      <div class="svg">
${simpleIcons.get(`${logo}`).svg}
</div>
  ${
    text !="false"
      ? `<div class="text">
  <span>${logo}</span>
</div>`
      : ""
  }
</div>
</foreignObject>
</svg>

    `;
};
module.exports = logoComponent;
