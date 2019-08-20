const PetrolPrice = require('../models').PetrolPrice;
module.exports = {
  findAll(req, res) {
    return PetrolPrice
      .findAll({ raw: true })
      .then(prices => res.status(201).send(prices))
      .catch(error => res.status(400).send(error));
  },

  findBycity(req, res) {
    return PetrolPrice.findAll({ where: { city: req.params.city } }).then((city) => {
      res.status(200).send(city);
    }).catch(error => res.status(400).send(error));
  }
};
