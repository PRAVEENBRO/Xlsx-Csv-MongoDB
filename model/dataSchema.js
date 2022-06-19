const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    agent: { type: String },
    userType: { type: String },
    policy_mode: { type: Number },
    producer: { type: String },
    policy_number: { type: String },
    premium_amount: { type: Number },
    policy_type: { type: String },
    company_name: { type: String },
    category_name: { type: String },
    policy_start_date: { type: Number },
    policy_end_date: { type: Number },
    csr: { type: String },
    account_name: { type: String },
    email: { type: String },
    firstname: { type: String },
    city: { type: String },
    account_type: { type: String },
    phone: { type: String },
    address: { type: String },
    state: { type: String },
    zip: { type: String },
    dob: { type: Number }
});

module.exports = mongoose.model('XlsxData', dataSchema)