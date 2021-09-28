const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage:multer.diskStorage,
    limits:{
      fileSize:8000000
    },
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (
      ext !== ".jpg" &&
      ext !== ".jpeg" &&
      ext !== ".png" &&
      ext !== ".pptx" &&
      ext !== ".docx"
    ) {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
