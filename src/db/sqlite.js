import SQLite from 'react-native-sqlite-2'

const DB_name = 'task.db'
const database_version = '1.0'
const database_displayname = 'SQLite task Database'
const database_size = 200000
let DB = undefined

function initDB() {
  try {
    DB = SQLite.openDatabase(
      DB_name,
      database_version,
      database_displayname,
      database_size,
      initDBSuccess,
      initDBError
    )
  } catch (e) {
    console.log('initDB error =', e)
  } finally {
  }
}

function initDBSuccess(){
  console.log('initDBSuccess')
}

function initDBError(err){
  console.log(DB_name + 'initDBError error =',err)
}

function closeDB(){
  if(DB){
    DB.close()
    console.log(DB_name + 'close success')
  }else {
    console.log(DB_name + 'not open')
  }
}

function createTable(sql, callBack) {
  console.log(`createTable is =${sql}`)
  DB.transaction((tx) => {
    tx.executeSql(
      sql,
      [],
      () => {
        callBack && callBack(true)
        console.log(`createTable executeSql success`)
      },
      (err) => {
        callBack && callBack(false, err)
        console.log('createTable  executeSql error=',err)
      })
    },
    (err) => {
      console.log('createTable  transaction error=',err)
    },
    () => {
      console.log(`createTable transaction success`)
    })
}

function insertDataToTable(tableName, data, callBack){
  let sql = `INSERT OR REPLACE INTO ${tableName} (${Object.keys(data).join(',')}) VALUES (${Array(Object.keys(data).length).fill('?').join(',')})`
  console.log(`insertDataToTable ${tableName} sql is =${sql}`)
  DB.transaction((tx) => {
    tx.executeSql(
      sql,
      Object.values(data),
      () => {
        callBack && callBack(true)
        console.log(`insertDataToTable ${tableName} executeSql success`)
      },
      (err) => {
        callBack && callBack(false, err)
        console.log('insertDataToTable  executeSql error=',err)
      })
    },
    (err) => {
      console.log('insertDataToTable  transaction error=',err)
    },
    () => {
      console.log(`insertDataToTable ${tableName} transaction success`)
    })
}

function deleteDataFromTable(tableName, key, value, callBack){
  let sql = `DELETE FROM ${tableName} WHERE ${key} = ${value}`
  console.log(`deleteDataFromTable ${tableName} sql is =${sql}`)
  DB.transaction((tx) => {
    tx.executeSql(
      sql,
      [],
      () => {
        callBack && callBack(true)
        console.log(`deleteDataFromTable ${tableName} executeSql success`)
      },
      (err) => {
        callBack && callBack(false, err)
        console.log('deleteDataFromTable  executeSql error=',err)
      })
    },
    (err) => {
      console.log('deleteDataFromTable  transaction error=',err)
    },
    () => {
      console.log(`deleteDataFromTable ${tableName} transaction success`)
    })
}

function selectDataFromTable(tableName, callBack){
  let sql = `SELECT * FROM ${tableName}`
  console.log(`selectDataFromTable ${tableName} sql is =${sql}`)
  DB.transaction((tx) => {
    tx.executeSql(
      sql,
      [],
      (tx,results) => {
        let datas = [];
        for(let i = 0; i < results.rows.length; i++){
          let info = results.rows.item(i);
          datas.push(info)
        }
        callBack && callBack(true, datas)
        console.log(`selectDataFromTable ${tableName} executeSql success`)
      },
      (err) => {
        callBack && callBack(false, err)
        console.log('selectDataFromTable  executeSql error=',err)
      })
    },
    (err) => {
      console.log('selectDataFromTable  transaction error=',err)
    },
    () => {
      console.log(`selectDataFromTable ${tableName} transaction success`)
    })
}

function getMsgInfoFromTable(tableName, key, value, callBack){
  let sql = `SELECT * FROM ${tableName} WHERE ${key} = ${value}`
  console.log(`getMsgInfoFromTable ${tableName} sql is =${sql}`)
  DB.transaction((tx) => {
    tx.executeSql(
      sql,
      [],
      (tx,results) => {
        callBack && callBack(true, results.rows.item(0))
        console.log(`getMsgInfoFromTable ${tableName} executeSql success`)
      },
      (err) => {
        callBack && callBack(false, err)
        console.log('getMsgInfoFromTable  executeSql error=',err)
      })
    },
    (err) => {
      console.log('getMsgInfoFromTable  transaction error=',err)
    },
    () => {
      console.log(`getMsgInfoFromTable ${tableName} transaction success`)
    })
}

function dropTable(tableName, callBack){
  let sql = `DROP TABLE ${tableName}`
  console.log(`dropTable ${tableName} sql is =${sql}`)
  DB.transaction((tx) => {
    tx.executeSql(
      sql,
      [],
      (tx,results) => {
        callBack && callBack(true)
        console.log(`dropTable ${tableName} executeSql success`)
      },
      (err) => {
        callBack && callBack(false, err)
        console.log('dropTable  executeSql error=',err)
      })
    },
    (err) => {
      console.log('dropTable  transaction error=',err)
    },
    () => {
      console.log(`dropTable ${tableName} transaction success`)
    })
}

function runCustomSQL(sql, callBack){
  DB.transaction((tx) => {
    tx.executeSql(
      sql,
      [],
      (tx,results) => {
        console.log(`runCustomSQL  executeSql success`)
        if (results && results.rows){
          let datas = [];
          for(let i = 0; i < results.rows.length; i++){
            let info = results.rows.item(i);
            datas.push(info)
          }
          callBack && callBack(true, datas)
          return
        }
        callBack && callBack(true)
      },
      (err) => {
        callBack && callBack(false, err)
        console.log('runCustomSQL  executeSql error=',err)
      })
    },
    (err) => {
      console.log('runCustomSQL  transaction error=',err)
    },
    () => {
      console.log(`runCustomSQL  transaction success`)
    })
}

export default {
  initDB,
  closeDB,
  createTable,
  insertDataToTable,
  deleteDataFromTable,
  selectDataFromTable,
  getMsgInfoFromTable,
  dropTable,
  runCustomSQL
}
