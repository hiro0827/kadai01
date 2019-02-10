//alert(1111);

//console.log("初めてのジャバスクリプト");
//console.log(23+5);
//console.log(2000-1800);
//console.log("18+5");


//var name=("角田");
//console.log('自分の名前を表示');
//console.log(name);

//var point =70;
//if(point>=80){
//    console.log("素晴らしい！おめでとう！")
//}else{
//    console.log("もっと頑張りましょう！")
//}

//var random =Math.floor(Math.random()*10);
//console.log(random)

//var point_a =4
//var point_b =7

//if(point_a >=random){
//    console.log("A以下");
//}else if(point_a ==random){
//    console.log("Aと等しい");
//}else if(point_a <=random && point_b >random){
//    console.log("Aより大きくBより小さい");
//}else if(point_a <random){
//    console.log("Aより大きい");
//}else{
//    console.log("その他")
//}

//------------------


//$(document).on("click",function(){
//    $("#test").html('あああああ');
//    $("#test").css('color','#f00');

//    $("#test1").fadeOut(2000);
//    $("#test1").fadeIn(2000)
//    $("#test1").css("color", "#f00");
//})

var count=0;
var b_count=2;

$("#show").on("click",function(){
    $("#test").fadeIn(2000);
    $("#test"). html("border" + count + 'px');
    $("#test"). css("border", "#222 2px solid")
    $("#test"). countUp(count++);

})

$("#hide").on("click",function(){
    $("#test").fadeOut(2000);
})