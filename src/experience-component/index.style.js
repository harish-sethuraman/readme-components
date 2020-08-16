const experienceComponentStyles = () =>
{
    return `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .flex-container {
        margin-left: 20px;
        margin-top: 20px;
        display: flex;
        background-color: white;
        border-radius: 15px;
        width: 400px;
        height: 200px;
        box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
      }
      .logo-container {
        padding-left: 25px;
        width: 35%;
        flex-grow: 1;
      }
      .logo-container,
      .image-background {
        margin-top: auto;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: auto;
      }
      
      .img-background,
      img {
        height: 90px;
        width: 90px;
      }
      .details {
        width: 65%;
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      .company-name {
        display: flex;
      }
      .experience {
        display: flex;
      }
      .position {
        display: flex;
      }
      .value {
        padding-left: 5px;
      }
      `
}

module.exports = experienceComponentStyles