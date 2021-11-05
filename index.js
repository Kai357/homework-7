const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "what's this project called",
      name: "title",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "a name is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "how does one acceses this project",
      name: "acceses",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "a message is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "how does one use this project",
      name: "instructions",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "a message is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "credits?",
      name: "credits",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "a message is needed to continue";
        }
      },
    },
    {
      type: "list",
      message: "which of these licenses did you use?",
      name: "licenses",
      choices: [
        "Public domain",
        "Permissive",
        "LGPL",
        "Copyleft",
        "Proprietary",
        "N/A",
      ],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "a message is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "whats your github username",
      name: "Github",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "a message is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "E-mail?",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "a message is needed to continue";
        }
      },
    },
  ])
  .then(
    ({ title, acceses, instructions, credits, licenses, github, email }) => {
      const template = `# ${title}
    * [acceses](#acceses)
    * [instructions](#instructions)
    * [credits](#credits)
    * [licenses](#licenses)
    * [github](#github)
    * [email](#email)
    #acceses
    ${acceses}
    ##instructions
    ${instructions}
    ##credits
    ${credits}
    ##licenses
    ${licenses}
    ##github
    ${github}
    ##email
    ${email}`;
      createNewFile(title, template);
    }
  );
function createNewFile(fileName, data) {
  fs.writeFile(
    `./${fileName.toLowerCase().split(" ").join("")}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("The readme has been created");
    }
  );
}
