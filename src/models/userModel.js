//6htfMKIsItAxVnir
const { getCollection } = require("../utils/mongoDBClient");
var mongodb = require('mongodb');

const getUsers = async() =>{
    try {
        const usersCollection = getCollection("users");
        const users = await usersCollection.find().toArray();
        return users;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}
const createUser = async(user) => {
    try {
        const usersColl = getCollection("users");
        const newUser = await usersColl.insertOne({user});
        return newUser;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

const updateUser = async(user,id) => {
    try {
        const usersColl = getCollection("users");
        const upteUser = await usersColl.updateOne({_id: id},{ $set: user});
        return upteUser;
    } catch (error) {
        console.log(error)
        throw new Error(error); 
    }
}

const deleteUser = async(id) => {
    try {
        const usersColl = getCollection("users");
        const query = {_id: new mongodb.ObjectID(id)}
        const delUser = await usersColl.deleteOne(query)
    } catch (error) {
        console.log(error)
        throw new Error(error); 
    }
}
const findUserByMail = async(mail) => {
    try {
        const usersColl = getCollection("users");
        console.log(mail)
        //NUNCA ENCUENTRA NADA cuando lo sobrecargo
        const user = await usersColl.find({},{"mail": mail} ).toArray();
        return user;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getUsers,
    createUser,
    findUserByMail,
    updateUser,
    deleteUser
}