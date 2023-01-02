const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const { connectDB }= require("./src/utils/mongoDBClient");
const userRouter = require("./src/routes/userRoute");

const app = express();

app.use( cors());
app.use(bodyParser.json());

app.use('/api/user', userRouter);

app.use(( req, res , next ) => {
    res.send("Hola Mundo")
})

const PORT = process.env.PORT || 3002;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`🚀 Server ready at: http://localhost:${PORT} ⭐️`))
    } catch (error) {
        throw error;
    }
}

startServer();