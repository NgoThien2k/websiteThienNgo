const { render } = require("ejs");
import e from 'express';
import db from '../models/index';
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
// object
module.exports={
    getHomePage: getHomePage,
    getAboutMe: getAboutMe,
}