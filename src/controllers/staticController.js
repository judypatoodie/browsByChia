module.exports = {
  index(req, res, next){
res.render("static/index", {title: "Welcome to Brows By Chia!"});
  }
}
