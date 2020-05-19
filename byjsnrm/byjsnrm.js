
  $(window).on('load', function(){
    setTimeout(removeLoader, 1000);
  });

  function removeLoader(){
     
    $("#Loader").fadeOut(1000, function(){
        $("html, body").removeClass("overflowhide");
        $("#Loader").addClass("curtain");
    });
        
      
  };



$(document).ready(function(){

    var definition = $("#Minibookdefinition");

    $("#scrolldown").click(function(){
        $("html,body").animate({
            scrollTop: $("#previousminibookssection").offset().top
        }, 2000);
    });


    $(".help").click(()=>{
        definition.toggleClass('show');
        $("html,body").toggleClass('overflowhide');
        $(".help").toggleClass('active');
    });



});