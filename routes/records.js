const express = require('express');
const router = express.Router()
const dataSchema = require("../model/dataSchema")
const controller = require('../controller/datacontroller.js')



router.get('/', (req, res) => {
    res.render('./landingpage.handlebars');
});

router.get('/upload', (req, res) => {
    res.render('./upload-file.handlebars');
});

router.get('/filedata', async (req, res) => {
    alldata = await dataSchema.find({});
    res.render('./filedata.handlebars', { alldata });
});


// =================== EDIT-PRDUUCT =================== //  


router.get('/edit-User/:_id', async (req, res) => {
    _id = req.params._id;
    console.log(_id);
    const editUser = await dataSchema.findOne({ _id });
    console.log("----", editUser);

    const { agent, firstname, category_name, policy_number } = editUser

    res.render('./edit-product.handlebars', { agent, firstname, category_name, policy_number });
})

router.post('/edit-product', (req, res) => {
    console.log(req.body);
    let { _id, pname, pdesc, pprize } = req.body;
    _id = parseInt(_id);
    pprize = parseInt(pprize);

    const index = products.findIndex((product) => {
        return parseInt(product._id) === parseInt(_id);
    });
    products.splice(index, 1, { _id, pname, pdesc, pprize });
    res.redirect('/products/products')
})

// =================== DELETE-PRDUUCT =================== //  

router.get('/delete-User/:_id', controller.deleteuser)

module.exports = router
