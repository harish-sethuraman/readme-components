const linearProgress = require("./linear-progress");
const faultComponent = require("./fault-component");
const experienceComponent = require("./experience-component");
const fetchData = require("./utils/dataFetcher");

const createComponent = async (component, params = {}) => {
  const { skill, value, design, fill, duration, company, role } = params;
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
    const val = await fetchData(
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=${company}`
    );
    console.log(duration);
    if (val.status == 200) {
      const data = val.data[0];
      data["role"] = role;
      if (duration.includes("m") || duration.includes("M")) {
        let value = duration.replace(/[A-Za-z]/, "");
        data["duration"] = value + " months";
      } else {
        let value = duration.replace(/[A-Za-z]/, "");
        data["duration"] = value + " years";
      }

      return experienceComponent(data);
    } else {
      return faultComponent();
    }
  } else {
    return faultComponent();
  }
};

module.exports = createComponent;
