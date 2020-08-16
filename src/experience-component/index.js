const experienceComponentStyles = require("./index.style");
const experienceComponent = (data = {}) => {
  const { logo, name, duration, role } = data;
  // console.log(data);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="450" height="250">
  <style>
  ${experienceComponentStyles()}
  </style>
<foreignObject width="450" height="250">
  <div xmlns="http://www.w3.org/1999/xhtml">
  <div class="flex-container">
  <div class="logo-container">
    <img src="${logo}" />
  </div>
  <div class="details">
    <div class="company-name">
      <div class="title">
        <h4>Company:</h4>
      </div>
      <div class="value">${name}
      </div>
    </div>
    <div class="experience">
      <div class="title">
        <h4>Experience: </h4>
      </div>
      <div class="value">
        <p> ${duration}</p>
      </div>
    </div>
    <div class="position">
      <div class="title">
        <h4>Position:</h4>
      </div>
      <div class="value">${role}</div>
    </div>
  </div>
</div>
  </div>
</foreignObject>
</svg>`;
};

module.exports = experienceComponent;
