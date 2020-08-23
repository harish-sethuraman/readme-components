const stackoverflowStyles = require("./index.style");
const imgFetcher = require("../utils/imgFetcher");
const contributorsComponent = async (data = {}) => {
return `<div class="container" xmlns="http://www.w3.org/1999/xhtml">
<div class="header">
      <div class="repo">
        <img
          class="image"
          src="https://static.thenounproject.com/png/368566-200.png"
          alt="Profile image"
          alm="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        ></img>
        <div class="repo-details">
          <span class="name">
            <a  href="">
                readme-components Contributors
            </a>
          </span>
        </div>
      </div>
      <div class="github-icon">
              <img
          class="image"
          src="https://image.flaticon.com/icons/png/512/25/25231.png"
          alt="Profile image"
        ></img>
      </div>
    </div>
      <div class="contributor">
      <div class="profile">
        <img
          class="image"
          src="https://avatars3.githubusercontent.com/u/30730124?v=4"
          alt="Profile image"
        ></img>
        <div class="userdetails ">
          <span class="name">
            <a target="_blank" href="">
                harish-sethuraman
            </a>
          </span>
          <span class="location">india, tamil nadu</span>
        </div>
      </div>
      <div class="report">
      <ul class="legend">
            <li style="background-color: #ebedf0"></li>
              <li style="background-color: #9be9a8"></li>
              <li style="background-color: #40c463"></li>
              <li style="background-color: #30a14e"></li>
              <li style="background-color: #216e39"></li>
          </ul>
        <span class="commits">20</span>
  
      </div>
    </div>
 <div class="divider"></div>
 <div class="contributor">
      <div class="profile">
        <img
          class="image"
          src="https://avatars3.githubusercontent.com/u/30730124?v=4"
          alt="Profile image"
        ></img>
        <div class="userdetails ">
          <span class="name">
            <a target="_blank" href="">
                amaresh-s-m
            </a>
          </span>
          <span class="location">india, tamil nadu</span>
        </div>
      </div>
      <div class="report">
           <div class="report">
      <ul class="legend">
            <li style="background-color: #ebedf0"></li>
              <li style="background-color: #9be9a8"></li>
              <li style="background-color: #40c463"></li>
              <li style="background-color: #30a14e"></li>
              <li style="background-color: #216e39"></li>
          </ul>
        <span class="commits">20</span>
  
      </div>
      </div>
    </div>
      </div>`;
}
module.exports=contributorsComponent;