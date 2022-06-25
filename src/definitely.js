// https://github.com/dlvdls18/Definitely
function Definitely(promise, times, onsuccess, onerror, delay) {
  var runs = 0;
  var errlog = [];
  function run() {
    promise.then(function() {
      onsuccess.apply({}, [...arguments]);
    }).catch(function(e) {
      setTimeout(run, delay);
      errlog.push(e);
      runs++;
    });
    if(times => runs) onerror(errlog);
  }
  setTimeout(run, delay);
}
