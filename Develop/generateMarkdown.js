// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
      return "";
    } else if (!license) {
      return "";
    } else {
      return "![LICENSE IMAGE HERE]";
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "None") {
      return "";
    } else if (license) {
      return "";
    } else {
      return "- [License](#license)";
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === "none") {
      return "";
    } else if (!license) {
      return "";
    } else {
      return "##License";
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    let license = data.license;
    return `# ${data.title}
    <br />
    ##Description <br />
    ${data.description}<br />
    <br />
  ##Purpose >br />
  ${data.need}<br />
  <br />
  ##Installation <br />
  ${data.install}<br />
  <br />
  ##Usage <br />
  ${data.usage}<br />
  <br />
  ##Authors <br />
  ${data.authors}<br />
  <br />
  ##Licensure <br />
  ${data.licensure}<br />
  <br />
  ##Features <br />
  ${data.features}<br />
  <br />
  ##How to Contribute <br />
  ${data.contribute}<br />
  <br />
  ##Testing <br />
  ${data.tests}<br />
  <br />
  `;
  }
  
  module.exports = generateMarkdown;