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

    $("#"+checkdata.force+"-medals").css("display", "block")
    $(".interactive-content").css("display", "block")
    $("#"+checkdata.force+"-uniform").css("display", "block")
    $(".interactive-content").css("display", "block")
    $("header").css("display", "none")
    $(".main-badge").css("display", "none")

    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/cap-badge.png")
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cap"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cap"]["desc"]);

    $(".content h2").css("display","none")
    $("#"+ checkdata.force +"-head").addClass("active")
    

})

$(".closebtn").click(function(){ 
    // Your Code
    $("header").css("display", "flex")
    $(".medals").css("display", "none")
    $(".defence-medals").css("display", "none")
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





$('.all-medals').click(function(){
    var checkdata = $(this).data();
    console.log(allmedals[checkdata.medal])

    if(checkdata.medal !== "medalna"){
        $(".medalimg img").attr("src", "img/medals/"+checkdata.medal+".png");
        $(".medaltxt h3").text(allmedals[checkdata.medal]["name"]);
        $(".medaltxt p").text(allmedals[checkdata.medal]["desc"]);

    }
    
    
})

$('.cap-badge').click(function(){

    // alert("cap-badge")
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    var checkdata = $(this).data();
    console.log(checkdata.force)
    
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/cap-badge.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cap"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cap"]["desc"]);
    
})

$('.shoulder-strap').click(function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("shoulder-strap:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/shoulder-strap.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["shoulder"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["shoulder"]["desc"]);
})

$('.aiguillette').click(function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("shoulder-strap:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/aiguillette.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["aiguillette"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["aiguillette"]["desc"]);

})

$('.collar').click(function(){

    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("collar:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/collar.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["collar"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["collar"]["desc"]);
})


$('.chest-badge').click(function(){
    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("paratrooper-badge:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/chest-badges.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["chestbadge"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["chestbadge"]["desc"]);
})

$('.rashtriya-rifle').click(function(){
    var checkdata = $(this).data();
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/rashtriya-rifle.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["rashtriyarifle"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["rashtriyarifle"]["desc"]);

})

$('.assam-rifle').click(function(){

    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("assam-rifle:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/assam-rifles.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["assamrifle"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["assamrifle"]["desc"]);

})

$('.sword').click(function(){

    var checkdata = $(this).data();
    // console.log(checkdata.force)
    // alert("assam-rifle:"+checkdata)
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/sword.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["sword"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["sword"]["desc"]);

})

$('.medals-of-honour').click(function(){

    // alert("medals-of-honour");
    $(".medals").css("display", "block");
    $(".otherbadges").css("display", "none");
    
    $(".medalimg img").attr("src", "img/medals/pvsm.png");
        $(".medaltxt h3").text(allmedals["pvsm"]["name"]);
        $(".medaltxt p").text(allmedals["pvsm"]["desc"]);


})


// Commendation Badge
$('.coas-commendation').click(function(){

    var checkdata = $(this).data();
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/commendation-badge.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["coascommendation"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["coascommendation"]["desc"]);

})


$('.cas-commendation').click(function(){

    var checkdata = $(this).data();
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/commendation-badge.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cascommendation"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cascommendation"]["desc"]);

})


$('.ats-badge').click(function(){

    var checkdata = $(this).data();
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/ats-badge.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["atcbadge"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["atcbadge"]["desc"]);

})
$('.master-green').click(function(){

    var checkdata = $(this).data();
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/master-green.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["mastergreen"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["mastergreen"]["desc"]);

})
$('.cross-belt').click(function(){

    var checkdata = $(this).data();
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/cross-belt.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["crossbelt"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["crossbelt"]["desc"]);

})
$('.red-commendation').click(function(){

    var checkdata = $(this).data();
    $(".medals").css("display", "none");
    $(".otherbadges").css("display", "flex");
    $(".badgeimg img").attr("src", "img/"+checkdata.force+"/red-commendation.png");
    $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cdscommendation"]["name"]);
    $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cdscommendation"]["desc"]);

})



