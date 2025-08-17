const express=require(`express`);
const items=require(`../data/Items`);
const router=express.Router();
const db=require("../DB");

router.get("/items",(req,res)=>{
    res.json(items);
})

router.get("/",(req,res)=>{
    db.query("select * from Student",(err,result)=>{
        if(err) return res.status(500).json({error:err});
        res.json(result);
    })
})

router.put("/:id",(req,res)=>{
    const {name,age}=req.body;
    const sql="update Student set Name=?,Age=? where id=?";
    db.query(sql,[name,age,req.params.id],(err,result)=>{
        if(err) return res.status(401).json({error:err});
        res.json({message:"Student updated"});
    })
})

router.delete("/:id",(req,res)=>{
    db.query("delete from Student where id=?",[req.params.id],(err,result)=>{
        if(err) return res.status(500).json({error:err});
        res.json({message:"item deleted"});
    })
})


router.post("/:id",(req,res)=>{
    //console.log(req.body);
    const{name,age}=req.body;
   /* if(!name || !age){
        return res.status(500).json({error:"please provide correct details"});
    }
    const newItem={
        id:items.length+1,
        name,
        age,
     }
    items.push(newItem);
    res.status(302).json({message:"Item created successfully",item:newItem});
*/
    const sql="insert into Student (Name,Age) values (?,?)";
    db.query(sql,[name,age],(err,result)=>{
        if(err) return res.status(500).json({error:err});
        res.status(201).json({id:result.insertId,name,age});

    })
})

router.get("/:id",(req,res)=>{
    const intemId=parseInt(req.params.id);
    const foundItem=items.find(items.id===intemId);
    if(!foundItem){
        return res.status(505).json({error:"Item not found"});
    }
    res.json(foundItem);
})

module.exports=router;