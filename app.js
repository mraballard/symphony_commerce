(function(){
  angular.module('store', [])
  .controller('mainController', MainController);

  function MainController($http) {
    var self = this;
    self.filterPrice = 1000000000;  // Initializes filter price to large number

    $http({
      method: 'GET',
      url: `https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js`
    })
    .then(function(response){
      self.products = response.data.products;
    })
    .catch(function(err) {
      console.log(err);
    })

    self.filter = function() {  // Change value for filtering items less than $20
      console.log(self.filterPrice);
      if (self.filterPrice == 1000000000) {
        self.filterPrice = 20 * 100;
      }
      else {
        self.filterPrice = 1000000000;
      }
    }

    self.sortByName = function() {
      self.nameSort = true;
      self.priceSort = false;
      self.dateSort = false;
      console.log("sortByName");
    }
    self.sortByPrice = function() {
      self.nameSort = false;
      self.priceSort = true;
      self.dateSort = false;
      console.log("sortByPrice");

    }
    self.sortByDate = function() {
      self.nameSort = false;
      self.priceSort = false;
      self.dateSort = true;
      console.log("sortByDate");

    }

    self.sortByName();
  }

})()
console.log('app.js');
