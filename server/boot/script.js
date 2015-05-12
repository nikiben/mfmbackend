/*var loopback = require('loopback');
var ds = loopback.createDataSource('mysql', {
  "host": "localhost",
  "port": 3306,
  "database": "mfmconnect",
  "username": "root",
  "password": "root"
});
  

ds.discoverSchema('live', {owner: 'mfmconnect'}, function (err, schema) {
  console.log(JSON.stringify(schema, null, '  '));
});


// Discover and build models from INVENTORY table
ds.discoverAndBuildModels('live', {associations: true},
function (err, models) {
  // Now we have a list of models keyed by the model name
  // Find the first record from the inventory
  models.Live.findOne({}, function (err, inv) {
    if(err) {
      console.error(err);
      return;
    }
    console.log("\live: ", inv);
  });
});*/