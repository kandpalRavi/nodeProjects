    const express = require("express");

    const app = express();

    app.get("/",(req,res)=>{
        res.send("home page");
    })
    app.get("/posts",(req,res)=>{
        res.send("posts........");
    })

    app.listen(5000,()=>{
        console.log("sever started at port localhost:5000"); 
    })