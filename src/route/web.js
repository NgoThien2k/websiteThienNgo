import express from "express";
import homecontroller from "../controllers/homeController";
import userController from "../controllers/userController";

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

    router.post('/api/login',userController.handleLogin);

    router.post('/api/create-new-user',userController.handleCreateNewUser);
    router.put('/api/edit-user',userController.handleEditUser);
    router.delete('/api/delete-user',userController.handleDeleteUser);


    router.get('/api/get-all-users',userController.handleGetAllUsers);

    
    return app.use("/", router);

    
}

module.exports = initWebRoutes;

