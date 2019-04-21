const aboutQueries = require("../db/queries.about.js");

module.exports = {
  index(req, res, next){
    aboutQueries.getAboutSection((err, about) => {
            if(err){
              res.redirect(500, "static/index");
            } else {
              res.render("static/index", {about});
            }
          })
  }
}
