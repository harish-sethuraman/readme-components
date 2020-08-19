const stackoverflowStyles = require("./index.style");
const imgFetcher = require("../utils/imgFetcher");
const stackoverflowComponent = async (data = {}) => {
  const { val, theme, fill, textfill } = data;
  const {
    profile_image,
    website_url,
    display_name,
    location,
    answer_count,
    question_count,
    badge_counts,
    view_count,
    reputation,
    link,
  } = val.items[0];

  return `
      <svg xmlns="http://www.w3.org/2000/svg" width="470" height="200">
    <style>${stackoverflowStyles(fill, textfill)}</style>
      <foreignObject  width="490" height="220">
      <div class="container ${
        theme == "dark" ? " dark-card" : " "
      }"  xmlns="http://www.w3.org/1999/xhtml">
      <div class="section1">
      <div class="profile">
        <img
          class="image"
          src="${await imgFetcher(profile_image)}"
          alt="Profile image"
        ></img>
        <div class="userdetails ">
          <span class="name">
            <a target="_blank" href="${website_url && link}">
              ${display_name}
            </a>
          </span>
          <span>${location ? location : ""}</span>
        </div>
      </div>
      <div class="report">
        <span class="answers">${answer_count}</span>
        <span class="questions">${question_count}</span>
        <span class="reached">${view_count}</span>
      </div>
    </div>
    <div class="section2">
      <div class="reputation">
        <span class="text ${
          theme == "dark" ? " dark-text" : " "
        }">REPUTATION</span>
        <span class="value ${
          theme == "dark" ? " dark-text" : " "
        }">${reputation}</span>
      </div>
      <div class="badges">
        <span class="text ${theme == "dark" ? " dark-text" : " "}">BADGES</span>
        <div class="badgeicon">
          <span class="gold">${badge_counts.gold}</span>
          <span class="silver">${badge_counts.silver}</span>
          <span class="bronze">${badge_counts.bronze}</span>
        </div>
      </div>
    </div>
      </div>
      </foreignObject>
</svg>`;
};
module.exports = stackoverflowComponent;
