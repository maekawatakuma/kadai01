// alert(11111);
// 紐づいてるかどうか確認すること

// console.log("はじめてのジャバスクリプト");

// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5");

// var name="前川拓磨";

// console.log("自分の名前表示");
// console.log(name);

// // if条件
// var point=90;
// if(point>=80){
//     console.log('素晴らしいおめでとう!');
// }else{
//     console.log('もっと頑張りましょう!');
// } 

// // ランダム関数(if)
// var random=Math.floor( Math.random() *5+1);
// // 5+1にすることで0をなくすことができる
// console.log(random);

// var test=Math.floor( Math.random() *5);
// if(test == 1){
//     console.log('数字は1です');
// }else if(test == 2){
//     console.log('数字は2です');
// }else if(test == 3){
//     console.log('数字は3です');
// }else if(test == 4){
//     console.log('数字は4です');
// }else if(test == 5){
//     console.log('数字は5です');
// }else if(test == 0){
//     console.log('数字は0です');
// }

// 下記の記述をする
// $('.class').text();

$(document).ready(function() {

    $("#hide").on("click", function() {
        // $('#test').html('あいうえお');
        // $('#hide').css('color','#f00');
        $('#hide').fadeOut(2000);

    });
    $("#show").on("click", function() {
        // $('#test').html('あいうえお');
        // $('#hide').css('color','#f00');
        $('#hide').fadeIn(2000);

    });

    var count=0;
    $('#show').on('click', function(){
        count++;
        $('#test'),html(count);
    });

})