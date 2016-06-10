(function ($, undefined) { 
    
    var resturantData = resturants.data;
    var showDiners = function (){
        var resultString = [""];
        $.each(resturantData, function (key, place){
           if (place.types.join('').indexOf('food') != -1) {
                resultString.push("<div class='resturant bool-grid-cell'>");
                if(place.photos !=undefined )  {
                   
                    resultString.push(["<p>",place.photos[0].html_attributions[0],"</p>"].join(''));
                }
                resultString.push("</div>");
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
                resultString.push("<div class='resturant bool-grid-cell'>");
                if(place.photos !=undefined)  {
                    resultString.push(["<p>",place.photos[0].html_attributions[0],"</p>"].join(''));
                }
                resultString.push(['rating:', place.rating].join(''));
                resultString.push("</div>");
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