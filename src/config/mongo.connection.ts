import mongoose from 'mongoose';

const connectDB =  async () =>{
    try{
        const host = process.env.LOCAL_HOST
        const dbName = process.env.DB_NAME
        const connectionString = `mongodb://${host}/${dbName}` 
        await mongoose.connect(connectionString)
        mongoose.set("debug",true)
        console.log("Mongo Database is connected!")
    }catch(error){
        console.error(error)
    }
}

export default connectDB

