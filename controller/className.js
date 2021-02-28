module.exports = {
  addClassName: (req, res) => {
    let className = req.body.className;
    let noOfSemester = req.body.noOfSemester;
    let fee = req.body.fee;
    let dated = req.body.dated;
    if (className) {
      let query =
        "INSERT INTO classes(className,noOfSemester,fee,creationDate) VALUES('" +
        className +
        "','" +
        noOfSemester +
        "','" +
        fee +
        "','" +
        dated +
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
            message: "class added succesfully",
            id: result.insertId,
          });
        }
      });
    } else {
      res.status(400).send({
        success: "false",
        message: "ClassName is required",
      });
    }
  },
  editClassName: (req, res) => {
    let className = req.body.className;
    let noOfSemester = req.body.noOfSemester;
    let fee = req.body.fee;
    if (className) {
      if (noOfSemester) {
        // UPDATE Customers
        // SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
        // WHERE CustomerID = 1;
        let query =
          "UPDATE classes SET className = " +
          "'" +
          className +
          "'" +
          "," +
          "noOfSemester=" +
          "'" +
          noOfSemester +
          "'" +
          "," +
          "fee=" +
          "'" +
          fee +
          "'" +
          " WHERE classID=" +
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
              message: "category edited succesfully",
              id: result,
            });
          }
        });
      } else {
        res.status(400).send({
          success: "false",
          message: "categoryDescription is required",
        });
      }
    } else {
      res.status(400).send({
        success: "false",
        message: "categoryName is required",
      });
    }
  },
  getClassNames: (req, res) => {
    let query = "SELECT * FROM classes";
    db.query(query, (err, result) => {
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
  getClassName: (req, res) => {
    let query = "SELECT * FROM classes WHERE classID=" + req.params.id;
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
  deleteClassName: (req, res) => {
    let query = "DELETE  FROM classes WHERE classID=" + req.params.id;
    db.query(query, (err, result) => {
      if (err) {
        res.status(400).send({
          success: "false",
          message: err,
        });
      } else {
        res.status(201).send({
          success: "true",
          message: "Category deleted succesfully",
          result: result,
        });
      }
    });
  },
};
