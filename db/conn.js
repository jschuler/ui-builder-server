const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
const USER = process.env.MONGO_USER;
const PW = process.env.MONGO_PW;
const Db = `mongodb+srv://${USER}:${PW}@uibuilder.6rqvr.mongodb.net/employees?retryWrites=true&w=majority`;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};