const fetch = require("node-fetch");
const fs = require("fs");
const robotjs = require("robotjs");

let i = 0;
setInterval(() => {
  fetch("YOUR_WEBPAGE_URL")
  .then(res => res.text())
  .then(data => {
    fs.writeFile("./data", data, (err) => {
      if(err) {
        console.log(err);
      } else {
        if(data === fs.readFileSync("./data", {encoding: "utf8"})) {
          console.log(`${i}. ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} same`);
          i++;
        } else {
          //DO SOMETHING
          /*console.log("DIFFERENT");
          robotjs.moveMouse(793, 843);
          robotjs.mouseClick();
          robotjs.moveMouse(412, 770);
          robotjs.typeString(":rotating_light: WAVE 2 STAAT ONLINE!!! :rotating_light: https://www.your-tickets.be/events/BoitetheFuck");
          robotjs.keyTap("enter");*/
        }
      }
    });
  });
}, 15000);
