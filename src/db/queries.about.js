const AboutSection = require("./models").AboutSection;

module.exports = {


  getAboutSection(callback){
    return AboutSection.all()

    .then((about) => {
      callback(null, about);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getAbout(id, callback){
      return AboutSection.findById(id)
      .then((about) => {
        callback(null, about);
      })
      .catch((err) => {
        callback(err);
      })
    },

  addAbout(newAbout, callback){
      return AboutSection.create({
        title: newAbout.title,
        description: newAbout.description,
        sectionType: newAbout.sectionType
      })
      .then((about) => {
        callback(null, about);
      })
      .catch((err) => {
        callback(err);
      })
    },

    updateAbout(id, updatedAbout, callback){
      return AboutSection.findById(id)
      .then((about) => {
        if(!about){
          return callback("About Section not found");
        }

        about.update(updatedAbout, {
          fields: Object.keys(updatedAbout)
        })
        .then(() => {
          callback(null, about);
        })
        .catch((err) => {
          callback(err);
        });
      });
    }
}
