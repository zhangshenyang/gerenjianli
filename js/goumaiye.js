/**
 * Created by Administrator on 2017/3/24 0024.
 */

$(function(){


//��Сͼ����ͼЧ��

$(".xiaotu li img").click(
    function(){
        var a=$(this).attr("alt");
        var b=$(this).attr("big");
        $(".jqzoom img").attr({"src":a,"jqimg":b});
        return false
    }
);

//��ͣͼƬ�ӱ߿�Ч��
$(".xiaotu li img").hover(
    function(){
        $(this).css("border","2px solid orange");

    },
    function(){
        $(this).css("border","0");
    }
);


//�Ŵ�Ч��
$(function(){

    $(".jqzoom").jqueryzoom(
        {xzoom:400,yzoom:300,offset:1}
    );
});



//���ͼ��Ķ����˵�Ч��


$(".caidan").hover(
    function(){
        $(this).find(".xiaoerji").stop().show()
    },
    function(){
        $(this).find(".xiaoerji").stop().hide()
    }
);


//��Ʒ���������ʽ

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



//�����������ʽЧ��
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





//��ͣ����ά����ʽ
$(".a3").hover(
    function(){
        $(this).children(".sao").show();
    },
    function(){
        $(this).children(".sao").hide();
    }
);

//ѡ�
$(".xuan li").click(
    function(){
        var t=$(this).index();
        $(".da>div").eq(t).show().siblings().hide();
        $(this).addClass("lei").siblings().removeClass("lei");
    }
);

});
