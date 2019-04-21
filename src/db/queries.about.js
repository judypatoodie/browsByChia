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
  }
}
