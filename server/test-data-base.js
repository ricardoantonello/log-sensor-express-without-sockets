const sqlite3 = require('sqlite3')
const path = require('path')
const db = new sqlite3.Database(path.resolve('database.db'))
db.serialize(function() {
    db.run('UPDATE temperature SET value=21.3 WHERE createAt="2017-06-24 10:27:25"')
    db.all('SELECT * FROM temperature',(err, results)=> {
       if(err) {
          console.error(err)
       }
       console.log(results)
    })
})
db.close()