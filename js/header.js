/**
 * Created by Administrator on 2017/3/20 0020.
 */


//�����˵�
$(function() {


    $(".nav>li").hover(
        function () {
            $(this).find(".menu").stop().show();


        },
        function () {
            $(this).find(".menu").stop().hide();


        }
    );
});



