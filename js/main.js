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
    $("#"+checkdata.force+"-uniform").css("display", "block")
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
    $(".uniform svg").css("display", "none")
    $(".main-badge").css("display", "block")
    $(".main-badge").removeAttr("style")
});





$('.cap-badge').on("click", function(){

    // alert("cap-badge")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    var checkdata = $(this).data();
    console.log(checkdata.force)
    
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/cap-badge.png");
})

$('.shoulder-strap').on("click", function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    alert("shoulder-strap:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.aiguillette').on("click", function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    alert("shoulder-strap:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.paratrooper-badge').on("click", function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    alert("paratrooper-badge:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.rashtriya-rifle').on("click", function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    alert("rashtriya-rifle:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.assam-rifle').on("click", function(){

    var checkdata = $(this).data();
    // console.log(checkdata.force)
    alert("assam-rifle:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})
$('.collar').on("click", function(){

    var checkdata = $(this).data();
    // console.log(checkdata.force)
    alert("collar:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.medals-of-honour').on("click", function(){

    // alert("medals-of-honour");
    $(".medals").css("display", "block");
    $(".otherbadges").css("display", "none");


})


// Commendation Badge
$('.coas-commendation').on("click", function(){

    var checkdata = $(this).data();
    // console.log(checkdata.force)
    alert("collar:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})


