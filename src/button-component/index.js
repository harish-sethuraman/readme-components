const ButtonStyle = require('./index.style');
const Button = (data = {}) => {
  let {color, size, text, textcolor} = data
  text = text || "Button"
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="200">
        <style>
            ${ButtonStyle(color, size, textcolor)}
        </style>
        <foreignObject width="100" height="100">
            <div xmlns="http://www.w3.org/1999/xhtml">
            <button class="btn">${text}</button>
            </div>
        </foreignObject>
    </svg>
    `
}
module.exports = Button;
