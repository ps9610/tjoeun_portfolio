;(function(window,document,$,undefined){

var hongo = {

    init : function(){
        var that = this;
            that.headerFn();
            that.section01Fn();
            //that.modalFn();
    },
    headerFn : function(){  
        var win_dow = $(window);
        var winW = $(window).innerWidth();
        var simpleHeartMenu = $("#header .simple-menu li").eq(2);
        var t=0;
        var menuWrap = $("#header .menu-wrap");
        var aside4Btn1AndSide1 = $("#header .aside4-btn1, #header .aside-side1");
        var asideSide1 = $("#header .aside-side1");
        var aside4Btn2 = $("#header .aside4-btn2");
        var asideSide2 = $("#header .aside-side2");
        var aside4Btn3 = $("#header .aside4-btn3");
        var asideSide3 = $("#header .aside-side3");
        var mobileMenuBar = $("#header .mobile");
        var mobileMenu = $("#header .mobile-menu")
        var i = 0;
        var _delta = null;

     
        $("html,body").on("mousewheel DOMMouseScroll", function(event){
            event.preventDefault();
            if(event.detail){
             _delta = event.detail*(-1*40);   
            }
            else{
                _delta = event.originalEvent.wheelDelta;
            }
            if(_delta<0){
                $("#header").css({top:-100});
            }
            else{
                $("#header").css({top:0});
            }
        })

        $(window).scroll(function(){
            if($(this).scrollTop()>$("#header").innerHeight()){
                $("#header").addClass("addBackground");
            }
            else{
                $("#header").removeClass("addBackground");
            }
        })
            
        setTimeout(resizeFn,100);

        // 화면 줄이면 헤더 오른쪽 하트 아이콘 없애기
        function resizeFn(){
            
            winW = $(window).innerWidth();
            simpleHeartMenu = $("#main #section01 #header .simple-menu li").eq(2);
            t=0;
            menuWrap = $("#main #section01 #header .menu-wrap");
            mobileMenuBar = $(".mobile");
            
            if (winW < 992){
                if(t==0){
                    t=1;
                    simpleHeartMenu.fadeOut(0);
                    menuWrap.fadeOut(0);
                    mobileMenuBar.show();
                }
            }
            else{
                t=0;
                simpleHeartMenu.fadeIn(0);
                menuWrap.fadeIn(0);
                mobileMenuBar.hide();
                $(".mobile-menu").hide();

            }
        };

        win_dow.resize(function(){
            resizeFn();
        });

        // 모바일 메뉴 클릭시 메뉴보이고 닫기버튼 생성
        mobileMenuBar.on({
            click:function(e){
                e.preventDefault();
                if(i==0){
                    i=1;
                    mobileMenu.slideDown(500);
                    $(this).addClass("addClose");
                }
                else{
                    i=0;
                    mobileMenu.slideUp(500);
                    $(this).removeClass("addClose");
                }
            }
            })

            // 모바일 메뉴 사이드 메뉴 보이게하기

            $(".mobile-menu strong").eq(0).on({
                click:function(){
                    if(i==0){
                        i=1;
                        $(this).prev().css({color:("#8d8d8d")});
                        $(".mobile-menu ul").eq(0).slideDown(500);
                    }
                    else{
                        i=0;
                        $(this).prev().css({color:("#fff")});
                        $(".mobile-menu ul").eq(0).slideUp(200);
                    }
                }
            })
            $(".mobile-menu strong").eq(1).on({
                click:function(e){
                    e.preventDefault();
                    if(i==0){
                        i=1;
                        $(this).prev().css({color:("#8d8d8d")});
                        $(".mobile-menu ul").eq(1).slideDown(500);
                    }
                    else{
                        i=0;
                        $(this).prev().css({color:("#fff")});
                        $(".mobile-menu ul").eq(1).slideUp(200);
                    }
                }
            })
            $(".mobile-menu strong").eq(2).on({
                click:function(e){
                    e.preventDefault();
                    if(i==0){
                        i=1;
                        $(this).prev().css({color:("#8d8d8d")});
                        $(".mobile-menu ul").eq(2).slideDown(500);
                    }
                    else{
                        i=0;
                        $(this).prev().css({color:("#fff")});
                        $(".mobile-menu ul").eq(2).slideUp(200);
                    }
                }
            })
            $(".mobile-menu strong").eq(3).on({
                click:function(e){
                    e.preventDefault();
                    if(i==0){
                        i=1;
                        $(this).prev().css({color:("#8d8d8d")});
                        $(".mobile-menu ul").eq(3).slideDown(500);
                    }
                    else{
                        i=0;
                        $(this).prev().css({color:("#fff")});
                        $(".mobile-menu ul").eq(3).slideUp(200);
                    }
                }
            })
            
            $(".mobile-menu strong").eq(4).on({
                click:function(e){
                    e.preventDefault();
                    if(i==0){
                        i=1;
                        $(this).prev().css({color:("#8d8d8d")});
                        $(".mobile-menu ul").eq(4).slideDown(500);
                    }
                    else{
                        i=0;
                        $(this).prev().css({color:("#fff")});
                        $(".mobile-menu ul").eq(4).slideUp(200);
                    }
                }
            })
            $(".mobile-menu strong").eq(5).on({
                click:function(e){
                    e.preventDefault();
                    if(i==0){
                        i=1;
                        $(this).prev().css({color:("#8d8d8d")});
                        $(".mobile-menu ul").eq(5).slideDown(500);
                    }
                    else{
                        i=0;
                        $(this).prev().css({color:("#fff")});
                        $(".mobile-menu ul").eq(5).slideUp(200);
                    }
                }
            })
            
            $(".mobile-menu strong").eq(6).on({
                click:function(e){
                    e.preventDefault();
                    if(i==0){
                        i=1;
                        $(this).prev().css({color:("#8d8d8d")});
                        $(".mobile-menu ul").eq(6).slideDown(500);
                    }
                    else{
                        i=0;
                        $(this).prev().css({color:("#fff")});
                        $(".mobile-menu ul").eq(6).slideUp(200);
                    }
                }
            })


        aside4Btn1AndSide1.on({
            mouseenter:function(){
                asideSide1.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide1.stop().fadeIn(400);
            }
        })
        aside4Btn1AndSide1.on({
            mouseleave : function(){
                asideSide1.stop().fadeOut(400);
                
            }
        })       
        aside4Btn2.on({
            mouseenter:function(){
                asideSide2.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide2.stop().fadeIn(400);
            }
        })
        aside4Btn2.on({
            mouseleave : function(){
                asideSide2.stop().fadeOut(400);
            }
        })

        aside4Btn3.on({
            mouseenter:function(){
                asideSide3.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide3.stop().fadeIn(400);
            }
        })
        aside4Btn3.on({
            mouseleave : function(){
                asideSide3.stop().fadeOut(400);
            }
        })
        
         
        $(".li-wrap").on({
            mouseenter:function(){
                $(".aside").stop().slideUp(0);
                $(this).next().stop().slideDown(500);
                //❓ 여기서 왜 next()가 들어가는지 모르겠어요😭
                // $(this)는 console.log(this)를 입력해서, li-wrap의 a 링크라는 건 알았는데요,
                // $(this).next()면 해당 클래스의 다음 요소여야 하지 않나요..?
            },
            focusin:function(){
                $(".aside").stop().slideUp(0);
                $(this).next().stop().slideDown(500);
            }
        }) 
        $(".nav").on({
            mouseleave:function(){
                $(".aside").stop().slideUp(300);
            }
        })
    },

    /*
    modalFn : function(){

        var htmlRoot = $("html");
        var modal = $(".modal");
        var closeBtn = $(".modal .close-btn");

        setTimeout(countFn,5000);

        function countFn(){
            modal.stop().fadeIn(0);
            htmlRoot.addClass("addScroll");
        }

        closeBtn.on({
            click : function(){
                modal.stop().fadeOut(300);
                htmlRoot.removeClass("addScroll");
            }
        });
    },
        */

    section01Fn : function(){
    $("#section01 .li-bg").on({
        mousemove : function(event){
            $(this).css({backgroundPosition: -event.clientX*0.025+"px " + -event.clientY*0.025+"px"},1000,"swing")  
        },
        mouseleave : function(event){
            $(this).css({backgroundPosition: event.clientX*0.025+"px " + event.clientY*0.025+"px"},1000,"swing")
        }
    })
   },



}

hongo.init();

})(window,document,jQuery);
