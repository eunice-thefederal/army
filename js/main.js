// var selectForce = document.querySelector(".defence-force");

// selectForce.addEventListener("click", function(){

//     alert("test")

// })

$(".main-badge").on("click", function(){

    var checkdata = $(this).data()

    console.log(checkdata.force);
    
    $(".defence-force").css("display", "none")
    $(".defence-force."+checkdata.force).css("display", "flex")
    $(".defence-force."+checkdata.force).css("width", "100vw")
    $(".defence-force."+checkdata.force).css("height", "100vh")
    $(".defence-force."+checkdata.force).addClass("active")

    $(".interactive-content").css("display", "block")
    // $(".interactive-content").css("width", "100%")
    // $(".interactive-content").css("height", "100%")
    // $(".interactive-content").css("position", "absolute")
    $(".interactive-content").css("display", "block")
    $("header").css("display", "none")
    // $(".uniform").css("display", "block")
    $(".main-badge").css("display", "none")
    // $(".otherbadges").css("display", "flex")
    // // $(".medals").css("display", "block")
    // var html = "<button class=\"closebtn\">X</button>"
    // $(".defence-force").append(html)

    

})

$(document).on('click', '.closebtn', function(){ 
    // Your Code
    $("header").css("display", "flex")
    $(".medals").css("display", "none")
    // $(".otherbadges").css("display", "none")
    $(".defence-force").removeAttr("style")
    $(".defence-force").removeClass("active")
    $(".interactive-content").css("display", "none")
    $(".main-badge").css("display", "block")
    $(".main-badge").removeAttr("style")
});

$('.cap-badge').on("click", function(){

    // alert("cap-badge")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.shoulder-strap').on("click", function(){

    // alert("shoulder-strap")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.army-braid').on("click", function(){

    // alert("army-braid")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.army-nametag').on("click", function(){

    // alert("army-nametag")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.badge1').on("click", function(){

    // alert("badge1")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.badge2').on("click", function(){

    // alert("badge2")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})
$('.collar').on("click", function(){

    // alert("collar")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})
$('.medals-of-honour').on("click", function(){

    // alert("medals-of-honour");
    $(".medals").css("display", "block");
    $(".otherbadges").css("display", "none");


})
// cap-badge
// shoulder-strap
// army-braid
// army-nametag
// badge1
// badge2
// collar
// medals-of-honour


