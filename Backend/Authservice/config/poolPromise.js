const mssql = require("mssql");
const sqlConfig = require("./config");

async function poolPromise() {
  let pool = await mssql.connect(sqlConfig);
  if (pool.connected) {
    console.log("Database connection established");
    return pool;
  }else{
    console.log("Error,couldn't find database")
  }
}

module.exports = poolPromise;
