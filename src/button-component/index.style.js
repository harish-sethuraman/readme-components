const colorFiller = require('../utils/colorFiller')
const ButtonStyles = (data = {}) => {
    let {fill, scale, textfill}  = data;
    fill = fill || "#007bff";
    textfill = textfill || "#ffffff";
    scale = scale || "default"
    return `
        .btn{
          ${ButtonSizeHelper(scale)};
          color: ${colorFiller(textfill)};
          background: ${colorFiller(fill)};
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
