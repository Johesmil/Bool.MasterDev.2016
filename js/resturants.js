(function ($, undefined) { 
    
    var resturantData = resturants.data;
    var showDiners = function (){
        var resultString = [""];
        $.each(resturantData, function (key, place){
           if (place.types.join('').indexOf('food') != -1) {
            resultString.push(["<div class='resturant'>",place.name,"</div>"].join(''));
           }
        });
        debugger
        
        $('#placesToEat').empty();
        $('#placesToEat').append(resultString.join(''));
    };
    
    var showBars = function (){
        var resultString = [""];
        $.each(resturantData, function (key, place){
           if (place.types.join('').indexOf('bar') != -1) {
                resultString.push(["<div class='resturant'>",place.name,"</div>"].join(''));
           } 
        });
        debugger
        $('#placesToEat').empty();
        $('#placesToEat').append(resultString.join(''));

    };
    
    
    
    window.resturants = window.resturants || {};
    resturants.showBars = showBars;
    resturants.showDiners = showDiners;
    
})(jQuery);