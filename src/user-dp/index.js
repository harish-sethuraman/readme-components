const userDpStyles = require("./index.style");

const userDp = (data = {}) => {
  const { text, textfill, fill } = data;
  if (text.length == 1) {
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
  } else {
    let word = "";
    [...text].map((obj) => {
      if(obj!=" ")
      {
      word =
        word +
        `<div class="userdp ${
          obj != null ? obj.toLowerCase() : "u"
        }"><span class="text">${obj != null ? obj : "U"}</span></div>`;
      }
      else{
        word=word+`<div style="width:30px;"><span> </span></div>`;
      }

    });
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${
      30 * text.length
    }" height="30">
    <foreignObject width="${30 * text.length}" height="30">
    <style>${userDpStyles(textfill, fill)}</style>
    <div style="display :flex;"  xmlns="http://www.w3.org/1999/xhtml">
    ${word}
    </div>
    </foreignObject>
    </svg>`;
  }
};

module.exports = userDp;
