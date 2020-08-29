const colorFiller = require('../utils/colorFiller')

const UserDpStyles = (textfill) => {
  return `.userdp
    {
        height:30px;
        width:30px;
        border-radius:50%;
        background:pink;
        text-align: center;
    }
    .text
    {
        color: ${textfill!=undefined ? colorFiller(textfill) : 'violet'};
        padding-top: 5px;
        display: block;
        font-weight: 800;
    }
    `;
};
module.exports = UserDpStyles;
