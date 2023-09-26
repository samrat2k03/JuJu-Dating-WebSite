import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(bodyParser.json({limit:"30mb", extended:true}))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    },
});
const upload = multer({storage});

const port = process.env.PORT;
const db = process.env.DB;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDb");
        app.listen(port, () => console.log(`Server is running @ ${port}`) )
    })
    .catch((error) => {
        console.error("Error Connecting to MongoDB :", error)
    })