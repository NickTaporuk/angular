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
        console.log(listName);
        lists.push({
            id: _.unique('list_'),
            listName:listName
        });
        console.log('lists::',lists);
    };

    service.removeList = function(list){
        _.pull(lists,list);
    };

    return service;
}]);