angular.module('app').controller('listsCtrl',['listsFactory',function(listsFactory){
    console.log('listsCtrl::');
    this.lists = listsFactory.getLists();
    console.log(listsFactory.getLists());

    this.addList = function(){
        //e.preventDefault();
        console.log('this new list',this.listName);
        listsFactory.addList(this.listName);
        this.listName = '';
    };
}]);