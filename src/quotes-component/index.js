const userDp = require("../user-dp");
const quoteComponentStyles = require("./index.style");
const quote = require("./quote.svg");

const quoteComponent = (data = {}) => {
  const { text, author, textfill, fill } = data;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="214" height="${
    170 + (text.split(" ").length / 2.5) * 14
  }">
    <foreignObject width="260" height="${
      170 + (text.split(" ").length / 2.5) * 14
    }">
    <style>${quoteComponentStyles(fill, textfill)}</style>
      <div class="container" xmlns="http://www.w3.org/1999/xhtml">
      <div class="quote">${quote()}</div>
      <div class="content">
      ${text}
      </div>
      <div class="author">
      <div>${
        author != null
          ? userDp({ text: author[0], textfill, fill })
          : userDp({ text: "A" })
      }</div>
      <div class="authorname"> ${author != null ? author : "Anonymous"}</div>
      </div>
      </div>
    </foreignObject>
  </svg>`;
};
module.exports = quoteComponent;
