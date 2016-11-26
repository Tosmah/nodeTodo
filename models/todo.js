const db = require('sqlite')

var Todo = function () {
    this.userId = "";
    this.message = "";
    this.team = "";
    this.status = "";
    this.priorite = "";
    this.createdAt = "";
}

Todo.update = function(req) {
    var date =  new Date();
    /*console.log(req.body.status)
    if (req.body.status == 0) {
        var status = 1
    } else {
        var status = 0
    }
    console.log(status)*/
    console.log(req.body)
    var status = req.body.status == "on" ? 1 : 0; 
    return db.run("UPDATE todo SET message = ?, team = ?, status = ?, priorite = ? WHERE rowid = ?", req.body.message, req.body.team, status, req.body.priorite, req.params.userid);
}
Todo.insert = function(req) {
    var date =  new Date();
    return db.run("INSERT INTO todo VALUES (?, ?, ?, ?, ?, ?)",req.body.userId , req.body.message, req.body.team, 0, req.body.priorite, date);
}
Todo.delete = function(req) {
    return db.run("DELETE FROM todo WHERE rowid = ?",req.params.userid)
}
Todo.getById = function(req) {
    return db.get("SELECT rowid, * FROM todo WHERE rowid = ?", req.params.userid)
}

module.exports = Todo;