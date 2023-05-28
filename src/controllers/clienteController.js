const cliente = require ("../models/cliente.js");

const getAllCliente = (req, res) => {
    cliente.find((err, cliente) => {
      res.status(200).json(cliente);
    })
  };

  const createCliente=  (req, res) => {
    let cliente = new cliente(req.body);
  
    empreendedora.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar cliente`})
      } else {
        res.status(201).send(cliente.toJSON())
      }
    })
  };

  module.exports = {
    getAllCliente,
    createCliente
  }