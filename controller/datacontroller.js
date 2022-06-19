const dataSchema = require("../model/dataSchema");

const upload = (req, res, next) => {
    console.log(req.file)
    res.json({ data: req.file });
}


const deleteuser = async (req, res) => {
    // console.log(req.params._id);
    _id = req.params._id
    const resp = await dataSchema.deleteOne({ _id });
    console.log(resp);
    if (resp.deletedCount) {
        res.redirect('/filedata');
    }

}

module.exports = {
    upload, deleteuser
}