const ButtonStyle = require('./index.style');
const Button = (data = {}) => {
  let {scale, text} = data
  text = text || "Button"
  scale = scale || "default";
  const svgSize = svgSizeHelper(scale, text)
  return `
    <svg xmlns="http://www.w3.org/2000/svg" ${svgSize}>
        <style>
            ${ButtonStyle(data)}
        </style>
        <foreignObject ${svgSize}>
            <button xmlns="http://www.w3.org/1999/xhtml" class="btn">${text}</button>
        </foreignObject>
    </svg>
    `
}

const svgSizeHelper = (scale, text) => {
  if(scale == "small"){
    return `width="${(Math.ceil(32 + (text.length * 7.2)) + 2)}" height="32"`
  }else if(scale == "large"){
    return `width="${(Math.ceil(32 + (text.length * 10.25)) + 2)}" height="48"`
  }else {
    return `width="${(Math.ceil(24 + (text.length * 8.5)) + 2)}" height="39"`
  }
}
module.exports = Button;
