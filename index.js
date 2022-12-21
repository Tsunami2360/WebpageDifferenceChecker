const fetch = require("node-fetch");
const fs = require("fs");
const robotjs = require("robotjs");

let i = 0;
function preCheck() {
  fetch("https://www.your-tickets.be/events/BoitetheFuck")
  .then(res => res.text())
  .then(data => {
    fs.writeFile("./data", data, (err) => {
      if(err) console.log(err);
    });
  });
}
preCheck();

function check() {
  setInterval(() => {
    fetch("https://www.your-tickets.be/events/BoitetheFuck")
    .then(res => res.text())
    .then(data => {
      if(data === fs.readFileSync("./data", {encoding: "utf8"})) {
        console.log(`${i}. ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} same`);
        i++;
        fs.writeFile("./data", data, (err) => {
          if(err) console.log(err);
        });
      } else {
        console.log("DIFFERENT");
        robotjs.moveMouse(793, 843);
        robotjs.mouseClick();
        robotjs.moveMouse(412, 770);
        robotjs.typeString(":rotating_light: WAVE 2 STAAT ONLINE!!! :rotating_light: https://www.your-tickets.be/events/BoitetheFuck");
        robotjs.keyTap("enter");
      }
    });
  }, 15000);
}
setTimeout(() => check(), 15000);
