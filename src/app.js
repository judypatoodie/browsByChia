const express = require("express");
const app = express();
const publicDir = require('path').join(__dirname,'/public');
const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

app.use(express.static('/src/public'));


appConfig.init(app, express);
routeConfig.init(app);



module.exports = app;
