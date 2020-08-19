const logoComponentStyles =(fill) =>
{
    return `
    foreignObject
    {
        height:1;
        width:1;
        overflow:visible;
    }
    foreignObject svg {
        width: 30px;
        height: 30px;
        line-height: 40px;
        border-radius: 50%;
        border: 2px solid #fff;
        text-align: center;
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
        background-color: ${fill ? `#${fill}` : '#8965e0'}
      }
  `
}
module.exports = logoComponentStyles