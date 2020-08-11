const linearProgressStyles = require("./index.style");
const linearProgress = (skill, value, design, fill) => {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="100">
<style>
${linearProgressStyles(fill)}
</style>
  <foreignObject width="250" height="100">
  <div xmlns="http://www.w3.org/1999/xhtml">
  <div class="ProgressTitle">${skill}</div>
  <div
    class="progress ${design ? fill : "plain"}"
    data-width="0%"
  >
    <div class="ProgressText">
      ${value}
      %
    </div>
    <div  class="ProgressBars" style="width:${value}%;" >
      <div  class="ProgressText">
      ${value}
        %
      </div>
    </div>
  </div>
  </div>
  </foreignObject>
</svg>
    `;
};

module.exports = linearProgress;
