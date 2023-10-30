import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
dotenv.config();

import AuthRoute from "./Routes/AuthRoute.js";
import UserVerifyRoute from "./Routes/UserVerificationRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });

app.use("/api/auth/", AuthRoute);  //for login & signup
app.use("/", UserVerifyRoute);


const port = process.env.PORT;
const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = process.env;

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDb");
    app.listen(port, () => console.log(`Server is running @ ${port}`));
  })
  .catch((error) => {
    console.error("Error Connecting to MongoDB :", error);
  });