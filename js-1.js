const express=require(`express`);
const app = express();
const PORT=5500;

app.listen(PORT,()=>{
    console.log(`APP OPENED AT PORT NO. ${PORT}`);
})
