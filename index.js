// index.js
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();

cron.schedule("* * 21 * *", function () {
  console.log("---------------------");
  console.log("Running Cron Job");
  fs.unlink("./error.log", (err) => {
    if (err) throw err;
    console.log("Error file succesfully deleted");
  });
});

app.listen(3128);
