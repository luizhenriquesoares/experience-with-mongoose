var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/parking').connection;

db.on('open', function(){
  console.log('Mongodb Online!');
});

db.on('error', function(){
  console.log('Error de conexão');
});

return db;
