const experienceComponentStyles = require("./index.style");
const durationSVG = require("./duration.svg");
const roleSVG = require("./role.svg");
const locationSVG= require("./location.svg");
const experienceComponent = (data = {}) => {
  const { logo, name, duration, role,location,fill } = data;
  // console.log(data);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <style>
  ${experienceComponentStyles(fill)}
  </style>
<foreignObject width="400" height="200">
  <div xmlns="http://www.w3.org/1999/xhtml">
  <div class="flex-container">
  <div class="logo-container">
    <img src="${logo}" />
    <div>${name}</div>
  </div>
  <div class="details">
    ${role != undefined ?
    `<div class="position">
      <div class="title">
        ${roleSVG(fill)}
      </div>
      <div style="margin:auto 0">-</div>
      <div class="value">${role}</div>
    </div>` : ''
    }

    ${duration != undefined ?
      `<div class="experience">
        <div class="title">
        ${durationSVG(fill)}
        </div>
        <div style="margin:auto 0">-</div>
        <div class="value">
              ${duration}
        </div>
      </div> `: ''
      }
      ${location != undefined ?
        `<div class="location">
          <div class="title">
          ${locationSVG(fill)}
          </div>
          <div style="margin:auto 0">-</div>
          <div class="value">
                 ${location}
          </div>
        </div> `: ''
        }
  </div>
</div>
  </div>
</foreignObject>
</svg>`;
};

module.exports = experienceComponent;
