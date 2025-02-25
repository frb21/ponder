import pool from './dbconfig.js';

async function testDatabaseConn(){
    try{
        const [result] = await pool.query("SELECT 'Database Connected!' AS message");
        console.log("✅ Database connected successfully!", result);
    }
    catch(error){
        console.error("❌ Database connection failed:", error);
    }
}

async function testSelect(){
    try{
        const [result] = await pool.query("SELECT * FROM users;")        
        console.log("Successful query: ", result);
    }
    catch(error){
        console.error("❌ Query failed:", error);
    }
    finally{
        pool.end();
    }
}

testSelect();
//testDatabaseConn();






























