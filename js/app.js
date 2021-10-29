$(document).ready(function() {

    $("#boton-platillos").click(function(){
        $(".redoblantes ,.hardware,.platillos").show()
        $(".redoblantes ,.hardware").toggle(1000)     
    })

    $("#boton-hardware").click(function(){
        $(".redoblantes ,.hardware,.platillos").show()
        $(".redoblantes,.platillos").toggle(1000)     
    })

    $("#boton-redoblantes").click(function(){
        $(".redoblantes ,.hardware,.platillos").show()
        $(".platillos,.hardware").toggle(1000)     
    })


});    

