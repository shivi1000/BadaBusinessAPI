import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config({path : './environment/.env'});
import router from "./src/routes/user.routes";
import connection from "./src/config/mongo.connection";
connection();
app.use(express.json());
const port = process.env.PORT;
console.log(port)
app.use('/',router)



app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});


