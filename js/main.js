// var selectForce = document.querySelector(".defence-force");

// selectForce.addEventListener("click", function(){

//     alert("test")

// })

$(".defence-force").on("click", function(){



    $("header").css("display", "none")
    $(".defence-force").css("display", "none")

    $(".uniform").css("display", "block")
    $(".main-badge").css("display", "none")
    $(".medals").css("display", "block")
    $(this).css("display", "flex")
    $(this).css("width", "100vw")
    $(this).css("height", "100vh")
    $(this).addClass("active")
    var html = "<button class=\"closebtn\">X</button>"
    $(this).append(html)

    

})

$(document).on('click', '.closebtn', function(){ 
    // Your Code
    $("header").css("display", "flex")
    $(".medals").css("display", "none")
    $(".defence-force").removeAttr("style")
    $(".defence-force").removeClass("active")
    $(".uniform").css("display", "none")
    $(".main-badge").css("display", "block")
});


