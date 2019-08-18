const priceController = require('../controllers').petrolprices;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/findAll', priceController.findAll); // get all records
};