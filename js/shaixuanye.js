/**
 * Created by Administrator on 2017/3/29 0029.
 */

$(function(){


    //ɸѡЧ��
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

//��ͣ����С�˵�Ч��
$(".da_sx li").hover(
    function(){
        $(this).children(".sx_erji").stop().show();
    },
    function(){
        $(this).children(".sx_erji").hide();
    }
);


//��������ʽ�л�Ч��
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


//ͼƬչʾЧ��
    $(".tp").hover(
        function(){
            $(this).find("img").stop().animate({"width":"240px","height":"240px","opacity":"1"},300);
        },
        function(){
            $(this).find("img").stop().animate({"width":"220px","height":"220px","opacity":"0.5"},300);
        }
    )



});