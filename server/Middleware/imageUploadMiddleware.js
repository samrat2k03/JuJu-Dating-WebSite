// const multer = require("multer");
// const { GridFsStorage } = require("multer-gridfs-storage");
// const dbConfig = require("../con fig/db");
import multer from "multer";
import dotenv from "dotenv";
import { GridFsStorage } from "multer-gridfs-storage";
dotenv.config();

// import dbConfig from '../con'

export const storage = new GridFsStorage({
    // url: dbConfig.url + dbConfig.database,
    url: process.env.DB,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-bezkoder-${file.originalname}`;
            return filename;
        }

        return {
            // bucketName: dbConfig.imgBucket,
            // destination: process.env.IMG_BUCKET,
            bucketName: process.env.IMG_BUCKET,
            filename: `${Date.now()}-bezkoder-${file.originalname}`
        };
    }
});

const uploadFiles = multer({ storage: storage }).single("file");
// const uploadFiles = multer({ dest: "/assets", rename: function(fieldname ,filename){return filename.replace(/\W+/g, '-').toLowerCase();} }).single("file");
// module.exports = uploadFiles;
export default uploadFiles;
