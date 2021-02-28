module.exports = {
  addStudent: (req, res) => {
    console.log(req.body);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let dateoOfBirth = req.body.dateoOfBirth;
    let placeOfbirth = req.body.placeOfbirth;
    let contact = req.body.contact;
    let bloodGroup = req.body.bloodGroup;
    let studentCnic = req.body.studentCnic;
    let phoneNo = req.body.phoneNo;
    let gender = req.body.gender;
    let mobileNo1 = req.body.mobileNo1;
    let email = req.body.email;
    let fax = req.body.fax;
    let fee = req.body.fee;
    let fatherCnic = req.body.fatherCnic;
    let fatherName = req.body.fatherName;
    let motherName = req.body.motherName;
    let address = req.body.address;
    let description = req.body.description;
    let classID = req.body.classID;
    let avatar = req.body.avatar
    let rollNo = req.body.rollNo

    if (firstName) {
      if (lastName) {
        if (dateoOfBirth) {
          if (placeOfbirth) {
            if (contact) {
              if (bloodGroup) {
                let query =
                  "INSERT INTO student(firstName,lastName,dateoOfBirth,placeOfbirth,contact,bloodGroup,studentCnic,phoneNo,gender,mobileNo1,email,fax,fee,fatherCnic,fatherName,motherName,address,description,classID,rollNo,avatar,active) VALUES('" +
                  firstName +
                  "','" +
                  lastName +
                  "','" +
                  dateoOfBirth +
                  "','" +
                  placeOfbirth +
                  "','" +
                  contact +
                  "','" +
                  bloodGroup +
                  "','" +
                  studentCnic +
                  "','" +
                  phoneNo +
                  "','" +
                  gender +
                  "','" +
                  mobileNo1 +
                  "','" +
                  email +
                  "','" +
                  fax +
                  "','" +
                  fee +
                  "','" +
                  fatherCnic +
                  "','" +
                  fatherName +
                  "','" +
                  motherName +
                  "','" +
                  address +
                  "','" +
                  description +
                  "','" +
                  classID +
                  "','" +
                  rollNo +
                  "','" +
                  avatar +
                  "','" +
                  "1" +
                  "')";
                db.query(query, (err, result) => {
                  if (err) {
                    res.status(400).send({
                      success: "false",
                      message: err,
                    });
                  } else {
                    res.status(201).send({
                      success: "true",
                      message: "place added succesfully",
                      id: result.insertId,
                    });
                  }
                });
              } else {
                res.status(400).send({
                  success: "false",
                  message: "categoryID is required",
                });
              }
            } else {
              res.status(400).send({
                success: "false",
                message: "locationID is required",
              });
            }
          } else {
            res.status(400).send({
              success: "false",
              message: "noOfImage is required",
            });
          }
        } else {
          res.status(400).send({
            success: "false",
            message: "placeDescription is required",
          });
        }
      } else {
        res.status(400).send({
          success: "false",
          message: "imgUrl is required",
        });
      }
    } else {
      res.status(400).send({
        success: "false",
        message: "placeName is required",
      });
    }
  },
  editStudent: (req, res) => {
    console.log(req.body);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let dateoOfBirth = req.body.dateoOfBirth;
    let placeOfbirth = req.body.placeOfbirth;
    let contact = req.body.contact;
    let bloodGroup = req.body.bloodGroup;
    let studentCnic = req.body.studentCnic;
    let phoneNo = req.body.phoneNo;
    let gender = req.body.gender;
    let mobileNo1 = req.body.mobileNo1;
    let email = req.body.email;
    let fax = req.body.fax;
    let fee = req.body.fee;
    let fatherCnic = req.body.fatherCnic;
    let fatherName = req.body.fatherName;
    let motherName = req.body.motherName;
    let address = req.body.address;
    let description = req.body.description;
    let classID = req.body.classID;
    let avatar = req.body.avatar
    if (firstName) {
      if (lastName) {
        if (dateoOfBirth) {
          if (placeOfbirth) {
            if (contact) {
              if (bloodGroup) {
                // UPDATE Customers
                // SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
                // WHERE CustomerID = 1;
                let query =
                  "UPDATE student SET firstName = " +
                  "'" +
                  firstName +
                  "'" +
                  "," +
                  "lastName=" +
                  "'" +
                  lastName +
                  "'" +
                  "," +
                  "dateoOfBirth=" +
                  "'" +
                  dateoOfBirth +
                  "'" +
                  "," +
                  "placeOfbirth=" +
                  "'" +
                  placeOfbirth +
                  "'" +
                  "," +
                  "contact=" +
                  "'" +
                  contact +
                  "'" +
                  "," +
                  "bloodGroup=" +
                  "'" +
                  bloodGroup +
                  "'" +
                  "," +
                  "studentCnic=" +
                  "'" +
                  studentCnic +
                  "'" +
                  "," +
                  "phoneNo=" +
                  "'" +
                  phoneNo +
                  "'" +
                  "," +
                  "gender=" +
                  "'" +
                  gender +
                  "'" +
                  "," +
                  "mobileNo1=" +
                  "'" +
                  mobileNo1 +
                  "'" +
                  "," +
                  "email=" +
                  "'" +
                  email +
                  "'" +
                  "," +
                  "fax=" +
                  "'" +
                  fax +
                  "'" +
                  "," +
                  "fee=" +
                  "'" +
                  fee +
                  "'" +
                  "," +
                  "fatherCnic=" +
                  "'" +
                  fatherCnic +
                  "'" +
                  "," +
                  "fatherName=" +
                  "'" +
                  fatherName +
                  "'" +
                  "," +
                  "motherName=" +
                  "'" +
                  motherName +
                  "'" +
                  "," +
                  "address=" +
                  "'" +
                  address +
                  "'" +
                  "," +
                  "description=" +
                  "'" +
                  description +
                  "'" +
                  "," +
                  "classID=" +
                  "'" +
                  classID +
                  "'" +
                  "," +
                  "avatar=" +
                  "'" +
                  avatar +
                  "'" +
                  " WHERE stID=" +
                  req.params.id;
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
                      message: "company edited succesfully",
                      id: result,
                    });
                  }
                });
              } else {
                res.status(400).send({
                  success: "false",
                  message: "categoryID is required",
                });
              }
            } else {
              res.status(400).send({
                success: "false",
                message: "locationID is required",
              });
            }
          } else {
            res.status(400).send({
              success: "false",
              message: "noOfImage is required",
            });
          }
        } else {
          res.status(400).send({
            success: "false",
            message: "placeDescription is required",
          });
        }
      } else {
        res.status(400).send({
          success: "false",
          message: "imgUrl is required",
        });
      }
    } else {
      res.status(400).send({
        success: "false",
        message: "placeName is required",
      });
    }
  },
  getStudents: (req, res) => {
    let query =
      "SELECT * FROM student LEFT JOIN classes on student.classID=classes.classID";
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: "Something is really bad happens",
        });
      } else {
        res.status(201).send({
          success: "true",
          message: "company added succesfully",
          result: result,
        });
      }
    });
  },
  getStudent: (req, res) => {
    let query1 =
      "SELECT * FROM `student` WHERE stID=" +
      req.params.id;
    db.query(query1, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: err,
        });
      } else {
        res.status(201).send({
          success: "true",
          message: "company added succesfully",
          result: result,
        });
      }
    });
  },

  getStudentyByclassID: (req, res) => {
    let query1 =
      "SELECT * FROM `student` LEFT JOIN classes on student.classID=classes.classID  WHERE student.classID=" +
      req.params.id;
    db.query(query1, (err, result) => {
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
  deleteStudent: (req, res) => {
    let query =
      "Delete FROM `student` WHERE student=" + req.params.id;
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: "Something is really bad happens",
        });
      } else {
        res.status(201).send({
          success: "true",
          message: "place deleted succesfully",
          result: result,
        });
      }
    });
  },
};
