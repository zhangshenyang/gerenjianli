/**
 * Created by caicai on 2017/6/5.
 */
$(function () {

    var i=0;   //当前页码

    //获取总的页数
    var pageCount=$(".page").length-1;

    //向上滑
    $("body").swipeUp(
        function () {

            if(i<pageCount){

                $(".page").eq(i).addClass("pageUp");
                //每次都有动画效果
                $(".page").eq(i).children().addClass("hide");
                i++;
                $(".page").eq(i).removeClass("pageDown");
                $(".page").eq(i).children().removeClass("hide");

            }



        }
    );
$(".page-2").swipeLeft(
    function(){
        if(i<pageCount){
          $(".page-2").children("div").eq(i).addClass("pageLeft");
            i++;
          $(".page-2").children("div").eq(i).removeClass("pageRight");
        }
    }
);



    //向下滑
    $("body").swipeDown(
        function () {

            if(i>0){

                $(".page").eq(i).addClass("pageDown");
                $(".page").eq(i).children().addClass("hide");
                i--;
                $(".page").eq(i).removeClass("pageUp");
                $(".page").eq(i).children().removeClass("hide");
            }

        }
    )


});