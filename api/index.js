const createComponent = require("../src/createComponent");
const componentNotFound = require("../src/component-not-found");

module.exports = async (req, res) => {
  const { component, skill, value, design,fill } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  // const params = ;
  if (component && req.query) {
    res.send(createComponent(component,{
      skill,
      value,
      design,
      fill,
    }));
  } else {
    res.send(componentNotFound());
  }
};
