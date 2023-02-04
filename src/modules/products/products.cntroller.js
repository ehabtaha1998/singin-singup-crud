import { con } from "../../../databases/dbConnection.js";

export const addproduct=(req,res)=>{
    const {name,description,price,category_id,createdBy}=req.body
    con.execute(`insert into products (name,description,price,category_id,createdBy) values ('${name}','${description}','${price}','${category_id}','${createdBy}')`,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json({massage:"User added.."})
        }
    })
}

export const deleteproduct = (req,res)=>{
    const {id}=req.body
    con.execute(`select id from users where id= '${id}'`,(err,data)=>{
        if(err){
            res.json(err)
        }
        if(data.length ==0){
            res.json({massage:"please chech ID"})
        }else{
            con.execute(`delete from products where id=${id} `)
            res.json({massage:"product Deleted"})
        }
    })
}

export const updateproduct =(req,res)=>{
    const {name,description,price,category_id,createdBy,id}=req.body
    con.execute(`select id from users where id='${id}'`,(err,[result])=>{
        if(err){
            res.json(err)
        }
        if(result){
            res.json({massage:"please check ID"})
        }else{
            con.execute(` update products set name='${name}',description='${description}',price='${price}',category_id='${category_id}',createdBy='${createdBy}' where id=${id}`)
            res.json({massage:'Product Updated..'})
        }
    })
    
}

export const geteverything=(req,res)=>{
    con.execute(`SELECT users.name, products.createdby,products.name FROM users INNER JOIN products ON users.name=products.createdby`,(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
}


export const searchname=(req,res)=>{
    const {name}=req.body
    con.execute(`SELECT * FROM products WHERE name IN ('${name}')`,(err,data)=>{
        if(err){
            res.json(err)
        }
        if(data.length ==0){
            res.json({massage:"No Name Found"})
        }else{
            res.json(data)
        }
    })

}