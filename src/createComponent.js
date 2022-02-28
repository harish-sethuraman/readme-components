const linearProgress = require("./linear-progress");
const faultComponent = require("./fault-component");
const experienceComponent = require("./experience-component");
const fetchData = require("./utils/dataFetcher");
const logoComponent = require("./logo-component");
const stackoverflowComponent = require("./stackoverflow-component");
const contributorsComponent = require("./contributors-component");
const quoteComponent = require("./quotes-component");
const userDp = require("./user-dp");
const starRating = require("./star-rating");
const componentNotFound = require("./component-not-found");
const Links = require("./utils/links");
const Button = require("./button-component");

const createComponent = async (component, params = {}) => {
  const {
    skill,
    value,
    design,
    fill,
    duration,
    company,
    role,
    logo,
    text,
    location,
    stackoverflowid,
    theme,
    textfill,
    animation,
    repoowner,
    reponame,
    svgfill,
    desc,
    scale,
    rating,
  } = params;
  switch (component) {
    case "linearprogress":
      if (value && value <= 100 && value >= 0 && skill) {
        if (
          [
            "aqua",
            "copper",
            "candy",
            "neon",
            "zigzag",
            "diamond",
            "shine",
            "hearts",
            "sparkle",
          ].includes(design)
        ) {
          return linearProgress({ skill, value, design, fill });
        } else {
          let design = undefined;
          return linearProgress({ skill, value, design, fill });
        }
      } else {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="250" height="100">
              <foreignObject width="250" height="100">
                <div xmlns="http://www.w3.org/1999/xhtml">
                  <h1>skill or value not found</h1>
                </div>
              </foreignObject>
            </svg>`;
      }
    case "experience":
      if (company != undefined) {
        const val = await fetchData(Links({ company }).api.company);
        if (val.length > 0) {
          const data = val[0];
          data["role"] = role;
          data["location"] = location;
          data["fill"] = fill;
          data["textfill"] = textfill;
          if (duration != undefined) {
            if (duration.includes("m") || duration.includes("M")) {
              let value = duration.replace(/[A-Za-z]/, "");
              data["duration"] = value + " months";
            } else {
              let value = duration.replace(/[A-Za-z]/, "");
              data["duration"] = value + " years";
            }
          }

          return experienceComponent(data);
        } else {
          return faultComponent();
        }
      } else {
        return faultComponent();
      }
    case "logo":
      if (logo != undefined) {
        return logoComponent({
          logo,
          fill,
          text,
          textfill,
          animation,
          svgfill,
          desc,
          scale,
        });
      } else {
        return faultComponent();
      }
    case "stackoverflow":
      if (stackoverflowid != undefined) {
        const val = await fetchData(
          Links({ stackoverflowid }).api.stackoverflow
        );
        if (val.error_id == "400") {
          return faultComponent();
        } else {
          return stackoverflowComponent({
            val,
            theme,
            fill,
            textfill,
          });
        }
      } else {
        return faultComponent();
      }
    case "contributors":
      if (reponame != undefined && repoowner != undefined) {
        const val = await fetchData(Links({ reponame, repoowner }).api.github);
        if (val.message == "Not Found") {
          return faultComponent();
        }
        return contributorsComponent({ reponame, repoowner, val });
      } else {
        return faultComponent();
      }
    case "quote":
      let min = 0,
        max = 1643;
      const quotes = await fetchData(Links().api.quotes);
      return quoteComponent({
        ...quotes[Math.floor(Math.random() * (max - min + 1)) + min],
        fill,
        textfill,
      });
    case "text":
      return userDp({ text, textfill, fill });
    case "button":
      return Button({ fill, scale, text, textfill });
    case "star-rating":
      return starRating({
        skill,
        rating: rating && rating <= 5 ? rating : 0,
      });
    default:
      return componentNotFound();
  }
};

module.exports = createComponent;
