import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export default function verifyToken(req: Request, res: Response, next: NextFunction): void {
    try {
        const token: string | undefined = req.headers["authorization"];
        console.log(token)
        if (!token) {
            res.json({ msg: "Please enter the token" })
        }
        else {
            const jwtSecret = String(process.env.JWT_SECRET_KEY);
            const userVerification:any= jwt.verify(`${req.headers["authorization"]}`, jwtSecret);
            // console.log(userVerification);
            
            
            if (!userVerification) {
                res.send({ msg: "Authentication error" })
            }
            else {
                req.body.tokenId = userVerification._id;
                next();
            }
        }
    }
    catch(err : any){
        res.json({message : "pklease provide right token"})
    }
}
