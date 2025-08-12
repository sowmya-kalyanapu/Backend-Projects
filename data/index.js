const express=require('require');
const mongoose=require('mongoose');
const app=express();
mongoose.connect('mongodb://localhost:27017/my_database');
const db=mongoose.connection();
db.on('error',console.error.bind(console,'MongoDB connection error'));
const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});
const User=mongoose.model('User',userSchema); 

app.use(express.json());

app.post("/users",async(req,res)=>{
    try{
        const user=new User(req.body);
        await user.save();
        res.send(user);
    }
    catch(err){
        res.status(500).send(err); 
    }
})

app.get("/users",async(req,res)=>{
    try{
        const users=await User.find();
        res.send(users);
    }
    catch(err){
        res.status(500).send(err);
    }
})

pp.get("/users/:id",async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(505).send("User not found");
        }
        res.send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
})

app.put("/users/:id",async(req,res)=>{
    try{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!user){
        return res.status(505).send('User not found');
    }
    res.send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
})

app.delete("/users/:id",async(req,res)=>{
    try{
    const user=await User.findByIdAndDelete(req.params.id);
    if(!user){ 
        return res.statubs(505).send('User not found');
    }
    res.send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
})


const PORT=1000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)});
