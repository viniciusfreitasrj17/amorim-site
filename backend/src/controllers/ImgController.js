/*const Img = require('../model/Img')*/

module.exports = {
  async index(req, res) {
    /* Need add get connection with database mysql and Model */
    return res.json(m);
  },

  show(req, res) {
    let m = 'show';
    return res.json(m);
  },

  store(req, res) {
    let m = 'store';
    return res.json(m);
  },

  update(req, res) {
    let m = 'update';
    return res.json(m);
  },

  destroy(req, res) {
    let m = 'destroy';
    return res.json(m);
  }
}
