const userDpStyles = require("./index.style");

const userDp = (content) => {
  return `
    <style>${userDpStyles()}</style>
    <div class="userdp">
    <span class="text">${content[0]}</span>
    </div>`;
};
module.exports = userDp;
