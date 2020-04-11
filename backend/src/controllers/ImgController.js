const { con, table } = require('../model/Img')

module.exports = {
  async index(req, res) {
    await con.query(
      "SELECT * FROM " + table,
      (err, result, fields) => {
        if (err) throw err;
        return res.json(result);
      }
    );
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
