import { Router } from "express";
import verifyToken from '../../middleware/authentication';
import swaggerjsDoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';
import { userController } from "../../controller/v1";
import { app } from "../../service/user.service";

export const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: " BADA_Business Swagger API Documentation",
      version: "6.1.0",
    },
    servers: [
      {
        url: `${process.env.url}`,
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          name: "authorization",
          scheme: "bearer",
          in: "header",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/v1/user.routes.ts"],
};
const swaggerSpec = swaggerjsDoc(options);
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerSpec))





/**
 * @swagger
 *  components:
 *      schema:
 *          otpgen:
 *              type: object
 *              properties:
 *                  phoneNumber: 
 *                      type: String
 *                      example: 919058746290
 */


// /**
//  * @swagger
//  *  components:
//  *      schema:
//  *          otpverify:
//  *              type: object
//  *              properties:
//  *                  phoneNumber: 
//  *                      type: String
//  *                      example: 919058746290
//  *                  otp:
//  *                      type: String
//  *                      example:  6743                
//  */

// /**
//  * @swagger 
//  * components:
//  *      schema:
//  *          User:
//  *              type: object    
//  *              properties:
//  *                  firstName:
//  *                      type: string
//  *                  lastName:
//  *                      type: string
//  *                  phoneNumber:
//  *                      type: string
//  *                  email:
//  *                      type: string
//  *                  userType:
//  *                      type: string
//  */

/**
 * @swagger
 * /user/signup/generateOtp:
 *        post:
 *           summary: used to generate otp from phonenumber
 *           description: This api is used for otp generation
 *           requestBody:
 *               required: true
 *               content:
 *                   application/json:
 *                       schema:
 *                            $ref: '#components/schema/otpgen'               
 *           responses:
 *                200:
 *                  description: otp generated successfully
 */




// /**
//  * @swagger
//  * /user/signup/verifyOtp:
//  *        post:
//  *           summary: used to verify otp from phonenumber
//  *           description: This api is used for otp verification
//  *           requestBody:
//  *               required: true
//  *               content:
//  *                   application/json:
//  *                       schema:
//  *                            $ref: '#components/schema/otpverify'               
//  *           responses:
//  *                200:
//  *                  description: otp verified successfully
//  */


// /**
//  * @swagger
//  * /user/details:
//  *        post:
//  *           summary: used to register user
//  *           description: This api is used for registration
//  *           requestBody:
//  *               required: true
//  *               content:
//  *                   application/json:
//  *                       schema:
//  *                            $ref: '#components/schema/User'               
//  *           responses:
//  *                200:
//  *                  description: created successfully
//  */

const router = Router();

router.post("/user/signup/generateOtp", userController.signup_generateOtp);

router.post("/user/signup/verifyOtp", userController.signup_verifyOtp);

router.post("/user/details", userController.userDetails);

router.post("/user/interest", verifyToken, userController.interest);

router.post("/user/login/generateOtp", userController.login_generateOtp);

router.post("/user/login/verifyOtp", userController.login_verifyOtp);

router.post("/addPost", userController.addPost);

export default router;
