const logoComponentStyles = require("./index.style");
const simpleIcons = require("simple-icons");
const faultComponent = require("../fault-component");

const logoComponent = (logo, fill, text) => {
  if (simpleIcons.get(logo) != undefined) {
    return `
    <svg style="height:70px;width: ${
      text == "false" ? "70px" : `${70 + logo.length * 8 + 10}px`
    };" xmlns="http://www.w3.org/2000/svg">
    <style>
    ${logoComponentStyles(fill)}
    </style>
      <foreignObject style="height:70px;width: ${
        text == "false" ? "70px" : `${70 + logo.length * 8 + 10}px`
      };">
      <div class="gradient-btn btn-color" xmlns="http://www.w3.org/1999/xhtml">
      <div class="svg">
${simpleIcons.get(`${logo}`).svg}
</div>
  ${
    text != "false"
      ? `<div class="text">
  <div>${logo}</div>
</div>`
      : ""
  }
</div>
</foreignObject>
</svg>

    `;
  } else {
    return faultComponent();
  }
};
module.exports = logoComponent;
