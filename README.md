# Tailwind UI {#1}
Create a beautiful page with tailwind 🍐

![image](https://user-images.githubusercontent.com/74735976/233546425-bdedebd2-fa79-4d7a-9d38-8ee6deabba28.png)
#
![image](https://user-images.githubusercontent.com/74735976/233863240-14f26617-10ad-4ec5-a957-098197796a58.png)


#

![image](https://user-images.githubusercontent.com/74735976/233863282-2ad3303a-18c7-4523-82bd-7d1648c7f28a.png)

# Server File 
```js
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Rejester = require("./models/Rejester");
const Uploadimg = require("./models/Uploadimg");
const Login = require("./models/Login");
const PORT = process.env.PORT || 3001;

// mongoose connecting 
const username = process.env.USERNAME,
      password = process.env.PASSWORD,
      db = process.env.DB;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.yzffgku.mongodb.net/${db}?retryWrites=true&w=majority`)
// application
app.use(express.static("public"))
app.use(express.json());
app.use(cors());

// models
Uploadimg(app);
Rejester(app);
Login(app);
// 
app.listen(PORT, () => {console.log(`Connecting in : ${PORT}`);})
```
And Other Folders /Models & /public/Uploads

Models : <br>- Accunets.js <br>
         - Login.js <br>
         - Rejester.js <br>
         - Uploadimg.js <br>

# For Upload Image model 
Install Multer
```cmd
npm i multer
```

# In Folder /Models/Uploadimg.js
```js

const multer = require("multer");

const Uploadimg = (app) => {
   const storage = multer.diskStorage({
      destination : (req,file,cb) => {
         cb(null,'public/Uploads/');
      },
      filename: (req,file,cb) => {
         const nameF = Date.now() + "-" + file.originalname;
         cb(null,nameF);
      }
   })

   const upload = multer({storage:storage});

   app.post('/upload', upload.single('file'), function(req, res) {
      // Retrieve the name of the uploaded file and send it back in the response
      const uploadedFile = req.file;
      const fileName = uploadedFile.filename;
      res.json({ fileName });
    });


}
module.exports = Uploadimg;

```
