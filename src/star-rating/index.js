const simpleIcons = require("simple-icons");
const starSVG = require("./star.svg.js");
const starRatingComponentStyles = require("./index.style");

const starRating = async ({ skill, rating }) => {
  let content = "";
  Array.from({ length: 5 }).map((_r, index) => {
    if (index < parseInt(rating)) {
      content += starSVG(true);
    } else content += starSVG();
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="90">
   <style>${starRatingComponentStyles()}</style>
  <foreignObject width="150" height="90">
    <div xmlns="http://www.w3.org/1999/xhtml">
        <div class="flex-container">
            <div class="icon">
                ${
                  simpleIcons.get(`${skill}`) != undefined
                    ? simpleIcons.get(skill).svg
                    : skill
                }
            </div>
           
             ${content}
        </div>
    </div>
  </foreignObject>
  </svg>`;
};

module.exports = starRating;
