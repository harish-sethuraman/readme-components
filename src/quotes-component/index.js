const userDp = require("../user-dp");
const quoteComponentStyles = require("./index.style");
const quote = require("./quote.svg");

const quoteComponent = (data,fill,textfill) => {
  const { text, author } = data;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="214" height="${150 +( text.split(" ").length/2.5 *15)}">
    <foreignObject width="260" height="250">
    <style>${quoteComponentStyles(fill,textfill)}</style>
      <div class="container" xmlns="http://www.w3.org/1999/xhtml">
      <div class="quote">${quote()}</div>
      <div class="content">
      ${text}
      </div>
      <div class="author">
      <div>${author != null ? userDp(author,textfill): userDp("A") }</div>
      <div class="authorname"> ${author != null ? author : "Anonymous"}</div>
      </div>
      </div>
    </foreignObject>
  </svg>`;
};
module.exports = quoteComponent;
