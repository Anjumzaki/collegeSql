const e = require("express");

module.exports = {
  addService: (req, res) => {
    let serviceName = req.body.serviceName;
    let serviceDescription = req.body.serviceDescription;
    let serviceAmmount = req.body.serviceAmmount;
    let serInCode = req.body.serInCode
    if (serviceName) {
      if (serviceAmmount) {
        let query =
          "INSERT INTO service(serviceName,serviceDescription,serviceAmmount,serInCode) VALUES('" +
          serviceName +
          "','" +
          serviceDescription +
          "','" +
          serviceAmmount +
          "','" +
          serInCode
          +
          "')";
        db.query(query, (err, result) => {
          if (err) {
            res.status(400).send({
              success: "false",
              message: "Something went wrong",
            });
          } else {
            res.status(201).send({
              success: "true",
              message: "service added succesfully",
              id: result.insertId,
            });
          }
        });
      } else {
        res.status(400).send({
          success: "false",
          message: "serviceAmmount is required",
        });
      }
    } else {
      res.status(400).send({
        success: "false",
        message: "serviceName  is required",
      });
    }
  },
  editService: (req, res) => {
    let serviceName = req.body.serviceName;
    let serviceDescription = req.body.serviceDescription;
    let serviceAmmount = req.body.serviceAmmount;
    if (serviceName) {
      if (serviceAmmount) {
        let query =
          "UPDATE service SET serviceName = " +
          "'" +
          serviceName +
          "'" +
          "," +
          "serviceDescription=" +
          "'" +
          serviceDescription +
          "'" +
          "," +
          "serviceAmmount=" +
          "'" +
          serviceAmmount +
          "'" +
          " WHERE serviceID=" +
          "'" +
          req.params.id +
          "'";
        console.log(query);
        db.query(query, (err, result) => {
          if (err) {
            res.status(400).send({
              success: "false",
              message: err,
            });
          } else {
            res.status(201).send({
              success: "true",
              message: "reference of fav edited succesfully",
              id: result,
            });
          }
        });
      } else {
        res.status(400).send({
          success: "false",
          message: "serviceAmmount is required",
        });
      }
    } else {
      res.status(400).send({
        success: "false",
        message: "serviceName is required",
      });
    }
  },
  getServices: (req, res) => {
    let query = "SELECT * FROM service";
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: err,
        });
      } else {
        res.status(201).send({
          success: "true",
          result: result,
        });
      }
    });
  },
  getService: (req, res) => {
    let query = "SELECT * FROM service WHERE serviceID=" + req.params.id;
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: err,
        });
      } else {
        res.status(201).send({
          success: "true",
          result: result,
        });
      }
    });
  },
  getServicesBySerInCode: (req, res) => {
    let query = "SELECT * FROM service WHERE serInCode=" + req.params.id;
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: err,
        });
      } else {
        res.status(201).send({
          success: "true",
          result: result,
        });
      }
    });
  },
  deleteService: (req, res) => {
    let query = "DELETE FROM service WHERE serviceID=" + req.params.id;
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: err,
        });
      } else {
        res.status(200).send({
          success: "true",
          message: "reference of product deleted succesfully",
          result: result,
        });
      }
    });
  },
};
