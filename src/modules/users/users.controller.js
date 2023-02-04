import { con } from "../../../databases/dbConnection.js";

export const signup =(req,res)=> {
    const {name,email,password}=req.body
    con.execute(`SELECT email FROM users WHERE email=('${email}')`,(err,[data])=>{
        if(err){
            res.json(err)
        }
        if(data){
           res.json({massage:"user already exist.."})
        }else{
            con.execute(`insert into users (name,age,email,password) values ('${name}','${email}','${password}')`)
            res.json({massage:"User added.."})
        }
    }) 
}


export const signin =(req,res)=> {
    const {email,password}=req.body
    con.execute(`select * from users where email='${email}'`,(err,[data])=>{
        if(err){
            res.json(err)
        }
        if(data==undefined){
            res.json({massage:"please check email"})
        }else{
            if(password == data.password){
                res.json({massage:'loged in',userid: data.id})
            }else{
                res.json({massage:"please check password"})
            }
        }
    })    
}