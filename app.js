(function(){
  angular.module('store', [])
  .controller('mainController', MainController);

  function MainController($http) {
    var self = this;
    self.filterPrice = 1000000000;  // Initializes filter price to large number so that on page load, all items are shown
    self.getProducts = function() {  // Get request for product list
      $http({
        method: 'GET',
        url: `https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js`
      })
      .then(function(response){
        self.products = response.data.products;
        self.getMaxPrice();  // Function call to save highest price of all items to variable maxPrice
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    self.filter = function() {  // Change value for filtering items less than $20
      if (self.filterPrice == self.maxPrice) {
        self.filterPrice = 20 * 100;
      }
      else {
        self.filterPrice = self.maxPrice;
      }
    }

    self.getMaxPrice = function() { // Save highest price of all items to variable maxPrice
      self.maxPrice = 0;
      self.products.forEach(function(el){
        if (self.maxPrice < el.defaultPriceInCents) {
          self.maxPrice = el.defaultPriceInCents;
        }
      });
    }

    self.getProducts();
  }

})()
console.log('app.js');
