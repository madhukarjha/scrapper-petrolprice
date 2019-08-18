const PetrolPrice = require('../models').PetrolPrice;
module.exports = {
    findAll(req, res) {
      return PetrolPrice
        .find()
        .then(company => res.status(201).send(PetrolPrice))
        .catch(error => res.status(400).send(error));
    },
  };