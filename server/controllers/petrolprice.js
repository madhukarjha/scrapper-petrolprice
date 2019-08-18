const PetrolPrice = require('../models').PetrolPrice;
module.exports = {
    findAll(req, res) {
      return PetrolPrice
        .findAll({raw: true})
        .then(prices => res.status(201).send(prices))
        .catch(error => res.status(400).send(error));
    },
  };