( () => {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.buy = function (index) {
            ShoppingListCheckOffService.buyItem(index);

        };
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();

        bought.removeItem = function (index) {
            ShoppingListCheckOffService.removeItem(index);
        };

       
    }

   

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            {
                quantity: 10,
                name: "Pizza",
            },
            {
                quantity: 15,
                name: "Momo",
            },
            {
                quantity: 16,
                name: "Rice",
            },
            {
                quantity: 20,
                name: "Cheese",
            },
            {
                quantity: 40,
                name: "Tomato",
            }

        ];

        var boughtItems = [];

        service.buyItem = function (index) {
            boughtItems.push(toBuyItems[index]);
            toBuyItems.splice(index, 1);
        };

        service.getToBuyItems = function () {   
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.removeItem = function (index) {
            boughtItems.splice(index, 1);
/*            toBuyItems.push(boughtItems[index]);
*/

        };
    }

})();