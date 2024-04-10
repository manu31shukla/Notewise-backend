const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://manu31shukla:itBrJexGSMKezFFU@cluster0.w2w3qqw.mongodb.net/';

async function connectToMongo() {
  await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports = connectToMongo;