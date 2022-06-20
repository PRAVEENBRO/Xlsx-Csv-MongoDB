const dataSchema = require("../model/dataSchema");


const upload_file = (req, res) => {
    res.render('./upload-file.handlebars');
}

const landingpage = (req, res) => {
    res.render('./landingpage.handlebars');
}

const filedata = async (req, res, next) => {
    try {
        alldata = await dataSchema.find({});
        res.render('./filedata.handlebars', { alldata });
    } catch (err) { next(); }
}

const get_edit_user = async (req, res, next) => {
    const id = req.params._id;
    try {
        const editUser = await dataSchema.findOne({ _id: id });
        const { _id, firstname, category_name, policy_number, premium_amount, address } = editUser
        res.render('./edit-product.handlebars', { id, firstname, category_name, policy_number, premium_amount, address });
    } catch (err) { next(err) }

}

const post_edit_user = async (req, res, next) => {
    const _id = req.params._id
    try {
        let { firstname, category_name, premium_amount, address } = req.body;
        const response = await dataSchema.updateOne({ _id }, { $set: { firstname, category_name, premium_amount, address } });
    } catch (err) {
        next(err)
    }
    res.redirect('/filedata')
}

const delete_user = async (req, res, next) => {
    try {
        const resp = await dataSchema.deleteOne({ _id: req.params._id });
        if (resp.deletedCount) {
            res.redirect('/filedata');
        }
    } catch (err) { next(err) }
}

const delete_alluser = async (req, res) => {
    await dataSchema.deleteMany();
    res.redirect("/")
}

module.exports = {
    upload_file,
    landingpage,
    filedata,
    get_edit_user,
    post_edit_user,
    delete_user,
    delete_alluser
}