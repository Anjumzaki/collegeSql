const express = require("express");
const body_parser = require("body-parser");
const file_upload = require("express-fileupload");
const cookieParser = require("cookie-parser");
var nodemailer = require("nodemailer");
var ejs = require("ejs");
const creds = require("./config/config");
const _ = require("underscore");
const client = require("twilio")(creds.SID, creds.TOKEN);
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();
require("./db_conn.js");
app.use(cookieParser());
app.set("port", process.env.port || port);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(file_upload());
const checkAuth = require("./controller/checkAuth");

const {
  addUser,
  getUsers,
  getUser,
  deleteUser,
  editUser,
  userLogin,
  checkEmail,
  checkNumber,
  forgotPassword,
  getUsersByInCode
} = require("./controller/users.js");

const {
  addStudent,
  getStudents,
  getStudent,
  editStudent,
  deleteStudent,
  getStudentyByclassID,
  getStudentyByStInCodeID
} = require("./controller/student.js");

const {
  addClassName,
  getClassName,
  editClassName,
  deleteClassName,
  getClassNames,
} = require("./controller/className.js");

const {
  addSubCategory,
  getSubCategory,
} = require("./controller/subCategory.js");

const {
  addService,
  editService,
  getService,
  deleteService,
  getServices,
  getServicesBySerInCode
} = require("./controller/service.js");
const {
  addFriend_req,
  getUserFriendRequests,
  deleteFreindRequest,
  addFriend,
  getUserFriends
} = require("./controller/requests.js");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.get("/v1/getUserFriendRequests/:id", checkAuth, getUserFriendRequests);
app.post("/v1/addFriend_req", checkAuth, addFriend_req);
app.delete("/v1/deleteFreindRequest/:id", checkAuth, deleteFreindRequest);
app.post("/v1/addFriend", checkAuth, addFriend);
app.get("/v1/getUserFriends/:id", checkAuth, getUserFriends);


app.get("/v1/service/:id", checkAuth, getService);
app.get("/v1/services", checkAuth, getServices);
app.post("/v1/service", checkAuth, addService);
app.put("/v1/service/:id", checkAuth, editService);
app.delete("/v1/service/:id", checkAuth, deleteService);
app.get("/v1/getServicesBySerInCode/:id", checkAuth, getServicesBySerInCode);






//Sub Categories
app.post("/v1/recent", checkAuth, addSubCategory);
app.get("/v1/recent/:id", checkAuth, getSubCategory);

//users
app.post("/v1/user", addUser);
app.delete("/v1/user/:id", deleteUser);
app.get("/v1/user", checkAuth, getUsers);
app.get("/v1/getUsersByInCode/:id", checkAuth, getUsersByInCode);

app.get("/v1/user/:id", checkAuth, getUser);
app.put("/v1/user/:id", editUser);
app.post("/v1/login/user", userLogin);
app.get("/v1/checkEmail/:id", checkEmail);
app.get("/v1/checkNumber/:id", checkNumber);
app.post("/v1/forgotPassword/", forgotPassword);


//Students
app.get("/v1/student", checkAuth, getStudents);
app.post("/v1/student", checkAuth, addStudent);
app.put("/v1/student/:id", checkAuth, editStudent);
app.post("/v1/student/:id", checkAuth, getStudent);
app.delete("/v1/student/:id", checkAuth, deleteStudent);
app.get("/v1/studentyByClassName/:id", checkAuth, getStudentyByclassID);
app.get("/v1/getStudentyByStInCodeID/:id", checkAuth, getStudentyByStInCodeID);


// //Category
app.get("/v1/class", checkAuth, getClassNames);
app.post("/v1/class", checkAuth, addClassName);
app.put("/v1/class/:id", checkAuth, editClassName);
app.post("/v1/class/:id", checkAuth, getClassName);
app.delete("/v1/class/:id", checkAuth, deleteClassName);


app.get("/v1/email/verification/:email/:num", async (req, res) => {
  console.log(req.body);

  var transport = {
    host: "smtp.gmail.com",
    auth: {
      user: "anjumzaki8@gmail.com",
      pass: "anjum123",
    },
  };

  var transporter = nodemailer.createTransport(transport);

  ejs.renderFile(
    "./views/VerifyEmail.ejs",
    {
      email: Buffer.from(req.params.email).toString("base64"),
      num: req.params.num,
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var mainOptions = {
          from: "The Node",
          to: req.params.email,
          // to: "shahacademy333@gmail.com",
          subject: "The Node Email Verification",
          html: data,
        };
        // console.log("html data ======================>", mainOptions.html);
        transporter.sendMail(mainOptions, function (err, info) {
          if (err) {
            res.status(404).send({
              success: "false",
              message: "Something really bad happens",
              err,
            });
          } else {
            res.status(200).send({
              success: "true",
              message: "email verification sent",
              info,
            });
          }
        });
      }
    }
  );
});

setInterval(function () {
  db.query("SELECT 1");
  console.log("query");
}, 9000);
module.exports = app;
