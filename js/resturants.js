(function ($, undefined) { 
    
    var resturantData = resturants.data;
    var showDiners = function (){
        var resultString = [""];
        $.each(resturantData, function (key, place){
           resultString.push(getPlacePrintString(place, "restaurant"));
        });
        debugger
        $('#placesToEat').empty();
        $('#placesToEat').append(resultString.join(''));
    };
    
    var showBars = function (){
        var resultString = [""];
        $.each(resturantData, function (key, place){
            resultString.push(getPlacePrintString(place, "bar"));
        });
        debugger
        $('#placesToEat').empty();
        $('#placesToEat').append(resultString.join(''));

    };
    
    var getPlacePrintString = function (place, type) {
        var resultString = [''];
        if (place.types.join('').indexOf(type) != -1) {
                resultString.push("<div class='bool-grid-cell place'>");
                resultString.push(["<p>",place.name,"</p>"].join(''));
                if(place.opening_hours && place.opening_hours.open_now){
                    resultString.push("<span style='color:green'>open now!!</span><br><br>");
                } else {
                    resultString.push("<span style='color:red'>to bad, this place is closed :(</span><br><br>");
                }
                
                resultString.push([ place.formatted_address,'<br><br>'].join(''))
                
                if(place.photos !=undefined)  {
                    resultString.push(place.photos[0].html_attributions[0]);
                }
                resultString.push([' has a rating of: ', place.rating].join(''));
                
                resultString.push("</div></div>");
          } 
          return resultString.join(''); 
        
    }
    
    
    window.resturants = window.resturants || {};
    resturants.showBars = showBars;
    resturants.showDiners = showDiners;
    
})(jQuery);