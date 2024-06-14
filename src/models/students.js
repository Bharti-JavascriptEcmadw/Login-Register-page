

const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');


const studentSchema= new mongoose.Schema({
    firstname:
    {
        type: String,
        // required:true 
    },
    lastname:{
        type: String,
        // required:true,
    },
    email:{
        type: String,
        // required:true,
        unique:true,
       
    },
    gender:{
        type:String,
        // required:true

    },
    phone:{
        type:Number,
        // required:true,
        unique:true,
      },
    password:{
        type:String,
        // required:true,
    },
    confirmpassword:{
        type:String,
        // required:true,
    } ,
    tokens:[{
        token:{
            type:String,
            // required:true
        }
    }]


}) 

//? JWt Create token by JSon web ttoken
studentSchema.methods.generateAuthToken=  async function(){
    try{
        

        console.log(this._id);
        const createtoken=jwt.sign({_id:this._id.toString()}, process.env.KEY);
           console.log(createtoken);
           console.log("upar wala token hai")

//? we can create token filed and save in it this token
    this.tokens=this.tokens.concat({token:createtoken});
    await this.save();
    return createtoken;
}
catch(error){
        //   res.send('token errore')
          console.log('token errore')
}
}



// ?? bcrypt hasing  .pre is said that schema modell ko save karane se pahel ye kar do
//? and cofirma passsword ko db me sav nahi  karna hai

studentSchema.pre("save", async function(next){

    if(this.isModified("password")){
        console.log(`${this.password}`);
        this.password=await bcrypt.hash(this.password,10)
        // this.confirmpassword=undefined;
        this.confirmpassword=await bcrypt.hash(this.confirmpassword,10)

        console.log(`this is hash pass ${this.password}`);
        
 }
    next();
})




const Student=new mongoose.model('Student',studentSchema)
module.exports=Student;

