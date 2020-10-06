const colorFiller = require('../utils/colorFiller')
const ButtonStyles = (color, size, textcolor) => {
    color = color || "#007bff";
    size = size || "default";
    textcolor = textcolor || "#ffffff";
    return `
        .btn{
          ${ButtonSizeHelper(size)}\
          color: ${colorFiller(textcolor)};
          background-color: ${colorFiller(color)};
          display: inline-block;
          font-weight: 400;
          text-align: center;
          vertical-align: middle;
          border: 1px solid transparent;     
          }
          
    `
}

const ButtonSizeHelper = (size) => {
    return`
    ${(size === "default") ?
        "font-size: 1rem;" +
        "line-height: 1.5;" +
        "border-radius: .25rem;" +
        "padding: .375rem .75rem;" 
        : (size === "small" ?
                "font-size: .875rem;" +
                "line-height: 1.5;" +
                "border-radius: .2rem;" +
                "padding: .25rem .5rem;"
                :
                "font-size: 1.25rem;" +
                "line-height: 1.5;" +
                "border-radius: .3rem;" +
                "padding: .5rem 1rem;"
        )}
    `
}
module.exports = ButtonStyles;
