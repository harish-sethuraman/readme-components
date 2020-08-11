const LinearProgress = require("../src/linear-progress/index");

module.exports = async (req, res) => {
  const { component, skill, value ,style} = req.query;
  // res.setHeader("Content-Type","text/html");
  res.setHeader("Content-Type", "image/svg+xml");

 res.send(LinearProgress(skill,value,style));
};
