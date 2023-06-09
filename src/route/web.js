import express from "express";
import homecontroller from "../controllers/homecontroller";

let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/', homecontroller.getHomePage);
    //rest api
    router.get('/halo',(req,res)=>{
        return res.send("Hello World Bé Dâu");
    });
    router.get('/AboutPage', homecontroller.getAboutMe);
    
    return app.use("/", router);
}

module.exports = initWebRoutes;

