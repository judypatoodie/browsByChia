const aboutQueries = require("../db/queries.about.js");
const markdown = require( "markdown" ).markdown;

module.exports = {
  index(req, res, next){
    aboutQueries.getAboutSection((err, about) => {
            if(err){
              res.redirect(500, "static/index");
            } else {
              res.render("about/index", {about});
            }
          })
  },
  new(req, res, next){
        res.render("about/new");
      },
  create(req, res, next){
       let newAbout = {
         title: req.body.title,
         description: req.body.description,
         sectionType: req.body.sectionType
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
        if(err || about == null){
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
          console.log(err)
          res.redirect(404, `/about/${req.params.id}`);
        } else {
          res.redirect(`/`);
        }
      });
    }

}
