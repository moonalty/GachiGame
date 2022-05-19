require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const sessionConfig = require("./sessionConfig");
const signUpCheck = require("../middlewares/authUser");

const config = (app) => {
  app.set("view engine", "hbs");
  app.set("views", path.join(process.env.PWD, "views"));

  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(process.env.PWD, "public")));

  app.use(session(sessionConfig));
  app.use(signUpCheck);
};

module.exports = config;
