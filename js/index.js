$(function () {
    $('.list a').hover(function () {
        $('.son').hide();
        $(this).next().show();
    });
    $('.menu').hover(function () {
        $('.son').hide();
    })
    var num=0;
    var t=setInterval(move,2000);
    function move(dir='right') {
        if(dir=='right'){
            num++;
            if(num>6){
                num=0;
            }
        }else if(dir=='left'){
            num--;
            if(num<0){
                num=$('.box a').length-1;
            }
        }

        $('.box a').css({
            'opacity':0,
            'z-index':0
        });
        $('.box .btns li').css('background','rgba(0,0,0,.8)');
        $('.box a').eq(num).animate({'opacity':1},2000,function () {
            $(this).finish();
        }).css('z-index',12);
        $('.box .btns li').eq(num).css('background','#fff');
    }
    $('.box .rightbtn').on('click',function () {
        move('right');
    });
    $('.box .leftbtn').on('click',function () {
        move('left')
    });
    $('.box a').hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,2000);
    });
    $('.box .btn').hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,2000);
    })
    $('.btns li').on('click',function () {
        clearInterval(t)
        var nums=$(this).index();
        $('.box a').css({
            'opacity':0,
            'z-index':0
        });
        $('.box .btns li').css('background','rgba(0,0,0,.8)');
        $('.box a').eq(nums).animate({'opacity':1},function () {
            $(this).finish();
        }).css('z-index',12);
        $(this).css('background','#fff');
        num=nums;
    })



});

