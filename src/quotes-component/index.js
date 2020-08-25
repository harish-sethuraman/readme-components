const userDp = require("../user-dp");
const quoteComponentStyles = require("./index.style");
const quote = require("./quote.svg");

const quoteComponent = (data) => {
  const { text, author } = data;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="250">
    <foreignObject width="260" height="250">
    <style>${quoteComponentStyles()}</style>
      <div class="container" xmlns="http://www.w3.org/1999/xhtml">
      <div class="quote">${quote()}</div>
      <div class="content">
      ${text}
      </div>
      <div class="author">
      <div>${userDp(author)}</div>
      <div class="authorname"> ${author}</div>
      </div>
      </div>
    </foreignObject>
  </svg>`;
};
module.exports = quoteComponent;
