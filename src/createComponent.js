const linearProgress = require("./linear-progress");
const faultComponent = require("./fault-component");
const experienceComponent = require("./experience-component");
const fetchData = require("./utils/dataFetcher");
const logoComponent = require("./logo-component");
const stackoverflowComponent = require("./stackoverflow-component");
const contributorsComponent = require("./contributors-component");
const quoteComponent = require("./quotes-component");
const userDp = require("./user-dp");
const componentNotFound = require("./component-not-found");
const Links = require("./utils/links");

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
          return linearProgress(skill, value, design, fill);
        } else {
          let design = undefined;
          return linearProgress(skill, value, design, fill);
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
      break;
    case "experience":
      if (company != undefined) {
        const val = await fetchData(Links({ company }).company);
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
      break;
    case "logo":
      if (logo != undefined) {
        return logoComponent(
          logo,
          fill,
          text,
          textfill,
          animation,
          svgfill,
          desc
        );
      } else {
        return faultComponent();
      }
      break;
    case "stackoverflow":
      if (stackoverflowid != undefined) {
        const val = await fetchData(
          Links({ stackoverflowid }).stackoverflowapi
        );
        if (val.error_id == "400") {
          return faultComponent();
        } else {
          let data = {
            val,
            theme,
            fill,
            textfill,
          };
          return stackoverflowComponent(data);
        }
      } else {
        return faultComponent();
      }
      break;
    case "contributors":
      if (reponame != undefined && repoowner != undefined) {
        const val = await fetchData(Links({ reponame, repoowner }).githubapi);
        if (val.message == "Not Found") {
          return faultComponent();
        }
        let data = { reponame, repoowner, val };
        return contributorsComponent(data);
      } else {
        return faultComponent();
      }
      break;
    case "quote":
      let min = 0,
        max = 1643;
      const quotes = await fetchData(Links().quotesapi);
      return quoteComponent(
        quotes[Math.floor(Math.random() * (max - min + 1)) + min],
        fill,
        textfill
      );
      break;
    case "text":
      return userDp(text, textfill, fill);
      break;
    default:
      return componentNotFound();
      break;
  }
};

module.exports = createComponent;
