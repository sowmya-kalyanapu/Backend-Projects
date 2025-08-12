const mysql=require("mysql2");
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"StudentDB"
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("MYSQL connected");
});

module.exports=connection;