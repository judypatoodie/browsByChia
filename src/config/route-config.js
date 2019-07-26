module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const aboutRoutes = require("../routes/about");
    const userRoutes = require("../routes/users");


   
    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(aboutRoutes);
  }
}
