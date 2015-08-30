angular.module('app').factory('listsFactory',[function(){
    var service ={};
    var lists = [
        {
            id:1,
            listName:"Todo1"
        },
        {
            id:2,
            listName:"Todo2"
        },
        {
            id:3,
            listName:"Todo3"
        }
    ];

    service.getLists= function(){
        return lists;
    };

    service.addList = function(listName){
        //console.log();
        lists.push({
            id: _.unique('list_'),
            listName:listName
        });

    };
    return service;
}]);