const quotesComponentStyles = () => {
  return `
    .container
    {
        margin:1rem;
        width:200px;
        background: #11cdef;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
    .quote
    {
        height:30px;
        width:30px;
        background: white;
        border-radius:50%;
    }
    .quote svg
    {
        height: 3px;
        width: 3px;
        padding-left: 10px;
        fill : #11cdef;
    }
    .content
    {
        padding:20px;
    }
    .author
    {
        padding:10px;
        display:flex;
    }
    .authorname
    {
        padding-top: 5px;
        padding-left: 5px;
    }
    `;
};
module.exports = quotesComponentStyles;
