const stackoverflowStyles = require("./index.style");
const imgFetcher = require('../utils/imgFetcher')
const stackoverflowComponent = async (res) => {
  const user = res.items[0];
 
  return `
      <svg xmlns="http://www.w3.org/2000/svg" width="490" height="230">
    <style>${stackoverflowStyles()}</style>
      <foreignObject  width="490" height="220">
      <div class="container"  xmlns="http://www.w3.org/1999/xhtml">
      <div class="section1">
      <div class="profile">
        <img
          class="image"
          src="${await imgFetcher(user.profile_image)}"
          alt="Profile image"
        ></img>
        <div class="userdetails">
          <span class="name">
            <a target="_blank" href="${user.website_url && user.link}">
              ${user.display_name}
            </a>
          </span>
          <span>${user.location}</span>
        </div>
      </div>
      <div class="report">
        <span class="answers">${user.badge_counts.gold}</span>
        <span class="questions">${user.badge_counts.silver}</span>
        <span class="reached">${user.badge_counts.bronze}</span>
      </div>
    </div>
    <div class="section2">
      <div class="reputation">
        <span class="text">REPUTATION</span>
        <span class="value">${user.reputation}</span>
      </div>
      <div class="badges">
        <span class="text">BADGES</span>
        <div class="badgeicon">
          <span class="gold">${user.badge_counts.gold}</span>
          <span class="silver">${user.badge_counts.silver}</span>
          <span class="bronze">${user.badge_counts.bronze}</span>
        </div>
      </div>
    </div>
      </div>
      </foreignObject>
</svg>`;
};
module.exports = stackoverflowComponent;
