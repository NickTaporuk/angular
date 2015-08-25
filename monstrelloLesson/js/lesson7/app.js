// создание директив(шаблоны для многоразового использования)
//
var app = angular.module('app',[]);

// короткий вариант
app.directive('foo',[function(){
    return {
        link:function(scope,element,attrs){
            console.log('scope:',scope);
            console.log('element:',element);
            console.log('attrs:',attrs);
            console.log('text::',element.text());
            //element.text('This is here magic angular');
            element.on('click', function(){
                if(element.text() === 'foo'){
                    element.text('bar');
                } else{
                    element.text('foo');
                }
            });
        }
    }
}]);

/*
app.directive('foo',[function(){
    return function(scope,element,attrs){
        console.log('This is directive:',attrs);
    }
}]);*/

