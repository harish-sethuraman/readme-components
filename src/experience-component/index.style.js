const experienceComponentStyles = (data) =>
{const { name, duration, role, location, fill, textfill } = data;
    return `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .flex-container {
        margin:8px;
        padding:9px;
        display: flex;
        background-color: #efefef;
        border-radius: 6px;
        width: auto;
        box-shadow: 0 10px 15px rgba(50, 50, 93, 0.1), 0 2px 15px rgba(0, 0, 0, 0.07);
        background-color:${fill ? `#${fill}` : "#8965e0"};
        color: ${textfill ? `#${textfill}` : 'white'};
        display:flex;
        justify-content:${duration == undefined && role == undefined && location ==undefined ? "center":"start"};
      }
      .logo-container {
        padding: 10px;
        display:flex;
        font-size:${name.length >15 ?"11px":"15px"};
        font-family:'Open Sans', sans-serif;
        font-weight:bold;
        flex-direction:column;
        max-width:120px;
        min-width:120px;
      }
      .logo-container *{
        margin:6px auto;
      }
      .logo-container,
      .image-background {
        margin:${duration == undefined && role == undefined && location ==undefined ? "0px":"auto 10px auto 0px"};
           }      
      .img-background,
      img {
        height: 40px;
        width: 40px;
      }
      .company-name{
        text-align:center;
      }
      .details {
        padding:2px 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      .experience {
        display: flex;
        margin:4px 0px;
      }
      .position {
        display: flex;
        margin:4px 0px;
      }
      .location{
        display:flex;
        margin:4px 0px;
      }
      .company-name {
        display: flex;
      }
      .title{
        width:40px;
      }
      .value {
        padding-left: 5px;
        margin:auto 3px;
        font-family:'Open Sans', sans-serif;
        font-size:14.5px;
      }
      .value::first-letter{
        text-transform:uppercase;        
      }
      `
}

module.exports = experienceComponentStyles