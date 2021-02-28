const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  addUser: async (req, res) => {
    console.log(req.body);
    let userName = req.body.userName;
    let password = req.body.password;
    let name = req.body.name;
    let inCode = req.body.inCode;
    let phone = req.body.phone;
    let gender = req.body.gender;
    let type = req.body.type;
    let avatar = req.body.avatar;
    let isActive = req.body.isActive
    let creationDate = new Date();
    let updatedDate = new Date();
    let email = req.body.email
    if (name) {
      if (email) {
        let myQuery = "SELECT * FROM user where email=" + "'" + email + "'";
        db.query(myQuery, (err, result) => {
          if (err) {
            return res.status(400).send({
              success: "false",
              message: "ASDsda",
            });
          }
          if (result.length > 0) {
            res.status(409).send({
              success: "false",
              message: "Email/Username already exists",
            });
          } else {
            if (password) {
              console.log("ASD");
              if (type) {
                bcrypt.hash(password, 10, function (err, hash) {
                  // console.log("ASD");
                  if (err) {
                    res.status(500).send({
                      success: "false",
                      message: "ASDsda1123",
                    });
                  } else {
                    let query =
                      "INSERT INTO user(userName,password,name,inCode,phone,gender,type,avatar,isActive,creationDate,updatedDate,email) VALUES('" +
                      userName +
                      "','" +
                      hash +
                      "','" +
                      name +
                      "','" +
                      inCode +
                      "','" +
                      phone +
                      "','" +
                      gender +
                      "','" +
                      type +
                      "','" +
                      avatar +
                      "','" +
                      isActive +
                      "','" +
                      creationDate +
                      "','" +
                      updatedDate +
                      "','" +
                      email +
                      "')";
                    console.log(query);
                    db.query(query, (err, result) => {
                      if (err) {
                        return res.status(400).send({
                          success: "false",
                          message: err,
                          error: "Is here",
                        });
                      } else {
                        return res.status(201).send({
                          success: "true",
                          message: "user added succesfully",
                          id: result.insertId,
                        });
                      }
                    });
                  }
                });
              } else {
                res.status(400).send({
                  success: "false",
                  message: "type is required",
                });
              }
            } else {
              res.status(400).send({
                success: "false",
                message: "password is required",
              });
            }
          }
        });
      } else {
        res.status(400).send({
          success: "false",
          message: "email is required",
        });
      }
    } else {
      res.status(400).send({
        success: "false",
        message: "name is required",
      });
    }
  },
  getUsers: (req, res) => {
    let query =
      "SELECT * FROM user";
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: "Something is really bad happens",
        });
      } else {
        res.status(201).send({
          success: "true",
          result: result,
        });
      }
    });
  },
  getUser: (req, res) => {
    let query =
      "SELECT * FROM user WHERE userID=" +
      req.params.id;
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: err,
        });
      } else {
        res.status(201).send({
          success: "true",
          // message: "company added succesfully",
          result: result,
        });
      }
    });
  },
  editUser: (req, res) => {
    console.log(req.body);
    let userName = req.body.userName;
    let password = req.body.password;
    let name = req.body.name;
    let inCode = req.body.inCode;
    let phone = req.body.phone;
    let gender = req.body.gender;
    let type = req.body.type;
    let avatar = req.body.avatar;
    let isActive = req.body.isActive
    let updatedDate = new Date()
    let query =
      "UPDATE user SET userName = " +
      "'" +
      userName +
      "'" +
      "," +
      "password=" +
      "'" +
      password +
      "'" +
      "," +
      "name=" +
      "'" +
      name +
      "'" +
      "," +
      "inCode=" +
      "'" +
      inCode +
      "'" +
      "," +
      "phone=" +
      "'" +
      phone +
      "'" +
      "," +
      "gender=" +
      "'" +
      gender +
      "'" +
      "," +
      "type=" +
      "'" +
      type +
      "'" +
      "," +
      "avatar=" +
      "'" +
      avatar +
      "'" +
      "," +
      "isActive=" +
      "'" +
      isActive +
      "'" +
      "," +
      "weight=" +
      "'" +
      weight +
      "'" +
      "," +
      "dob=" +
      "'" +
      dob +
      "'" +
      "," +
      "gender=" +
      "'" +
      gender +
      "'" +
      "," +
      "avatar=" +
      "'" +
      avatar +
      "'" +
      "," +
      "updatedDate=" +
      "'" +
      updatedDate +
      "'" +
      " WHERE userID=" +
      req.params.id;
    console.log(query);
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: err,
        });
        console.log(err);
      } else {
        res.status(201).send({
          success: "true",
          message: "User edited succesfully",
          id: result,
        });
      }
    });
  },
  checkEmail: (req, res) => {
    let query = "SELECT * FROM user WHERE email=" + "'" + req.params.id + "'";
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: "Something is really bad happens",
          err,
        });
      } else {
        if (result.length > 0) {
        }
        res.status(200).send({
          success: "true",
          result: result,
        });
      }
    });
  },
  forgotPassword: (req, res) => {
    let query = "SELECT * FROM user WHERE email=" + "'" + req.body.email + "'";
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: "Something is really bad happens",
          err,
        });
      } else {
        if (result.length > 0) {
          bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
              res.status(500).send({
                success: "false",
                message: "ASDsda1123",
              });
            } else {
              let query =
                "UPDATE user SET password = " +
                "'" +
                hash +
                "'" +
                " WHERE email=" +
                "'" +
                req.body.email +
                "'";
              db.query(query, (err, result) => {
                if (err) {
                  res.status(400).send({
                    success: "false",
                    message: "Something is really bad happens",
                    err,
                  });
                } else {
                  res.status(200).send({
                    success: "true",
                    result: result,
                  });
                }
              });
            }
          });
        } else {
          res.status(200).send({
            success: "true",
            message: "userName Does not exists",
          });
        }
      }
    });
  },
  checkNumber: (req, res) => {
    let query = "SELECT * FROM user WHERE mobile=" + "'" + req.params.id + "'";
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: "Something is really bad happens",
          err,
        });
      } else {
        res.status(200).send({
          success: "true",
          result: result,
        });
      }
    });
  },
  userLogin: (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let query =
      "SELECT * FROM user WHERE email=" +
      "'" +
      email +
      "'";
    db.query(query, (err, user) => {
      if (err) {
        console.log(err);

        return res.status(400).send({
          success: "false",
          message: err,
        });
      }
      if (user.length > 0) {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).send({
              message: "Auth failed",
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                userName: user[0].userName,
                password: user[0].password,
                name: user[0].name,
                inCode: user[0].inCode,
                phone: user[0].phone,
                type: user[0].type,
                gender: user[0].gender,
                avatar: user[0].avatar,
                isActive: user[0].isActive,
                updatedDate: user[0].updatedDate,
              },
              "hereIsMySpecialToken",
              {
                expiresIn: "720h",
              }
            );
            return res.status(200).send({
              message: "Auth successful",
              token: token,
            });
          } else {
            return res.status(401).send({
              message: "Auth failed",
            });
          }
        });
      } else {
        res.status(404).send({
          success: "false",
          message: "User Does not exists",
          // user: result,
        });
      }
    });
  },
};
