const {Client} = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'my_database',
    password: 'PASSWORD',
    port: 5432,
});
  
client.connect();

client.query(`Select * from merchants`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})