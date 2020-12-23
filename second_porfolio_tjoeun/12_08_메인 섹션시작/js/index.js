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
        var asideSide1 = $("#header .aside-side1");
        var asideSide2 = $("#header .aside-side2");
        var asideSide3 = $("#header .aside-side3");
        var aside4Btn1 = $("#header .aside4-btn1");
        var aside4Btn2 = $("#header .aside4-btn2");
        var aside4Btn3 = $("#header .aside4-btn3");
        var mobileMenuBar = $("#header .mobile");
        var mobileMenu = $("#header .mobile-menu")
        var i = 0;
        var _delta = null;

        //mousewheel 스크롤 다운 = 헤더없어짐 / 스크롤 업 = 헤더 검정배경으로 생김
        $("html,body").on("mousewheel DOMMouseScroll", function(event){
            event.preventDefault();
            if(event.detail){ 
                _delta = event.detail*(-1*40);   
            }
            else{
                _delta = event.originalEvent.wheelDelta;
            }
            if(_delta<0){
                $("#header").stop().css({top:-100});
                $(".goTop").fadeIn(500);
            }
            else{
                $("#header").stop().css({top:0});
                $(".goTop").fadeOut(500);
            }
        })

        $(window).scroll(function(){
            if( $(this).scrollTop() > $("#header").innerHeight() ){
                $("#header").addClass("addBackground");
            }
            else{
                $("#header").removeClass("addBackground");
            }
        })

        $(window).scroll(function(){
            if( $(this).scrollTop() > $(window).offset().top ){
                
            }
        })
            
        // 화면 줄이면 헤더 오른쪽 하트 아이콘 없애기
        setTimeout(resizeFn,100);

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
                    mobileMenuBar.removeClass("addClose");
                }
            }
        })

        // 모바일 메뉴 -> 사이드 메뉴 보이게하기
        $(".mobile-menu strong").each(function(index){

            $(".mobile-menu strong").eq(index).on({
                click:function(){
                    if(i==0){
                        i=1;
                        $(this).prev().css({color:("#8d8d8d")});
                        $(".mobile-menu ul").eq(index).slideDown(500);
                    }
                    else{
                        i=0;
                        $(this).prev().css({color:("#fff")});
                        $(".mobile-menu ul").eq(index).slideUp(200);
                    }
                }
            })

        })

        //모바일메뉴4번의 1, 10, 11번메뉴 fadein,out
        $(".aside4Btn").each(function(idx){
            $(this).eq(idx).on({
                mouseenter : function(){
                    $(this).$(".asideSideMenu").stop().fadeIn(400);
                },
                focusin:function(){
                    $(this).$(".asideSideMenu").stop().fadeIn(400);
                },
                mouseleave:function(){
                    $(this).$(".asideSideMenu").stop().fadeOut(400);
                }
            })
        })
                  
        /*
        $(".aside4Btn1").on({
            mouseenter:function(){
                $(".asideSideMenu1").stop().fadeIn(400);
            },
            focusin:function(){
                $(".asideSideMenu1").stop().fadeIn(400);
            }
        })
        aside4Btn1.on({
            mouseleave : function(){
                $(".asideSideMenu1").stop().fadeOut(400);
                
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
        })*/
        
        //헤더 메뉴 하나씩 보이게하기
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
        });

        $(".cart").on("mouseenter",function(){
            $(".h-cart").stop().animate({ right:0 },300);
        })
        $(".h-cart").on("mouseleave",function(){
            $(this).stop().animate({ right:-200 },300);
        })
        $(".mail").on("mouseenter",function(){
            $(".h-mail").stop().animate({ right:0 },300);
        })
        $(".h-mail").on("mouseleave",function(){
            $(this).stop().animate({ right:-200 },300);
        })
    },
    /*
    // 모달창
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
        //슬라이드 배경 포인터 반대쪽으로 자동이동시키기
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
