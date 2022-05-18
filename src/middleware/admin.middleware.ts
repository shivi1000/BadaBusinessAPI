import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export default function verifyAdmin(req: Request, res: Response, next: NextFunction): void {
    try {
        const token: string | undefined = req.headers["authorization"];
        if (!token) {
            res.json({ msg: "Please enter the token" })
        } else {
            const jwtSecret = String(process.env.JWT_SECRET_KEY);
            const userVerification:any= jwt.verify(`${req.headers["authorization"]}`, jwtSecret);
            if (!(userVerification.role==="admin")) {
                res.send({ msg: "Only Admin can perform this action" })
            }else {
                next();
            }
        }
    } catch(err : any){
        res.json({message : "please provide right token"})
    }
}