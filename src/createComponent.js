const linearProgress = require("./linear-progress");
const faultComponent = require("./fault-component");
const experienceComponent = require("./experience-component");
const fetchData = require("./utils/dataFetcher");
const logoComponent = require("./logo-component");
const stackoverflowComponent = require("./stackoverflow-component");

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
  } = params;
  if (component == "linearprogress") {
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
  } else if (component == "experience") {
    if (company != undefined) {
      const val = await fetchData(
        `https://autocomplete.clearbit.com/v1/companies/suggest?query=${company}`
      );
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
  } else if (component == "logo") {
    if (logo != undefined) {
      return logoComponent(logo, fill, text);
    } else {
      return faultComponent();
    }
  } else if (component == "stackoverflow") {
    if (stackoverflowid != undefined) {
      const val = await fetchData(
        `https://api.stackexchange.com/2.2/users/${stackoverflowid}?order=desc&sort=reputation&site=stackoverflow&filter=!b6Aub2or8vkePb`
      );
      if(val.error_id=="400")
      {
      return faultComponent();
      }
      else
      {
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
  } else {
    return faultComponent();
  }
};

module.exports = createComponent;
