const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    // Add other fields as needed
})

const User = mongoose.model('userGraphQL',userSchema)
module.exports= User