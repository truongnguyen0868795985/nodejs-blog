
class NewsController {
  index(req, res) {
    res.send('hi');
  }
}

module.exports = new NewsController;