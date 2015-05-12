module.exports = function(app) {
  /*app.dataSources.mysqlIDs.autoupdate('Feeds', function(err) {
    if (err) throw err;
 
    app.models.Feeds.create([
      {feedId: 110, branchId: 101, feedTitle: 'God is Able', feedText: 'MFM Toronto', date: new Date()},
    ], function(err, feeds) {
      if (err) throw err;
 
      console.log('Models created: \n', feeds);
    });
  });
  
	app.dataSources.mysqlIDs.autoupdate('Profile', function(err) {
		if (err) throw err;
	});
	
	app.dataSources.mysqlIDs.autoupdate('Prayerpoints', function(err) {
		if (err) throw err;
	});
	
	app.dataSources.mysqlIDs.autoupdate('Prayerpoints', function(err) {
		if (err) throw err;
	});

	app.dataSources.mysqlIDs.autoupdate('Publications', function(err) {
		if (err) throw err;
	});
	
	app.dataSources.mysqlIDs.autoupdate('HouseFelowship', function(err) {
		if (err) throw err;
	}); 
	*/
	/*app.dataSources.mysqlIDs.autoupdate('Login', function(err) {
		if (err) throw err;
	});*/
	
	// Discover and build models from INVENTORY table
	/*app.dataSources.mysqlIDs.discoverAndBuildModels('live', {visited: {}, owner: 'LOOPBACK', associations: true},
	function (err, models) {
	  // Now we have a list of models keyed by the model name
	  // Find the first record from the inventory
	  models.live.findOne({}, function (err, inv) {
		if(err) {
		  console.error(err);
		  return;
		}
		console.log("\live: ", inv);
	  });
	});*/
	

};