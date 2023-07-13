import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);


let createNewUser =(data) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber:data.phonenumber,
                gender: data.gender === "1" ? true:false,
                roleId: data.roleId,
                raw: false,
            })
            resolve("oke succesfull");
        } catch (error) {
            reject(error);
            console.log("add user failed");
        }
    })
    

}
let hashUserPassword = (password)=>{
    return new Promise((resolve,reject)=>{
        try {
            let hashPassword = bcrypt.hashSync(password,salt);
            resolve(hashPassword);
        } catch (error) {
            reject (error);
        }
    })
}
let getAllUser = () =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users = db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (error) {
           reject(error);
        }
    })
}
let getUserInfoById =(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id : userId},
                raw: true,
            })
            if (user) {
                resolve (user)
            } else {
                resolve([])
            }
        } catch (error) {
            reject();
        }
    })
}
let updateUserData=(data)=>{
    return new Promise (async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id: data.id}
            })

            if (user) {
                
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                
                await user.save();

                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }
            await db.User.update({

            })
        } catch (error) {
           console.log(error);
        }
    });
}
let deleteUserById = (userId)=>{
    return new Promise (async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id:userId}
            })
            if (user) {
                user.destroy();
            } 
            resolve(); //return
        } catch (error) {
            reject(error);
        }
    })
}

module.exports={
    createNewUser:createNewUser,
    getAllUser: getAllUser,
    getUserInfoById:getUserInfoById,
    updateUserData:updateUserData,
    deleteUserById:deleteUserById,
}