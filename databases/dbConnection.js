import mysql from 'mysql2'  
export const con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"assignment4"
})