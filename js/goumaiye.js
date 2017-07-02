/**
 * Created by Administrator on 2017/3/24 0024.
 */

$(function(){


//点小图换大图效果

$(".xiaotu li img").click(
    function(){
        var a=$(this).attr("alt");
        var b=$(this).attr("big");
        $(".jqzoom img").attr({"src":a,"jqimg":b});
        return false
    }
);

//悬停图片加边框效果
$(".xiaotu li img").hover(
    function(){
        $(this).css("border","2px solid orange");

    },
    function(){
        $(this).css("border","0");
    }
);


//放大镜效果
$(function(){

    $(".jqzoom").jqueryzoom(
        {xzoom:400,yzoom:300,offset:1}
    );
});



//添加图标的二级菜单效果


$(".caidan").hover(
    function(){
        $(this).find(".xiaoerji").stop().show()
    },
    function(){
        $(this).find(".xiaoerji").stop().hide()
    }
);


//商品添加数量样式

$(".san").click(
    function(){
        $(".last").animate({"margin-top":"-24px"},300,function(){
            var i=$(".last li:first").remove();
            $(".last").append(i);
            $(".last").css("margin-top",0);
        })
    }
);


$(".yi").click(
    function(){
        var a=$(".last li:last").remove();
        $(".last").prepend(a);
        $(".last").css("margin-top","-24px");
        $(".last").stop().animate({"margin-top":"0"},300);
    }
);



//单击添加类样式效果
$(".yifu li").click(
    function(){
        $(this).addClass("kong").siblings().removeClass("kong");
    }
);
$(".haoma li").click(
    function(){
        $(this).addClass("kong").siblings().removeClass("kong");
        return false
    }
);





//悬停出二维码样式
$(".a3").hover(
    function(){
        $(this).children(".sao").show();
    },
    function(){
        $(this).children(".sao").hide();
    }
);

//选项卡
$(".xuan li").click(
    function(){
        var t=$(this).index();
        $(".da>div").eq(t).show().siblings().hide();
        $(this).addClass("lei").siblings().removeClass("lei");
    }
);

});
