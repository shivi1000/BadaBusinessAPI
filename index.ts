import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config({path : './environment/.env'});
import router from "./src/routes/v1/user.routes";
import logger from 'morgan'
import connection from "./src/config/mongo.connection";
//import options from "./src/swagger/swagger"
connection();

app.use(logger("dev"))
//import swaggerJSDoc from "swagger-jsdoc";
//import SwaggerUi from "swagger-ui-express";
app.use(express.json());
const port = process.env.PORT;
// console.log(port)
//const swaggerSpec: object = swaggerJSDoc(options);
//app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));
app.use('/',router)

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});


