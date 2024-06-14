// require('dotenv').config();
const jwt= require("jsonwebtoken");
const Students= require("../models/students")
// const router = express.Router();

const auth  =async(req, res, next)=>{
   try{
            const token = req.cookies.jwt;
                 console.log(token);
                 console.log(`this is ${process.env.KEY}`)
        
            const  verifyuser= jwt.verify(token, process.env.KEY)
                  console.log(`give verify user : ${verifyuser}`);
                  console.log(`veryfiy user: ${JSON.stringify(verifyuser._id)}`)
                  
            const user = await Students.findOne({_id:verifyuser._id});
                  console.log(`young ${user}`);
                  
            req.token=token;
            req.user=user;

            res.locals.auth = true;
            console.log('res.locals.auth in middleware:', res.locals.auth);
            next();


        }
        catch(error){
            res.locals.auth = false;

            res.status(400).send('authentication error');

        }
    }
    module.exports=auth;
