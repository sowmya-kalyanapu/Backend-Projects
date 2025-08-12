const express=require(`express`);
const app = express();
const PORT=2500;

const itemRoutes=require("./Routes/itemroutes");
app.use(express.json());
app.use("/items",itemRoutes);

app.get("/",(req,res)=>{
  res.json(items);
})

app.get("/about",(req,res)=>{
  res.json("NAMASTE.....!"); 
})
app.listen(PORT,()=>{
  console.log(`APP OPENED AT PORT NO. ${PORT}`);
  console.log("WELCOME");
})
