require("../database/connetDB")
const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const userRoutes = require("../routes/user.routes")
app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname, "../resources/public")))
app.set("views", path.join(__dirname, "../resources/views"))
hbs.registerPartials(path.join(__dirname, "../resources/layouts"))
app.use(express.urlencoded({extended:true}))
app.use(userRoutes)
app.get("*", (req,res)=> res.render("err404", {pageTitle:"Not found", errMsg:"invalid url"}))
app.post("*", (req,res)=> res.render("err404", {pageTitle:"Not found", errMsg:"invalid url"}))
module.exports=app