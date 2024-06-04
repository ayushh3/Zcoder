const mongoose = require('mongoose')


const url="mongodb+srv://ayushsahu3312:zcoder@cluster0.efuoko5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

module.exports.connect = () => {
    mongoose.connect(url).then((res) => console.log("MongoDB is connected successfully")).catch((err) => console.log('Error : ', err))
}