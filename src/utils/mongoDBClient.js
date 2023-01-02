const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let db;
const connectDB = async () => {
    try{
       // console.log(mongodb+srv://moviesdb:6htfMKIsItAxVnir@cluster0.crdkbyy.mongodb.net/?retryWrites=true&w=majority)
       // const client = await MongoClient.connect(process.env.DATABASE_MONGO_URL);
       const client = await MongoClient.connect("mongodb+srv://moviesdb:6htfMKIsItAxVnir@cluster0.crdkbyy.mongodb.net/?retryWrites=true&w=majority")
        console.log(client)
        db = client.db("moviesdb");
        return client;
    }
    catch(error){
        console.log(error);
        throw new Error(error)     
    }
    };        

    const getCollection = (collection) => {
        console.log(db)
        if(db) {
            return db.collection(collection)
        }
        throw "No MongoDB connection"
    }
module.exports = { connectDB,
    getCollection 
                }
