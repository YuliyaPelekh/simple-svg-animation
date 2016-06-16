$(document).ready(function(){
    var point = $(".point-wrapper__point");
    var label = $(".point-wrapper__label");

	//label appears by hover on point
    point.mouseenter(function(){
        $(this).siblings(label).show();
    });


    //adds pulsation by hover{
    var addPulsation = function(){
        $(this).addClass('add-pulsation');
    }

   // stops animation by click
    var allPointsClick = function(){
          $(this).removeClass("add-pulsation");
    }

    //build connections
    var pointAClick =   function(event){
            event.stopPropagation();
            $("path").css({'visibility':'visible'});
            $(".line").css('stroke-dashoffset','0');
            $(label).css('display', 'block');
        }; 

    var pointBClick =   function(event){
            event.stopPropagation();
            $(".a-b").css({'visibility':'visible', 'stroke-dasharray':'0'});
        };


    var pointCClick =   function(event){
            event.stopPropagation();
            $(".a-c").css({'visibility':'visible', 'stroke-dasharray': '0'});
        };
        
    var pointDClick =   function(event){
            event.stopPropagation();
            $(".a-d").css({'visibility':'visible'});
        };


    $("#scenario1").click(function() {
        $("#point_b").unbind("click", pointBClick);
        $("#point_c").unbind("click", pointCClick);
        $("#point_d").unbind("click", pointDClick);
        $("#point_a").click(pointAClick);
        point.click(allPointsClick);
        point.mouseenter(addPulsation);
    });

    $("#scenario2").click(function() {
        $("#point_a").unbind("click", pointAClick);
        $("#point_b").click(pointBClick);
        $("#point_c").click(pointCClick);
        $("#point_d").click(pointDClick);
        point.click(allPointsClick);
        point.mouseenter(addPulsation);
    });

    //removes all effects by click on map
    $(".map").click(function(){
        $(".line").css({'stroke-dashoffset':'1000', 'stroke-dasharray': '1000'});
        $("path").css({'visibility':'hidden'});
        $(label).css('display', 'none');
    }); 
});
