let express = require("express");
let mysql = require("mysql2");

let app  = express();

app.use(express.urlencoded({urlencoded:true}));

let conn = mysql.createConnection({
      user : "root",
      host :"localhost",
      password :"omkaware7666#",
      database :"form",

})

app.post("/register" , (req , res)=>{
       let {name , email , password} = req.body;

       conn.query(
        "INSERT INTO USER (name , email , password) VALUES (?,?,?)",
        [name , email , password],
        (err) =>{
              if(err) return res.send("errpr");
              res.send("tmkc");
        }
       );

});

app.listen(3000  , ()=>{
    console.log("cksbdhcb");
    
})