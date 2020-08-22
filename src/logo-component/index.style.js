const colorFiller  = require('../utils/colorFiller')

const logoComponentStyles = (fill, textfill, animation) => {
  return `
    foreignObject svg {
        width: 30px;
        height: 30px;
        line-height: 40px;
        border-radius: 50%;
        margin-top:2px;
        text-align: center;
        fill: ${textfill ? `#${textfill}` : "white"};
        animation : ${animation ? `${animation} 4s linear infinite` : ""};
      }

      .gradient-btn {
        display: flex;
        height: 57px;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 50px;
        float: left;
        color: #fff;
        box-shadow: 5px 5px 2px -2px #a5a5a5;
        text-transform: capitalize;
        font-size: 20px;
      }
      .text {
        margin-top: 16px;
        margin-left: 10px;
        font-size: 1.1rem;
        white-space:nowrap;
      }
      .svg {
        margin-top: 10px;
      }
      .btn-color {
        background: ${fill ? colorFiller(fill) : "#8965e0"};
        color : ${textfill ? `#${textfill}` : "white"} ;
      }
      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  `;
};
module.exports = logoComponentStyles;
