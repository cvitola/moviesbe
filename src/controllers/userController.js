const userModel = require("../models/userModel");

const getUsers = async(req,res,next) => {
    try {
        const users = await userModel.getUsers();
        res.status(200).json({users})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
}
const registerUser = async(req,res,next) => {
    try {
        const {name, surName,mail,password} = req.body;
        console.log("Creando usuario...")
        let user = await userModel.findUserByMail(mail);
        console.log("Hola")
        console.log(user)
        console.log("chauy")
        if(user.length === 0){
            user = await userModel.createUser({
                name,
                surName,
                mail,
                password
            })
            res.status(200).json({message: "Se creó el usuario"})
        }else{
            res.status(400).json({message: `El usuario con mail: ${mail} ya existe en la base de datos.`})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
}

const updateUser = async(req,res,next) => {
    try {
        const {name, surName,mail,password} = req.body;
        let user = await userModel.findUserByMail(mail);
        console.log(user._id)
        if(user){
            user = await userModel.updateUser({
                name,
                surName,
                mail,
                password
            },user._id)

            res.status(200).json({message: "Se modificó el usuario"})
        }else{
            res.status(400).json({message: `El usuario con mail: ${mail} no existe en la base de datos.`})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
}

const deleteUser = async(req,res,next) => {
    try {
        const { mail } = req.params;

        let user = await userModel.findUserByMail(mail);
        console.log("Y ESTO??")
        console.log(user.length)
        console.log("FIN Y ESTO")
        if(user.length > 0){
            user = await userModel.deleteUser(user._id)
            res.status(200).json({message: "Se Elimino el usuario"})
        }else{
            res.status(400).json({message: `El usuario con mail: ${mail} no existe en la base de datos.`})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
} 
module.exports = {
    getUsers,
    registerUser,
    updateUser,
    deleteUser
}