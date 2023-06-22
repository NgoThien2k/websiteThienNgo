const { render } = require("ejs");
import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async(req,res) =>{
    // return res.send("Hello Thiện");
    try {
        let data = await db.User.findAll();
        return res.render("homepage.ejs",{
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
    
}
let getAboutMe =(req,res)=>{
    return res.render("test/AboutMe");
}
let getCRUD =(req,res)=>{
    return res.render("test/CRUD");
}
let postCRUD =async(req,res)=>{
    let message =  await CRUDService.createNewUser(req.body);
    // console.log(message);
    return res.send("create user successfull");
}

let displayGetCRUD = async(req,res)=>{
    let data = await CRUDService.getAllUser();

    return res.render("displayCRUD.ejs",{
        dataTable:data,
    });
}
let getEditCRUD = async(req,res)=>{
    let userId = req.query.id
    console.log(userId);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        // check user data not found
        // let user data
        return res.render("editCRUD.ejs",{
            user : userData,
        });
    } else {
        return res.send("không có đâu mà tìm");
    }
}
let putCRUD =async(req,res)=>{
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render("displayCRUD.ejs",{
        dataTable : allUsers,
    });

}
let deleteCRUD = async (req,res)=>{
    let id = req.query.id
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send("delete user successfull");
    } else {
        return res.send("User not found");
    }
}
 
// object
module.exports={
    getHomePage: getHomePage,
    getAboutMe: getAboutMe,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD:displayGetCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD,
}