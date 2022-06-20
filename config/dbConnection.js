const mongoose = require('mongoose');

const dbUrl = process.env.DBURL;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log("DB connected successfully");
    } else {
        console.log('DB is not connected');
        console.log(err);
    }
}
);