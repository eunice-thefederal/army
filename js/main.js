if($(window).width() > 767) { 
    $(".main-badge").click(function(){

        var checkdata = $(this).data()
    
        console.log(checkdata.force);
        
        $(".defence-force").css("display", "none")
        $(".defence-force."+checkdata.force).css("display", "flex")
        $(".defence-force."+checkdata.force).css("width", "100vw")
        $(".defence-force."+checkdata.force).css("height", "100vh")
        $(".defence-force."+checkdata.force).addClass("active")
        console.log("test", checkdata.force)
        $("#"+checkdata.force+"-medals").css("display", "block")
        $(".interactive-content").css("display", "block")
        $("#"+checkdata.force+"-uniform").css("display", "block")
        $(".interactive-content").css("display", "block")
        $(".otherbadges").css("display", "none")
        $("header").css("display", "none")
        $(".main-badge").css("display", "none")
    
        $(".defaulttxt").css("display", "block")
        $(".defaulttxt h1").text(forcedata[checkdata.force+"data"]["chief"])
        $(".defaulttxt h2").text(forcedata[checkdata.force+"data"]["chieftitle"])
        $(".defaulttxt h3").text(forcedata[checkdata.force+"data"]["uniform"]["name"])
        $(".defaulttxt p").text(forcedata[checkdata.force+"data"]["uniform"]["desc"])
    
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
        
        $(".defaulttxt").css("display", "none")
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/cap-badge.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cap"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cap"]["desc"]);
        
    })
    
    $('.shoulder-strap').click(function(){
        var checkdata = $(this).data();
        // console.log(checkdata.force)
        // alert("shoulder-strap:"+checkdata)
        $(".defaulttxt").css("display", "none")
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
        $(".defaulttxt").css("display", "none")
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
        $(".defaulttxt").css("display", "none")
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
        $(".defaulttxt").css("display", "none")
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/chest-badges.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["chestbadge"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["chestbadge"]["desc"]);
    })
    
    $('.rashtriya-rifle').click(function(){
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".defaulttxt").css("display", "none")
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
        $(".defaulttxt").css("display", "none")
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
        $(".defaulttxt").css("display", "none")
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/sword.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["sword"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["sword"]["desc"]);
    
    })
    
    $('.medals-of-honour').click(function(){
        var checkdata = $(this).data();
        // alert("medals-of-honour");
        $(".medals").css("display", "block");
        $(".defaulttxt").css("display", "none")
        $(".otherbadges").css("display", "none");
        // $("#"+checkdata.force+"-medals").css("display", "block");
        
        $(".medalimg img").attr("src", "img/medals/pvsm.png");
            $(".medaltxt h3").text(allmedals["pvsm"]["name"]);
            $(".medaltxt p").text(allmedals["pvsm"]["desc"]);
    
    
    })
    
    
    // Commendation Badge
    $('.coas-commendation').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".defaulttxt").css("display", "none")
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/commendation-badge.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["coascommendation"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["coascommendation"]["desc"]);
    
    })
    
    
    $('.cas-commendation').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".defaulttxt").css("display", "none")
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/commendation-badge.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cascommendation"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cascommendation"]["desc"]);
    
    })
    
    
    $('.ats-badge').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".defaulttxt").css("display", "none")
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/ats-badge.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["atcbadge"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["atcbadge"]["desc"]);
    
    })
    $('.master-green').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".defaulttxt").css("display", "none")
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/master-green.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["mastergreen"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["mastergreen"]["desc"]);
    
    })
    $('.cross-belt').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".defaulttxt").css("display", "none")
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/cross-belt.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["crossbelt"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["crossbelt"]["desc"]);
    
    })
    $('.red-commendation').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".defaulttxt").css("display", "none")
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/red-commendation.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cdscommendation"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cdscommendation"]["desc"]);
    
    })



} else {
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
        $("header").css("display", "none")
        $(".main-badge").css("display", "none")

        $(".defaulttxt").css("display", "block")
        $(".defaulttxt h1").text(forcedata[checkdata.force+"data"]["chief"])
        $(".defaulttxt h2").text(forcedata[checkdata.force+"data"]["chieftitle"])
        $(".defaulttxt h3").text(forcedata[checkdata.force+"data"]["uniform"]["name"])
        $(".defaulttxt p").text(forcedata[checkdata.force+"data"]["uniform"]["desc"])

        $(".content h2").css("display","none")
        $("#"+ checkdata.force +"-head").addClass("active")
        
        $(".modal-content").css("display", "none")

        $(".otherbadges").css("display", "none")
    })

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
        
        $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/"+checkdata.force+"/cap-badge.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cap"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cap"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
        
    })
    $('.shoulder-strap').click(function(){
        var checkdata = $(this).data();
        // console.log(checkdata.force)
        // alert("shoulder-strap:"+checkdata)
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/"+checkdata.force+"/shoulder-strap.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["shoulder"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["shoulder"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    })
    
    $('.aiguillette').click(function(){
        var checkdata = $(this).data();
        // console.log(checkdata.force)
        // alert("shoulder-strap:"+checkdata)
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/aiguillette.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["aiguillette"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["aiguillette"]["desc"]);
        
        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    })
    
    $('.collar').click(function(){
    
        var checkdata = $(this).data();
        // console.log(checkdata.force)
        // alert("collar:"+checkdata)
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/"+checkdata.force+"/collar.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["collar"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["collar"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    })
    
    
    $('.chest-badge').click(function(){
        var checkdata = $(this).data();
        // console.log(checkdata.force)
        // alert("paratrooper-badge:"+checkdata)
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "https://thefederal.com/embed/army-master/img/"+checkdata.force+"/chest-badges.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["chestbadge"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["chestbadge"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")

    })
    
    $('.rashtriya-rifle').click(function(){
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/rashtriya-rifle.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["rashtriyarifle"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["rashtriyarifle"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    
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

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    
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

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    
    })
    
    $('.medals-of-honour').click(function(){
    
        // alert("medals-of-honour");
        $(".medals").css("display", "block");
        $(".otherbadges").css("display", "none");
        
        $(".medalimg img").attr("src", "img/medals/pvsm.png");
        $(".medaltxt h3").text(allmedals["pvsm"]["name"]);
        $(".medaltxt p").text(allmedals["pvsm"]["desc"]);

        var checkdata = $(this).data();

	$("#"+checkdata.force+"-medals").css("display", "block")

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    })
    
    
    // Commendation Badge
    $('.coas-commendation').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/commendation-badge.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["coascommendation"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["coascommendation"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    
    })
    
    
    $('.cas-commendation').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/commendation-badge.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cascommendation"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cascommendation"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    
    })
    
    
    $('.ats-badge').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/ats-badge.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["atcbadge"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["atcbadge"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    
    })
    $('.master-green').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/master-green.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["mastergreen"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["mastergreen"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    
    })
    $('.cross-belt').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/cross-belt.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["crossbelt"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["crossbelt"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    
    })
    $('.red-commendation').click(function(){
    
        var checkdata = $(this).data();
        $(".medals").css("display", "none");
        $(".otherbadges").css("display", "flex");
        $(".badgeimg img").attr("src", "img/"+checkdata.force+"/red-commendation.png");
        $(".badgetxt h3").text(forcedata[checkdata.force+"data"]["cdscommendation"]["name"]);
        $(".badgetxt p").text(forcedata[checkdata.force+"data"]["cdscommendation"]["desc"]);

        $(".modal-content").css("display", "block")
        $(".titles").css("display","none")
        $(".uniform").css("display", "none")
        $(".closebtn").css("display", "none");
        $(".mob-close").css("display","block");
        $(".defaulttxt").css("display", "none")
    
    })

    $(".mob-close").click(function(){ 
        // Your Code
        $(".modal-content").css("display", "none")
        $(".interactive-content").css("display", "block")
        $("header").css("display", "none")
        $(".closebtn").css("display", "block")
        $(".uniform").css("display", "block")
        $(".titles").css("display","block")
    });
}



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

$(document).ready(function(){
    $("g[data-force='army']").css("cursor","pointer")
    $("g[data-force='navy']").css("cursor","pointer")
    $("g[data-force='cds']").css("cursor","pointer")
    $("g[data-force='airforce']").css("cursor","pointer")
})
