const colorFiller = require("../utils/colorFiller");

const quotesComponentStyles = (fill, textfill) => {
  return `
    .container
    {
        width:200px;
        background: ${fill ? colorFiller(fill) : "#11cdef"};
        display:flex;
        flex-direction:column;
        border-radius:5px;
        box-shadow: 0 10px 16px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
    .quote
    {
        height:30px;
        width:30px;
        background: white;
        border-radius:50%;
        margin-top:20px;
        margin-left:20px;
    }
    .quote svg
    {
        height: 5px;
        width: 5px;
        padding-left: 7px;
        fill : #11cdef;
    }
    .content
    {
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        font-family :Open Sans,sans-serif;
        color: ${textfill != undefined ? colorFiller(textfill) : "white"};
    }
    .author
    {
        padding-left: 21px;
        display: flex;
        padding-bottom: 10px;
        padding-top: 10px;
        padding-right:10px;
    }
    .authorname
    {
        font-family :Open Sans,sans-serif;
        color:${textfill != undefined ? colorFiller(textfill) : "white"};
        padding-top: 5px;
        padding-left: 5px;
    }
    `;
};
module.exports = quotesComponentStyles;
