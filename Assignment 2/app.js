(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var showToBuyList = this;

  showToBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  showToBuyList.buyItem = function (itemIndex) {

    ShoppingListCheckOffService.buyItem(itemIndex);

  }

}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var showBoughtList = this;

  showBoughtList.items = ShoppingListCheckOffService.getBoughtItems();

}
function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var buyItems = [
    { name: "Notebooks", quantity: 7 },
    { name: "Pencils (pack of 10)", quantity: 3 },
    { name: "Fountain Pen", quantity: 3 },
    { name: "Pencil Sharperner", quantity: 1 },
    { name: "Bookbag", quantity: 1 }
  ];



  // List of bought items
  var boughtItems = []

  service.getToBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.buyItem = function (itemIndex){
    boughtItems.push(buyItems[itemIndex]);
    buyItems.splice(itemIndex,1);
  }

}

})();
