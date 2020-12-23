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
        var asideSide1 = $("#header .asideSideMenu1");
        var asideSide2 = $("#header .asideSideMenu2");
        var asideSide3 = $("#header .asideSideMenu3");
        var aside4Btn1 = $("#header .aside4Btn1");
        var aside4Btn2 = $("#header .aside4Btn2");
        var aside4Btn3 = $("#header .aside4Btn3");

        var mobileMenuBar = $("#header .mobile");
        var mobileMenu = $("#header .mobile-menu")
        var i = 0;
        var _delta = null;
        
        var url = null;

        var htmlRoot = $("html");

        //smooth-scrolling
        $(".smooth-btn").on("click",function(e){
            e.preventDefault();
                url = $(this).attr("href");
                $("html, body").stop().animate({ scrollTop:$(url).offset().top },800,"easeInOutCubic");
                $(".goTop").fadeIn(500);
                $("#header").stop().css({top:-100},1000);
        })

        /* $(), jQuery(); 
        jQuery 는 생성자 함수다.
        즉, jQuery 부모에 접근하여 모든 자식들이 상속받도록 하는 것이다. */

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

        // 헤더 모달창 -> 돋보기 버튼 누르면 검색창 나오기
        $(".search-btn").on("click", function(){
            $(".search-modal").slideDown(200);
            htmlRoot.addClass("addScroll");
        })
        $(".close .close-btn").on("click", function(){
            $(".search-modal").slideUp(200);
            htmlRoot.removeClass("addScroll");
            ("#header").show();
        })

        // 헤더 반응형 -> 오른쪽 하트 아이콘 없애기
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
        aside4Btn1.on({
            mouseenter:function(){
                asideSide1.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide1.stop().fadeIn(400);
            }
        })
        aside4Btn1.on({
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

        //퀵메뉴 호버시 글씨 보이기, 마우스 벗어나면 다시 원상태
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
        var closeBtn = $(".close-btn");

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
        var winH = $(window).innerHeight();
        var contentWrapH = $(".content-wrap").innerHeight();
        var contentWrapTop = (winH-contentWrapH)/2;
        
        var winW = $(window).innerWidth();
        var section01 = $("#section01");
        var textWrap = $(".text-wrap");
        var imageWrap = $(".image-wrap");
        var textW = textWrap.innerWidth();
        var textH = textW*0.538888889;
        var imageW = imageWrap.innerWidth();
        var imageH = imageW*0.996969697;

        var fontSizeH4 = textW*rateH4;
        var textWrapH4 = $(".text-wrap h4");
        var rateH4 = 0.02037037;

        var fontSizeH2 = textW*rateH2;
        var textWrapH2 = $(".text-wrap h2");
        var rateH2 = 0.098148148;

        var fontSizeP = textW*rateP;
        var textWrapP = $(".text-wrap p");
        var rateP = 0.037037037;

        //슬라이드 배경 포인터 반대쪽으로 자동이동시키기
        $("#section01 .li-bg").on({
            mousemove : function(event){
                $(this).css({backgroundPosition: -event.clientX*0.025+"px " + -event.clientY*0.025+"px"},1000,"swing")  
            },
            mouseleave : function(event){
                $(this).css({backgroundPosition: event.clientX*0.025+"px " + event.clientY*0.025+"px"},1000,"swing")
            }
        })
        setTimeout(resizeFn,100);
        //섹션01화면 반응형
        //1. 창을 늘리고 줄일때마다 가운데 시계랑 문구의 높이가 같이 늘어나고 줄어들어야함
        function resizeFn(){
            winH = ($(window).innerHeight())+72;
            contentWrapH = $(".content-wrap").innerHeight();
            contentWrapTop = (winH-contentWrapH)/2;

            winW = $(window).innerWidth();
            section01 = $("#section01");
            textWrap = $(".text-wrap");
            imageWrap = $(".image-wrap");
            textW = textWrap.innerWidth();
            textH = textW*0.538888889;
            imageW = imageWrap.innerWidth();
            imageH = imageW*0.996969697;
            
            fontSizeH4 = textW*rateH4;
            fontSizeH2 = textW*rateH2;
            fontSizeP = textW*rateP;

            if(winW<1200){
                textWrapH4.css({fontSize:fontSizeH4});
                textWrapH2.css({fontSize:fontSizeH2});
                textWrapP.css({fontSize:fontSizeP});
            }
        }
        $(window).resize(function(){
            resizeFn()
        })
   },



}

hongo.init();

})(window,document,jQuery);
