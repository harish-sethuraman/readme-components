const componentNotFoundStyles = require("./index.style")

const componentNotFound = () => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="250">
  <foreignObject width="200" height="250">
  <style>
  ${componentNotFoundStyles()}
  </style>
    <div xmlns="http://www.w3.org/1999/xhtml">
    <div id="container">
    <h3>Component not found</h3>
    <div id="spooky">
        <div id="body">
            <div id="eyes"></div>
            <div id="mouth"></div>
            <div id="feet">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    <div id="shadow"></div>
</div>
    </div>
  </foreignObject>
</svg>
    `;
};
module.exports = componentNotFound;
