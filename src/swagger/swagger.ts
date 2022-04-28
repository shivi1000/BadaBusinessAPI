// import express, { NextFunction } from "express";
// const router = express.Router();

// const port = process.env.PORT;
// const host = process.env.HOST;

// const options = {
//   definition: {
//     openapi: "3.0.1",
//     info: {
//       title: "BADA BUSINESS PROJECT",
//       version: "6.1.0",
//     },
//     servers: [
//       {
//         url: `${host}${port}/`,
//       },
//     ],

//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: "apiKey",
//           name: "authorization",
//           scheme: "bearer",
//           in: "header",
//         },
//       },
//     },
//     security: [
//       {
//         bearerAuth: [],
//       },
//     ],
//   },
//   apis: ["./src/swagger/swagger.ts"],
// };

// /**
//  * @swagger
//  * components:
//  *      schemas:
//  *          signupModel:
//  *              type: object
//  *              required:
//  *                  -firstName
//  *                   -lastName
//  *                  -phoneNumber
//  *                  -email
//  *                 -usertype
//  *                 properties:
//  *                  firstName:
//  *                      type: string
//  *                      description: fullname of user only contains alphabetic characters
//  *  *                  lastName:
//  *                      type: string
//  *                      description: lastname of user only contains alphabetic characters
//  *                  phoneNumber:
//  *                      type: integer
//  *                      description: phone number of 12 digit including country code
//  *                  email:
//  *                      type: string
//  *                      description: valid email address of user
//  *                  usertype:
//  *                      type: string
//  *                      description: type of user
//  *               
//  *                 
//  */

// /**
//  * @swagger
//  * /signup:
//  *  post:
//  *      summary: This API is used to signup
//  *      description: API to signup user detail
//  *      consumes:
//  *          - application/json
//  *      requestBody:
//  *          required: true
//  *          content:
//  *              multipart/form-data:
//  *                  schema:
//  *                      $ref: '#components/schemas/signupModel'
//  *      responses:
//  *          200:
//  *              description: signup successfully
//  *          400:
//  *              description: signup failed
//  */



// export default options;''