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
  },
  new(req, res, next){
        res.render("about/new");
      },
  create(req, res, next){
       let newAbout = {
         title: req.body.title,
         description: req.body.description
       };
       aboutQueries.addAbout(newAbout, (err, about) => {
         if(err){
           res.redirect(500, "/");
         } else {
           res.redirect(303, `/`);
         }
       });
     },
  show(req, res, next){

      aboutQueries.getAbout(req.params.id, (err, about) => {
        if(err || toaboutpic == null){
          res.redirect(404, "/");
        } else {
          res.render("about/show", {about});
        }
      });
    },
  edit(req, res, next){
      aboutQueries.getAbout(req.params.id, (err, about) => {
        if(err || about == null){
          res.redirect(404, "/");
        } else {
          res.render("about/edit", {about});
        }
      });
    },
  update(req, res, next){

      aboutQueries.updateAbout(req.params.id, req.body, (err, about) => {

        if(err || about == null){
          res.redirect(404, `/about/${req.params.id}/edit`);
        } else {
          res.redirect(`/about/${about.id}`);
        }
      });
    }

}
