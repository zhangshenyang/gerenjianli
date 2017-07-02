/**
 * Created by Administrator on 2017/3/22 0022.
 */


//轮播效果


$(function(){


    $('.banner_lun').kxbdSuperMarquee({
        distance:1349,
        time:3,
        direction: 'left',
        navId:'.xiao',

    })



});

$(function(){

    $(".xiao li:eq(0)").text("新风尚");
    $(".xiao li:eq(1)").text("超级秒杀");
    $(".xiao li:eq(2)").text("Tee咖");
    $(".xiao li:eq(3)").text("官方商城App");


});


$(function(){


//main小轮播图
$(".menuxiao li").hover(
    function(){
        var s=$(this).index();
        $(".menuda li").eq(s).stop().fadeIn().siblings().hide();
        $(this).addClass("kon").siblings().removeClass("kon");
    },
    function(){}
);


//悬停显示div
$(".huan li").hover(
    function(){
        $(this).children(".xuan").show()
    },
    function(){
        $(this).children(".xuan").hide()
    }
);


//悬停向左移动，离开回去效果
$(".main3_top li").hover(
    function(){

        $(this).children("img").animate({"margin-left":"-15px"})
    },
    function(){
        $(this).children("img").stop().animate({"margin-left":"0px"})
    }
);
//悬停向上移动，离开回去效果
$(".main3_bottom li").hover(
    function(){

        $(this).children("img").animate({"margin-top":"-15px"})
    },
    function(){
        $(this).children("img").stop().animate({"margin-top":"0px"})
    }
);


//点击关闭二维码效果

$(".er1").click(
    function(){
        $(".erweima").css("display","none");
    }
);


});