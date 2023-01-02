//6htfMKIsItAxVnir
const { getCollection } = require("../utils/mongoDBClient");

const createUser = async(user) => {
    try {
        const usersColl = getCollection("users");
        const newUser = await usersColl.insertOne(user);
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
        const delUser = await usersColl.deleteOne({_id: id})
    } catch (error) {
        console.log(error)
        throw new Error(error); 
    }
}
const findUserByMail = async(mail) => {
    try {
        return await getCollection("users").findOne({
            mail
        })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createUser,
    findUserByMail,
    updateUser,
    deleteUser
}