const userDpStyles = require("./index.style");

const userDp = (content,textfill) => {
  return `
    <style>${userDpStyles(textfill)}</style>
    <div class="userdp">
    <span class="text">${content != null ? content[0] : 'U'}</span>
    </div>`;
};
module.exports = userDp;
