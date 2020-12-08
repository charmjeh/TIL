import express from "express";
import multer from "multer";
import fs from "fs";
const uploadMulter = multer({ dest: "src/upload/" });
const fileRouter = express.Router();

const home = (req, res) => {
  res.render("home", {
    pageTitle: "home"
  });
};

const readFile = (req, res) => {
  const {
    file: { path }
  } = req;
  fs.readFile(path, "utf8", (err, content) => {
    console.log(content);
    res.render("read", {
      pageTitle: "read",
      content
    });
  });
};

fileRouter.get("/", home);
fileRouter.post("/read", uploadMulter.single("textFile"), readFile);

export default fileRouter;
