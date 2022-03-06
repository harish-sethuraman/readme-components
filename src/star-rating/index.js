const simpleIcons = require("simple-icons");
const starSVG = require("./star.svg.js");
const starRatingComponentStyles = require("./index.style");

const starRating = async ({ skill, text }) => {
  let content = "";
  Array(5).fill(1).forEach((value, index) => {
    content +=  starSVG(index < parseInt(text)  ? '#FFD700' : 'none');
  })

  return `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="32">
   <style>${starRatingComponentStyles()}</style>
  <foreignObject width="150" height="32">
    <div xmlns="http://www.w3.org/1999/xhtml">
        <div class="flex-container">
            <div class="icon">
                ${
                  simpleIcons.get(skill) != undefined
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
