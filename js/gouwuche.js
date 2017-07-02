/**
 * Created by Administrator on 2017/3/30 0030.
 */


$(function(){
//购物流程效果图
$(".buzou li .a2").hover(
    function(){
        $(this).children(".sp2").css({"background":"#ffffff","color":"orange"})
    },
    function(){
        $(this).children(".sp2").css({"background":"#cbcbcb","color":"#ffffff"})
    }
);
});


//购买数跟价钱同步
$(function(){


    $(".zi3 .box3").click(
        function(){
            var i=$(this).prev(".box2").val();
            i=Number(i)+Number(1);
            $(this).siblings(".box2").val(i);
            var q=$(".center .q1").val();
            var w=$(".center .q2").val();
            var e=$(".center .q3").val();
            var r=Number(q)+Number(w)+Number(e);
            var t=79*r;
            $(".jiage").val(t);
        }
    );
    $(".zi3 .box1").click(
        function(){
            var w=$(this).next(".box2").val();
            w=w-1;
            if(w==0){
                w=1
            };
            $(this).siblings(".box2").val(w);
            var q=$(".center .q1").val();
            var w=$(".center .q2").val();
            var e=$(".center .q3").val();
            var r=Number(q)+Number(w)+Number(e);
            var t=79*r;
            $(".jiage").val(t);
        }
    );

});



$(function(){


//移除购物车
$(".zi7 .yichu").click(
    function(){
        $(this).parent().parent(".center").hide();
        return false
    }
);



$(".zi7 .yichu").click(
    function(){
        var i=$(".jiage").val();
        $(this).parent().parent().siblings(".bottom")
            .children(".bottom2")
            .children(".jiage").val(i-79);
    }

);

$(".qingkong").click(
    function(){
        $(this).parent().parent().siblings(".center").hide();
        var t=$(".jiage").val();
        $(this).parent().parent().siblings(".bottom")
            .children(".bottom2")
            .children(".jiage").val(t=0);
        return false
    }
);

});

