import express from "express";

let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/',(req,res)=>{
        return res.send("Hello World");
    });
    //rest api
    router.get('/halo',(req,res)=>{
        return res.send("Hello World Bé Dâu");
    });

    
    return app.use("/", router);
}

module.exports = initWebRoutes;