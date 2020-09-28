const userDpStyles = require("./index.style");

const userDp = (data = {}) => {
  console.log(data);
  const { text, textfill, fill } = data;
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
    <foreignObject width="30" height="30">
    <style>${userDpStyles(textfill, fill)}</style>
    <div xmlns="http://www.w3.org/1999/xhtml" class="userdp ${
      text != null ? text[0].toLowerCase() : "u"
    }">
    <span class="text">${text != null ? text[0] : "U"}</span>
    </div>
    </foreignObject>
    </svg>`;
};
module.exports = userDp;
