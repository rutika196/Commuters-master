var Mta = require('mta-gtfs');
var mta = new Mta({
  key: '2d78d99cc66f29c5f2beead9b9e534f4', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

// mta.stop().then(function (result) {
//   console.log(result);
// }).catch(function (err) {
//   console.log(err);
// });


// mta.stop(635).then(function (result) {
//   console.log(result);
// });


  mta.status('subway').then(function (result) {
    console.log(result);
  });
