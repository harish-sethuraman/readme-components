const simpleIcons = require("simple-icons");
const starFilledSVG = require("./star-filled.svg.js");
const starRegularSVG = require("./star-regular.svg.js");
const starRatingComponentStyles = require("./index.style");

const starRating = async (data = {}) => {
  const { skill, rating } = data;
  let content = ``;
  Array.from({ length: 5 }).map((_r, index) => {
    if (index < parseInt(rating)) {
      content += starFilledSVG();
    } else content += starRegularSVG();
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="90">
   <style>${starRatingComponentStyles()}</style>
  <foreignObject width="150" height="90">
    <div xmlns="http://www.w3.org/1999/xhtml">
        <div class="flex-container">
            ${
              simpleIcons.get(`${skill}`) != undefined
                ? simpleIcons.get(skill).svg
                : skill
            }
             ${content}
        </div>
    </div>
  </foreignObject>
  </svg>`;
};

module.exports = starRating;
