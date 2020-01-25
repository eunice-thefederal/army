// var selectForce = document.querySelector(".defence-force");

// selectForce.addEventListener("click", function(){

//     alert("test")

// })

$(".main-badge").click(function(){

    var checkdata = $(this).data()

    console.log(checkdata.force);
    
    $(".defence-force").css("display", "none")
    $(".defence-force."+checkdata.force).css("display", "flex")
    $(".defence-force."+checkdata.force).css("width", "100vw")
    $(".defence-force."+checkdata.force).css("height", "100vh")
    $(".defence-force."+checkdata.force).addClass("active")

    $(".interactive-content").css("display", "block")
    $("#"+checkdata.force+"-uniform").css("display", "block")
    $(".interactive-content").css("display", "block")
    $("header").css("display", "none")
    $(".main-badge").css("display", "none")
    $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/"+checkdata.force+"/cap-badge.png")
    $(".content h2").css("display","none")
    $("#"+ checkdata.force +"-head").addClass("active")
    

})

$(".closebtn").click(function(){ 
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
    $(".content h2").css("display","block")
    $(".heads").removeClass("active")
});





$('.cap-badge').click(function(){

    // alert("cap-badge")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    var checkdata = $(this).data();
    console.log(checkdata.force)
    
    $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/"+checkdata.force+"/cap-badge.png");

    
})

$('.shoulder-strap').click(function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("shoulder-strap:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/"+checkdata.force+"/shoulder-strap.png");

})

$('.aiguillette').click(function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("shoulder-strap:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/aiguillette.png");

})

$('.chest-badge').click(function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("paratrooper-badge:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/"+checkdata.force+"/chest-badges.png");
})

$('.rashtriya-rifle').click(function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("rashtriya-rifle:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})

$('.assam-rifle').click(function(){

    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("assam-rifle:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})
$('.collar').click(function(){

    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("collar:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/"+checkdata.force+"/collar.png");
})

$('.medals-of-honour').click(function(){

    // alert("medals-of-honour");
    $(".medals").css("display", "block");
    $(".otherbadges").css("display", "none");


})


// Commendation Badge
$('.coas-commendation').click(function(){

    var checkdata = $(this).data();
    // console.log(checkdata.force)
    alert("collar:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");

})


