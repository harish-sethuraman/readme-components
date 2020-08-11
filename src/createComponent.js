const linearProgress = require("./linear-progress");
const faultComponent = require("./fault-component");
const createComponent = (component, params = {}) => {
  const { skill, value, design, fill } = params;
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
  } else {
    return faultComponent();
  }
};

module.exports = createComponent;
