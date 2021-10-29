$(document).ready(function() {

    $("#boton-platillos").click(function(){
        $(".redoblantes,.hardware,.platillos,.baterias").show()
        $(".redoblantes,.hardware,.baterias").toggle(1000)     
    })

    $("#boton-hardware").click(function(){
        $(".redoblantes,.hardware,.platillos,.baterias").show()
        $(".redoblantes,.platillos,.baterias").toggle(1000)     
    })

    $("#boton-redoblantes").click(function(){
        $(".redoblantes ,.hardware,.platillos,.baterias").show()
        $(".platillos,.hardware,.baterias").toggle(1000)     
    })

    $("#boton-baterias").click(function(){
        $(".redoblantes,.hardware,.platillos,.baterias").show()
        $(".platillos,.hardware,.redoblantes").toggle(1000)     
    })


});    

