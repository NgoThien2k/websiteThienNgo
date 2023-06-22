import express from "express";
import homecontroller from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/', homecontroller.getHomePage);
    //rest api
    router.get('/halo',(req,res)=>{
        return res.send("Hello World Bé Dâu");
    });
    router.get('/AboutPage', homecontroller.getAboutMe);
    router.get('/CRUD',homecontroller.getCRUD);

    router.post('/post-crud',homecontroller.postCRUD);

    router.get('/get-crud',homecontroller.displayGetCRUD);
    router.get('/edit-crud',homecontroller.getEditCRUD);
    
    router.post('/put-crud',homecontroller.putCRUD);
    router.get('/delete-crud',homecontroller.deleteCRUD);

    
    return app.use("/", router);
}

module.exports = initWebRoutes;

