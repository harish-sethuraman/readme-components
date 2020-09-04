const colorFiller = require('../utils/colorFiller')

const UserDpStyles = (textfill,fill) => {
  return `.userdp
    {
        height:30px;
        width:30px;
        border-radius:50%;
        text-align: center;
        ${fill!=undefined ? `background : ${colorFiller(fill)} !important` : '' }
    }
    .text
    {
        color: ${textfill!=undefined ? colorFiller(textfill) : 'white'};
        padding-top: 5px;
        display: block;
        font-weight: 800;
    }
    .a
    {
        background: #1abc9b;
    }
    .b
    {
        background: #14a084;
    }
    .c
    {
        background: #f1c40f;
    }
    .d
    {
        background: #f39c12;
    }
    .e
    {
        background: #2fcc70;
    }
    .f
    {
        background: #24af60;
    }
    .g
    {
        background: #24af60;
    }
    .h
    {
        background: #d35403;
    }
    .i
    {
        background: #3598db;
    }
    .j
    {
        background: #2a7fb9;
    }
    .k
    {
        background: #e74b3b;
    }
    .l
    {
        background: #bf3a2b;
    }
    .m
    {
        background: #9b58b6;
    }
    .n
    {
        background: #8e44ad;
    }
    .o
    {
        background: #bdc3c7;
    }
    .p
    {
        background: #34495d;
    }
    .q
    {
        background: #2c3f4f;
    }
    .r
    {
        background: #94a5a6;
    }
    .s
    {
        background: #7e8c8d;
    }
    .t
    {
        background: #eb87bf;
    }
    .u
    {
        background: #d76fac;
    }
    .v
    {
        background: #f69684;
    }
    .w
    {
        background: #9aa37e;
    }
    .x
    {
        background: #b49255;
    }
    .y
    {
        background: #b49255;
    }
    .z
    {
        background: #a94135;
    }

    `;
};
module.exports = UserDpStyles;
