const faultComponent = () => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="100">
    <foreignObject width="250" height="100">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <h1>Fault in your params</h1>
      </div>
    </foreignObject>
  </svg>`;
};
module.exports = faultComponent;
