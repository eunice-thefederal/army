// var selectForce = document.querySelector(".defence-force");

// selectForce.addEventListener("click", function(){

//     alert("test")

// })

$(".defence-force").on("click", function(){



    $("header").css("display", "none")
    $(".defence-force").css("display", "none")

    $(".uniform").css("display", "block")
    $(".main-badge").css("display", "none")
    $(".otherbadges").css("display", "flex")
    // $(".medals").css("display", "block")
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
    $(".otherbadges").css("display", "none")
    $(".defence-force").removeAttr("style")
    $(".defence-force").removeClass("active")
    $(".uniform").css("display", "none")
    $(".main-badge").css("display", "block")
    $(".main-badge").removeAttr("style")
});

$('.cap-badge').on("click", function(){

    alert("cap-badge")

})

$('.shoulder-strap').on("click", function(){

    alert("shoulder-strap")

})

$('.army-braid').on("click", function(){

    alert("army-braid")

})

$('.army-nametag').on("click", function(){

    alert("army-nametag")

})

$('.badge1').on("click", function(){

    alert("badge1")

})

$('.badge2').on("click", function(){

    alert("badge2")

})
$('.collar').on("click", function(){

    alert("collar")

})
$('.medals-of-honour').on("click", function(){

    alert("medals-of-honour")

})
// cap-badge
// shoulder-strap
// army-braid
// army-nametag
// badge1
// badge2
// collar
// medals-of-honour


