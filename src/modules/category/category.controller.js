import { con } from "../../../databases/dbConnection.js";


export const addcategory=(req,res)=>{
    const {name,createdBy}=req.body
    con.execute(`insert into categories (name,createdBy) values ('${name}','${createdBy}')`,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json({massage:"User added.."})
        }
    })
}


export const updatecategory=(req,res)=>{
    const {name ,createdBy,id}=req.body
    con.execute(`select id from categories where id= '${id}'`,(err,result)=>{
        if(err){
            res.json(err)
        }
        if(result.length ==0){
            res.json({massage:"please check ID"})
        }else{
            con.execute(` update categories set name='${name}',createdBy='${createdBy}' where id=${id}`)
            res.json({massage:'product Updated..'})
        }
    })
    
}

export const deletecategory=(req,res)=>{
    const {id}=req.body
    con.execute(`select id from categories where id= '${id}'`,(err,data)=>{
        if(err){
            res.json(err)
        }
        if(data.length ==0){
            res.json({massage:"please chech ID"})
        }else{
            con.execute(`delete from categories where id=${id} `)
            res.json({massage:"category Deleted"})
        }
    })
}


export const getcategories =(req,res)=>{
    con.execute(`select * from categories`,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
}