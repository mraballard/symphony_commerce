(function(){
  angular.module('store', [])
  .controller('mainController', MainController);

  function MainController($http) {
    var self = this;
    $http({
      method: 'GET',
      url: `https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js`
    })
    .then(function(response){
      self.products = response.data.products;
      console.log(self.products);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

})()
console.log('app.js');
