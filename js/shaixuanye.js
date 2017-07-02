/**
 * Created by Administrator on 2017/3/29 0029.
 */

$(function(){


    //筛选效果
    $(".box1 ul li a").click(
        function(){
            var i=$(this).parent().index();
            if(i==1){

                $(this).parent().addClass("tian")
                    .siblings().removeClass("tian");
                $(this).css("color","#ffffff").parent()
                    .siblings().children("a").css("color","#666666")
            }


            $(this).parent("li:not(:eq(1))").addClass("tian")
                .siblings("li:eq(1)").removeClass("tian");
            $(this).css("color","#ffffff").parent()
                .siblings("li:eq(1)").children("a").css("color","#666666");
            return false


        }
    );


    $(".box1 li span").click(
        function(){
            $(this).parent("li").removeClass("tian");
            $(this).siblings("a").css("color","#666666");

        }
    );

//悬停二级小菜单效果
$(".da_sx li").hover(
    function(){
        $(this).children(".sx_erji").stop().show();
    },
    function(){
        $(this).children(".sx_erji").hide();
    }
);


//单击类样式切换效果
$(".shaixuan2>a").click(
    function(){
        $(this).toggleClass("sx2_kon");
        return false
    }
);
    $(".shaixuan2 li").click(
        function(){
            $(this).children("li a").toggleClass("sx2_kong");
            return false
        }
    );


//图片展示效果
    $(".tp").hover(
        function(){
            $(this).find("img").stop().animate({"width":"240px","height":"240px","opacity":"1"},300);
        },
        function(){
            $(this).find("img").stop().animate({"width":"220px","height":"220px","opacity":"0.5"},300);
        }
    )



});