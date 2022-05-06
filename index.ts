import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config({path : './environment/.env'});
import router from "./src/routes/v1/user.routes";
import logger from 'morgan'
import connection from "./src/config/mongo.connection";
connection();
app.use(logger("dev"))
app.use(express.json());
const port = process.env.PORT;
app.use('/',router)

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});


