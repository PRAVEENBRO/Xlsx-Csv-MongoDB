const express = require('express');
const exphbs = require('express-handlebars');

const port = process.env.PORT || 4000;
const app = express();
const Routes = require('./routes/records.js');
const multer = require('multer');
const render = require("xlsx")
require('dotenv').config();
require("./config/dbConnection");

const DataSchema = require("./model/dataSchema")
// ==============================================================//

app.engine('handlebars', exphbs({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

app.set('view engine', 'handlebars');

//  Body Parser Middleware
app.use(express.urlencoded({ extended: true }));


//  Router level Middleware 
app.use(Routes)

// ==============================================================//

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: fileStorageEngine });

// ==============================================================//

app.post('/filedata', upload.single("csv"), async (req, res) => {
    if (req.file) {
        const file = render.readFile("./uploads/data-sheet.csv");
        const sheets = file.SheetNames;
        for (let i = 0; i < sheets.length; i++) {
            const sheetname = sheets[i];
            const sheetData = render.utils.sheet_to_json(file.Sheets[sheetname]);
            const data = sheetData.splice(0, 2);
            await DataSchema.insertMany(sheetData);
            res.redirect('/filedata')

        }
    }
});


app.listen(port, () => {
    console.log(`crt + click => http://localhost:${port}`);
});
