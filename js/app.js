$(document).ready(function() {
    $("#boton-atras").toggle()

    $("#boton-atras").click(function() {
        $(".redoblantes,.hardware,.platillos,.baterias").show()
        $("#boton-platillos, #boton-hardware, #boton-redoblantes, #boton-baterias").show()
        $("#boton-atras").toggle(1000)
    })

    $("#boton-platillos").click(function(){
        $("#boton-atras").show()
        $(".redoblantes,.hardware,.baterias").toggle(1000)
        $("#boton-hardware, #boton-redoblantes, #boton-baterias").toggle(1000)
            
    })

    $("#boton-hardware").click(function(){
        $("#boton-atras").show(1000)
        $(".redoblantes,.platillos,.baterias").toggle(1000)   
        $("#boton-platillos, #boton-redoblantes, #boton-baterias").toggle(1000)  
    })

    $("#boton-redoblantes").click(function(){
        $("#boton-atras").show(1000)
        $(".platillos,.hardware,.baterias").toggle(1000)
        $("#boton-hardware, #boton-platillos, #boton-baterias").toggle(1000)     
    })

    $("#boton-baterias").click(function(){
        $("#boton-atras").show(1000)
        $(".platillos,.hardware,.redoblantes").toggle(1000)  
        $("#boton-hardware, #boton-redoblantes, #boton-platillos").toggle(1000)   
    })

    
});    

