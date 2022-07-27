const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect("mongodb+srv://SuperTestUser:MAMAM00@nodeapi.jhnnjvp.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true } 
      );
    } catch (err) {
        console.error("Error connecting to Mongo");
        console.error(err);
    }
}   

module.exports = { connect };
