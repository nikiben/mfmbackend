module.exports = function(Branches) {
  Branches.near= function(here, limit, fn) {
    console.log(here);
    var default_result_count = 40;
    if (typeof limit === 'function') {
      fn = limit;
    }
    limit = Number(limit) || 40;
    Branches.find( {where: {geopoint: {near: here}}, limit:limit}, fn
    );
  };
  

  Branches.setup = function() {
    Branches.base.setup.apply(this, arguments);
    // load our data here?

    this.remoteMethod('near', {
      description: 'Find locations near the area defined by the map point',
      accepts: [
        {arg: 'here', type: 'GeoPoint', required: true,
          description: 'geo location (lng & lat)'},
        {arg: 'limit', type: 'Number',
          description: 'max number of results'}
      ],
      returns: {arg: 'branches', root: true},
      http: { verb: 'GET' }
    });
  };

  Branches.setup();
  
  
  
    Branches.byCategory = function (geodata, cb) {

        var ds = Branches.dataSource;
        var sql = "SELECT branchId, branchName, ( 3959 * acos( cos( radians(-79.629852) ) * cos( radians( Y(geopoint) ) ) * cos( radians( X(geopoint) ) - radians(43.591360) ) + sin( radians(-79.629852) ) * sin(radians(Y(geopoint))) ) ) AS distance FROM branches HAVING distance < 250 ORDER BY distance LIMIT 0 , 10";

        ds.connector.query(sql, cb); 

    };

    Branches.remoteMethod(
        'byCategory',
        {
            http: { verb: 'get' },
            description: 'Get list of branches',
            accepts: [{ arg: 'lat', type: 'string', description: 'lat' },
					{ arg: 'lng', type: 'string', description: 'lng' }
			],
            returns: { arg: 'data', type: 'Branches', root: true }
        }
    );
	
};
