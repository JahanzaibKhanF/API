const mongoose = require('mongoose')
// const uri = "mongodb+srv://jahanzaibkhanF:jn2choc1OTyxRWoU@mydb.3tonts1.mongodb.net/mydb?retryWrites=true&w=majority"



const connectDB =(uri)=>{
    console.log('DB Connected')
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}
module.exports= connectDB